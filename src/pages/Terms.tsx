import { ChevronLeft, MessageCircle } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

const sections = [
  {
    title: '1. Aceitação dos termos',
    content: [
      'Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Caso não concorde com qualquer um dos termos, por favor não utilize o site.',
    ],
  },
  {
    title: '2. Descrição do serviço',
    content: [
      'Este site oferece uma central de atendimento com canais de comunicação via WhatsApp para suporte técnico, solicitação de segunda via de boleto, atendimento seguro e outros serviços relacionados. O atendimento é prestado durante o horário de funcionamento divulgado.',
    ],
  },
  {
    title: '3. Uso permitido',
    content: [
      'Você concorda em utilizar o site apenas para fins legítimos e de acordo com a legislação aplicável. É proibido:',
      '• Utilizar o site para qualquer finalidade ilegal ou não autorizada;',
      '• Tentar acessar áreas restritas sem autorização;',
      '• Enviar conteúdo ofensivo, fraudulento ou que viole direitos de terceiros;',
      '• Utilizar sistemas automatizados para sobrecarregar o site.',
    ],
  },
  {
    title: '4. Comunicação via WhatsApp',
    content: [
      'Ao iniciar uma conversa pelo WhatsApp, você concorda em compartilhar informações com nossa equipe para fins de atendimento. As conversas são regidas também pela Política de Privacidade do WhatsApp e pela nossa Política de Privacidade.',
    ],
  },
  {
    title: '5. Propriedade intelectual',
    content: [
      'Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é de propriedade da Claro ou de seus licenciadores e está protegido por leis de propriedade intelectual. É proibida a reprodução sem autorização expressa.',
    ],
  },
  {
    title: '6. Limitação de responsabilidade',
    content: [
      'A Claro não se responsabiliza por:',
      '• Indisponibilidade temporária do site por questões técnicas;',
      '• Danos decorrentes do uso indevido do site;',
      '• Informações imprecisas fornecidas por terceiros.',
      'O atendimento é prestado com a máxima diligência, mas não garantimos resultados específicos.',
    ],
  },
  {
    title: '7. Links externos',
    content: [
      'Este site pode conter links para sites de terceiros. A Claro não se responsabiliza pelo conteúdo ou pelas práticas de privacidade desses sites.',
    ],
  },
  {
    title: '8. Alterações dos termos',
    content: [
      'Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site.',
    ],
  },
];

export default function Terms({ onBack }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-ink-50 flex flex-col">
      <header className="bg-brand-950 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={onBack} className="flex items-center gap-1 text-brand-300 hover:text-brand-200 transition-colors font-medium text-sm">
            <ChevronLeft className="w-5 h-5" />
            Voltar
          </button>
          <h1 className="text-lg font-bold text-white">Termos de Uso</h1>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">
        <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-ink-100 p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-ink-800">Termos de Uso</h2>
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
              Em caso de dúvidas sobre estes Termos de Uso, entre em contato através do WhatsApp: (11) 96207-0183.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
