import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?autoload=1&app_absent=0', '_blank');
  };

  return (
    <footer className="relative py-12 px-4 bg-black border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/2736db8cd68e6856d85df3cb1fab2ef2.png" 
              alt="Big Invest Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/theo.limaxp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#E1306C]/20 border border-white/10 hover:border-[#E1306C]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(225,48,108,0.3)]"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/theo-lima-b32104214/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#0077B5]/20 border border-white/10 hover:border-[#0077B5]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,119,181,0.3)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="mailto:theo.lima@biginvest.com.br"
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Legal disclaimer */}
          <div className="text-center max-w-4xl space-y-4">
            <p className="text-[#C0C0C0] text-xs leading-relaxed text-justify">
              A BIG ASSESSORIA DE INVESTIMENTOS LTDA, inscrita sob o CNPJ: 32.889.084/0001-52 é uma empresa de Assessoria de Investimento devidamente registrada na Comissão de Valores Mobiliários na forma da Resolução CVM 178/23 ("Sociedade"), que mantém contrato de distribuição de produtos financeiros com a XP Investimentos Corretora de Câmbio, Títulos e Valores Mobiliários S.A. ("XP") e pode, por conta e ordem dos seus clientes, operar no mercado de capitais segundo a legislação vigente. Na forma da legislação da CVM, o Assessor de Investimento não pode administrar ou gerir o patrimônio de investidores. O investimento em ações é um investimento de risco e rentabilidade passada não é garantia de rentabilidade futura. Na realização de operações com derivativos existe a possibilidade de perdas superiores aos valores investidos, podendo resultar em significativas perdas patrimoniais. A Sociedade poderá exercer atividades complementares relacionadas aos mercados financeiro, securitário, de previdência e capitalização, desde que não conflitem com a atividade de assessoria de investimentos, podendo ser realizada por meio da pessoa jurídica acima descrita ou por meio de pessoa jurídica terceira. Todas as atividades são prestadas mantendo a devida segregação e em cumprimento ao quanto previsto nas regras da CVM ou de outros órgãos reguladores e autorreguladores. Para informações e dúvidas sobre produtos, contate seu assessor de investimentos. Para reclamações, contate a Ouvidoria da XP pelo telefone 0800 722 3730.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2026 Theo Lima. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;