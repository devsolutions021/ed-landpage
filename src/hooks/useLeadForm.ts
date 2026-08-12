import { useMemo, useState } from 'react';
import { maskPhone, onlyDigits } from '@/lib/mask';
import { INSTAGRAM_DM } from '@/data/socials';

// ─── Tipos ────────────────────────────────────────────────
export interface LeadFormState {
  name: string;
  city: string;
  phone: string;
  message?: string;
  options: string[];
}

type Field = 'name' | 'city' | 'phone' | 'message';

interface UseLeadFormArgs {
  availableOptions?: string[];
  requireOption?: boolean;
  dmIntro?: string;
}

// ─── Hook: formulário de captação (sem backend — compõe mensagem Instagram) ──
export function useLeadForm({ availableOptions = [], requireOption = false, dmIntro = 'Olá! Quero fazer parte da campanha.' }: UseLeadFormArgs = {}) {
  // Estados
  const [state, setState] = useState<LeadFormState>({
    name: '',
    city: '',
    phone: '',
    message: '',
    options: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Constantes derivadas
  const isValid = useMemo(() => {
    const hasName = state.name.trim().length >= 2;
    const hasCity = state.city.trim().length >= 2;
    const hasPhone = onlyDigits(state.phone).length >= 10;
    const hasOption = !requireOption || state.options.length > 0;
    return hasName && hasCity && hasPhone && hasOption;
  }, [state, requireOption]);

  // Funções
  const setField = (field: Field, value: string) => {
    setState((prev) => ({
      ...prev,
      [field]: field === 'phone' ? maskPhone(value) : value,
    }));
  };

  const toggleOption = (option: string) => {
    setState((prev) => ({
      ...prev,
      options: prev.options.includes(option)
        ? prev.options.filter((o) => o !== option)
        : [...prev.options, option],
    }));
  };

  const buildMessageUrl = () => {
    const lines = [
      dmIntro,
      '',
      `Nome: ${state.name}`,
      `Cidade: ${state.city}`,
      `Telefone: ${state.phone}`,
    ];
    if (state.message?.trim()) lines.push(`Mensagem: ${state.message}`);
    if (state.options.length) lines.push(`Interesses: ${state.options.join(', ')}`);
    const text = encodeURIComponent(lines.join('\n'));
    return `${INSTAGRAM_DM}?text=${text}`;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setError('Preencha nome, cidade e um telefone válido para continuar.');
      return;
    }
    setError(null);
    window.open(buildMessageUrl(), '_blank', 'noopener');
    setSubmitted(true);
  };

  const reset = () => {
    setState({ name: '', city: '', phone: '', message: '', options: [] });
    setSubmitted(false);
    setError(null);
  };

  return {
    state,
    submitted,
    error,
    isValid,
    availableOptions,
    setField,
    toggleOption,
    submit,
    reset,
  };
}
