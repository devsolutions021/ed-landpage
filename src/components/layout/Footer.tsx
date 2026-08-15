import { Logo } from '@/components/ui';
import { LINKS } from '@/data/links';
import { SOCIALS } from '@/data/socials';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-x px-5 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="inline-flex">
              <Logo className="h-14" />
            </span>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              Edinho é candidato a Deputado Federal por São Paulo. Foi prefeito de São José do Rio Preto e de Santa Fé do
              Sul, deputado estadual, deputado federal e ministro de Portos.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 text-white/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">Navegação</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><a href="#inicio" className="hover:text-gold">Início</a></li>
              <li><a href="#resultados" className="hover:text-gold">Resultados</a></li>
              <li><a href="#compromissos" className="hover:text-gold">Compromissos</a></li>
              <li><a href="#faca-parte" className="hover:text-gold">Faça parte</a></li>
              <li><a href={LINKS.abaixoAssinado} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Abaixo-assinado da Saúde</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">Participe</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><a href={LINKS.linktree} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Todos os links</a></li>
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-xs leading-relaxed text-white/50">
          <p className="font-bold uppercase tracking-wide text-white/70">
            Eleição 2026 — Edson Edinho Coelho Araújo — Deputado Federal
          </p>
          <p className="mt-2">CNPJ: 68.312.650/0001-06</p>
          <p>Rua Rubião Junior, 3127, Apto 111 – Centro</p>
          <p>São José do Rio Preto/SP – CEP 15010-090</p>
          <p>
            E-mail:{' '}
            <a href="mailto:edinho@edinho2525.com.br" className="hover:text-gold">
              edinho@edinho2525.com.br
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Edinho Araújo 2525. Todos os direitos reservados.</p>
          <p className="font-semibold text-white/55">A força de São Paulo em Brasília.</p>
        </div>
      </div>
    </footer>
  );
}

