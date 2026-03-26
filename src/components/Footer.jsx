import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="py-14 px-6" style={{ backgroundColor: 'var(--bg-dark)' }}>
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        <div className="flex-shrink-0">
          <img src="/__logo-big-fundopreto.png.png" alt="Big Invest" className="h-10 w-auto mb-5" />
          <div className="flex gap-3">
            {[
              { href: 'https://www.instagram.com/theo.limaxp/', icon: Instagram, label: 'Instagram' },
              { href: 'https://www.linkedin.com/in/theo-lima-b32104214/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:theo.lima@biginvest.com.br', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid var(--border-dark)', color: 'var(--text-muted-dark)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-dark)'; e.currentTarget.style.color = 'var(--text-muted-dark)'; }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-2xl">
          <p className="leading-relaxed" style={{ color: 'var(--text-muted-dark)', fontSize: '0.72rem' }}>
            A BIG ASSESSORIA DE INVESTIMENTOS LTDA, CNPJ 32.889.084/0001-52, é uma empresa de Assessoria de Investimento registrada na CVM (Resolução CVM 178/23), com contrato de distribuição junto à XP Investimentos CCTVM S.A. Na forma da legislação da CVM, o Assessor de Investimento não pode administrar ou gerir patrimônio. O investimento em ações é de risco e rentabilidade passada não é garantia de resultados futuros. Para reclamações: Ouvidoria XP 0800 722 3730.
          </p>
          <p className="mt-5" style={{ color: 'var(--text-muted-dark)', fontSize: '0.72rem', opacity: 0.5 }}>
            © 2026 Theo Lima. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
