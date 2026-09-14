import { ChevronLeft, MessageCircle } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

const sections = [
  {
    title: '1. Informações que coletamos',
    content: [
      'Coletamos apenas as informações necessárias para prestar o atendimento solicitado, incluindo:',
      '• Nome e dados de contato fornecidos voluntariamente pelo usuário;',
      '• Mensagens e conteúdo enviado via WhatsApp ou outros canais de comunicação;',
      '• Dados técnicos como endereço IP, tipo de navegador e dispositivo, coletados automaticamente.',
    ],
  },
  {
    title: '2. Como utilizamos suas informações',
    content: [
      'As informações coletadas são utilizadas exclusivamente para:',
      '• Prestar o atendimento e suporte solicitados;',
      '• Responder a dúvidas e solicitações de serviços;',
      '• Cumprir obrigações legais e regulatórias.',
    ],
  },
  {
    title: '3. Compartilhamento de dados',
    content: [
      'Não vendemos, alugamos ou comercializamos seus dados pessoais. As informações podem ser compartilhadas apenas:',
      '• Com prestadores de serviços que atuam em nosso nome (ex.: plataformas de atendimento);',
      '• Quando exigido por lei ou ordem judicial;',
      '• Mediante consentimento explícito do titular dos dados.',
    ],
  },
  {
    title: '4. Segurança das informações',
    content: [
      'Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração ou divulgação indevida. Entre as medidas estão:',
      '• Criptografia de dados em trânsito;',
      '• Controle de acesso restrito a pessoal autorizado;',
      '• Monitoramento contínuo de segurança.',
    ],
  },
  {
    title: '5. Seus direitos (LGPD - Lei nº 13.709/2018)',
    content: [
      'Você tem o direito de:',
      '• Confirmar a existência de tratamento dos seus dados;',
      '• Acessar, corrigir, atualizar ou excluir seus dados;',
      '• Solicitar a portabilidade dos dados;',
      '• Revogar o consentimento a qualquer momento.',
      'Para exercer seus direitos, entre em contato pelo WhatsApp: (11) 96207-0183.',
    ],
  },
  {
    title: '6. Retenção de dados',
    content: [
      'Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei. Após esse período, os dados são excluídos de forma segura.',
    ],
  },
  {
    title: '7. Alterações desta política',
    content: [
      'Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página com regularidade para se manter informado sobre quaisquer mudanças.',
    ],
  },
];

export default function Privacy({ onBack }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-ink-50 flex flex-col">
      <header className="bg-brand-950 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={onBack} className="flex items-center gap-1 text-brand-300 hover:text-brand-200 transition-colors font-medium text-sm">
            <ChevronLeft className="w-5 h-5" />
            Voltar
          </button>
          <h1 className="text-lg font-bold text-white">Política de Privacidade</h1>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">
        <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-ink-100 p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-ink-800">Política de Privacidade</h2>
          </div>
          <p className="text-sm text-ink-400 mb-8">Última atualização: 14 de setembro de 2026</p>
          {sections.map((section, i) => (
            <div key={i} className={i > 0 ? 'mt-8 pt-8 border-t border-ink-50' : ''}>
              <h3 className="text-lg font-bold text-ink-800 mb-3">{section.title}</h3>
              {section.content.map((line, j) => (
                <p key={j} className="text-ink-600 leading-relaxed mb-2">{line}</p>
              ))}
            </div>
          ))}
          <div className="mt-10 pt-6 border-t border-ink-100">
            <p className="text-ink-500 text-sm">
              Em caso de dúvidas sobre esta Política de Privacidade, entre em contato através do WhatsApp: (11) 96207-0183.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
