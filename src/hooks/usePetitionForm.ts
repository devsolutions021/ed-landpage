import { useMemo, useState } from 'react';
import { maskPhone, onlyDigits } from '@/lib/mask';
import { INSTAGRAM_DM } from '@/data/socials';
import { PETITION_GOAL } from '@/data/petition';

// ─── Hook: assinatura do abaixo-assinado ──────────────────
export function usePetitionForm() {
  // Estados
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [supports, setSupports] = useState(false);
  const [wantsUpdates, setWantsUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signatures, setSignatures] = useState(PETITION_GOAL.current);

  // Constantes derivadas
  const isValid = useMemo(() => {
    return name.trim().length >= 2 && city.trim().length >= 2 && onlyDigits(phone).length >= 10 && supports;
  }, [name, city, phone, supports]);

  const progress = Math.min(Math.round((signatures / PETITION_GOAL.target) * 100), 100);

  // Funções
  const changePhone = (value: string) => setPhone(maskPhone(value));

  const buildMessageUrl = () => {
    const lines = [
      'Assino o abaixo-assinado pela saúde do Noroeste Paulista.',
      '',
      `Nome: ${name}`,
      `Cidade: ${city}`,
      `Telefone: ${phone}`,
      wantsUpdates ? 'Quero receber notícias da mobilização.' : '',
    ].filter(Boolean);
    return `${INSTAGRAM_DM}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setError('Preencha nome, cidade, um telefone válido e confirme o apoio à mobilização.');
      return;
    }
    setError(null);
    setSignatures((n) => n + 1);
    window.open(buildMessageUrl(), '_blank', 'noopener');
    setSubmitted(true);
  };

  const reset = () => {
    setName('');
    setCity('');
    setPhone('');
    setSupports(false);
    setWantsUpdates(false);
    setSubmitted(false);
    setError(null);
  };

  return {
    name,
    city,
    phone,
    supports,
    wantsUpdates,
    submitted,
    error,
    isValid,
    signatures,
    progress,
    setName,
    setCity,
    changePhone,
    setSupports,
    setWantsUpdates,
    submit,
    reset,
  };
}
