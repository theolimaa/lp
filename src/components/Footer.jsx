import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="px-5 lg:px-16 py-12" style={{ backgroundColor: 'var(--dark)' }}>
    <hr style={{ borderColor: 'rgba(249,248,246,0.08)', marginBottom: '2.5rem' }} />
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
      <div className="flex-shrink-0">
        <img src="/__logo-big-fundopreto.png.png" alt="Big Invest" style={{ height: '36px', width: 'auto', marginBottom: '1.25rem', opacity: 0.7 }} />
        <div className="flex gap-3">
          {[
            { href: 'https://www.instagram.com/theo.limaxp/', icon: Instagram, label: 'Instagram' },
            { href: 'https://www.linkedin.com/in/theo-lima-b32104214/', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:theo.lima@biginvest.com.br', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center transition-colors duration-200"
              style={{ border: '1px solid rgba(249,248,246,0.12)', color: 'rgba(249,248,246,0.4)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(249,248,246,0.4)'; e.currentTarget.style.borderColor = 'rgba(249,248,246,0.12)'; }}
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-xl">
        <p style={{ color: 'rgba(249,248,246,0.3)', fontSize: '0.68rem', lineHeight: 1.75 }}>
          A BIG ASSESSORIA DE INVESTIMENTOS LTDA, CNPJ 32.889.084/0001-52, é uma empresa de Assessoria de Investimento registrada na CVM (Resolução CVM 178/23), com contrato de distribuição junto à XP Investimentos CCTVM S.A. Na forma da legislação da CVM, o Assessor de Investimento não pode administrar ou gerir patrimônio. O investimento em ações é de risco e rentabilidade passada não é garantia de resultados futuros. Para reclamações: Ouvidoria XP 0800 722 3730.
        </p>
        <p style={{ color: 'rgba(249,248,246,0.2)', fontSize: '0.68rem', marginTop: '1rem' }}>
          © 2026 Theo Lima. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
