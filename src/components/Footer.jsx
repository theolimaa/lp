import React from 'react';
import { Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-oxford-blue border-t border-dark-goldenrod/20 py-12 px-4 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <img 
            src="https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/4b41b22c0b6cdef505156d8d0259e359.png" 
            alt="Theo Lima" 
            className="h-10"
          />
        </div>

        <div className="flex justify-center items-center gap-6 mb-8">
            <a 
              href="https://wa.me/message/UZZHBP7KOC5AJ1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-antiflash-white hover:text-dark-goldenrod transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="https://www.instagram.com/theorlimaa/?next=%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-antiflash-white hover:text-dark-goldenrod transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
        </div>
        
        <div className="border-t border-dark-goldenrod/20 pt-8">
          <p className="text-xs text-antiflash-white leading-relaxed mb-4 max-w-4xl mx-auto">
            A BIG ASSESSORIA DE INVESTIMENTOS LTDA, inscrita sob o CNPJ: 32.889.084/0001-52 é uma empresa de Assessoria 
            de Investimento devidamente registrada na Comissão de Valores Mobiliários na forma da Resolução CVM 178/23 
            ("Sociedade"), que mantém contrato de distribuição de produtos financeiros com a XP Investimentos Corretora 
            de Câmbio, Títulos e Valores Mobiliários S.A. ("XP") e pode, por conta e ordem dos seus clientes, operar no 
            mercado de capitais segundo a legislação vigente. Na forma da legislação da CVM, o Assessor de Investimento 
            não pode administrar ou gerir o patrimônio de investidores. O investimento em ações é um investimento de risco 
            e rentabilidade passada não é garantia de rentabilidade futura. Na realização de operações com derivativos existe 
            a possibilidade de perdas superiores aos valores investidos, podendo resultar em significativas perdas patrimoniais. 
            A Sociedade poderá exercer atividades complementares relacionadas aos mercados financeiro, securitário, de previdência 
            e capitalização, desde que não conflitem com a atividade de assessoria de investimentos, podendo ser realizada por 
            meio da pessoa jurídica acima descrita ou por meio de pessoa jurídica terceira. Todas as atividades são prestadas 
            mantendo a devida segregação e em cumprimento ao quanto previsto nas regras da CVM ou de outros órgãos reguladores 
            e autorreguladores. Para informações e dúvidas sobre produtos, contate seu assessor de investimentos. Para reclamações, 
            contate a Ouvidoria da XP pelo telefone 0800 722 3730.
          </p>
          <p className="text-sm text-antiflash-white text-center mt-6">
            © {new Date().getFullYear()} Theo Lima. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;