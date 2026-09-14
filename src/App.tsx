import { useState, useEffect } from 'react';
import {
  MessageCircle,
  FileText,
  Headphones,
  Shield,
  Phone,
  Clock,
  Lock,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Users,
  Award,
  ThumbsUp,
  Zap,
} from 'lucide-react';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const WHATSAPP_NUMBER = '5513981528550';

function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type Page = 'home' | 'privacy' | 'terms';

const services = [
  {
    icon: FileText,
    label: '2ª Via de Boleto',
    message: 'Olá! Preciso de uma 2ª via do meu boleto.',
    description: 'Solicite sua segunda via de forma rápida e prática.',
    gradient: 'from-brand-400 to-brand-600',
  },
  {
    icon: Users,
    label: 'Falar com Atendente',
    message: 'Olá! Gostaria de falar com um atendente.',
    description: 'Fale diretamente com nossa equipe de atendimento.',
    gradient: 'from-brand-500 to-brand-700',
  },
  {
    icon: ThumbsUp,
    label: 'Negociação',
    message: 'Olá! Gostaria de negociar minha dívida.',
    description: 'Negocie sua dívida com condições especiais.',
    gradient: 'from-brand-500 to-brand-800',
  },
  {
    icon: Headphones,
    label: 'Suporte Técnico',
    message: 'Olá! Preciso de suporte técnico.',
    description: 'Assistência técnica especializada para suas necessidades.',
    gradient: 'from-brand-400 to-brand-600',
  },
];

const trustBadges = [
  { icon: Lock, title: 'Dados Protegidos', desc: 'Conformidade com a LGPD' },
  { icon: Zap, title: 'Resposta Rápida', desc: 'Atendimento em minutos' },
  { icon: Shield, title: 'Canal Oficial', desc: 'Atendimento verificado' },
  { icon: Award, title: 'Qualidade', desc: 'Equipe especializada' },
];

const stats = [
  { icon: Users, value: '+10.000', label: 'Clientes atendidos' },
  { icon: Clock, value: '24h', label: 'Disponível todos os dias' },
  { icon: ThumbsUp, value: '98%', label: 'Satisfação dos clientes' },
  { icon: CheckCircle2, value: '100%', label: 'Dados protegidos' },
];

const faqs = [
  {
    question: 'Como funciona o atendimento?',
    answer: 'Escolha uma das opções de serviço na página inicial e você será direcionado para o WhatsApp, onde nossa equipe irá atendê-lo com rapidez e segurança.',
  },
  {
    question: 'O atendimento é seguro?',
    answer: 'Sim. Todo o atendimento é realizado através de canais oficiais e seus dados são protegidos conforme a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).',
  },
  {
    question: 'Como solicito a 2ª via do boleto?',
    answer: 'Clique na opção "2ª Via de Boleto" e você será direcionado para o WhatsApp com a mensagem já preenchida. Nossa equipe irá processar sua solicitação imediatamente.',
  },
  {
    question: 'Como faço uma negociação?',
    answer: 'Clique na opção "Negociação" e você será direcionado para o WhatsApp. Nossa equipe irá apresentar as melhores condições para regularizar sua situação.',
  },
  {
    question: 'Qual o horário de atendimento?',
    answer: 'Nosso atendimento está disponível 24 horas por dia, 7 dias por semana, para garantir que você receba ajuda sempre que precisar.',
  },
  {
    question: 'Preciso pagar pelo atendimento?',
    answer: 'O atendimento via WhatsApp é gratuito. Eventuais custos estão relacionados apenas aos serviços específicos solicitados.',
  },
];

const aboutPoints = [
  'Atendimento via WhatsApp com resposta rápida',
  'Canais oficiais e seguros',
  'Equipe especializada e treinada',
  'Conformidade total com a LGPD',
];

function FaqItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-ink-100 overflow-hidden hover:border-brand-200 transition-colors duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold text-ink-800 text-base">{faq.question}</span>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 ml-4 transition-all duration-300 ${open ? 'bg-brand-500 rotate-180' : 'bg-ink-50'}`}>
          <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${open ? 'text-white' : 'text-ink-400'}`} />
        </div>
      </button>
      <div className={`grid transition-all duration-400 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-ink-500 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (page === 'privacy') return <Privacy onBack={() => setPage('home')} />;
  if (page === 'terms') return <Terms onBack={() => setPage('home')} />;

  return (
    <div className="min-h-screen bg-ink-50 flex flex-col">
      {/* Header */}
      <header className={`w-full sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'glass-light shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-brand-400 border-2 border-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block leading-none text-ink-800">Claro</span>
              <span className="text-xs text-ink-400 font-medium">Central de Atendimento</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            <a href="#inicio" className="text-sm text-ink-600 hover:text-brand-600 transition-colors font-medium">Início</a>
            <a href="#sobre" className="text-sm text-ink-600 hover:text-brand-600 transition-colors font-medium">Sobre</a>
            <a href="#servicos" className="text-sm text-ink-600 hover:text-brand-600 transition-colors font-medium">Serviços</a>
            <a href="#faq" className="text-sm text-ink-600 hover:text-brand-600 transition-colors font-medium">FAQ</a>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-sm text-ink-600 hover:text-brand-600 transition-colors font-medium">
              <Phone className="w-4 h-4" />
              (11) 96207-0183
            </a>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-ink-600">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden glass-light border-t border-ink-100 px-4 py-4 flex flex-col gap-4 animate-fade-in">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-sm text-ink-600 hover:text-brand-600 font-medium">Início</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-sm text-ink-600 hover:text-brand-600 font-medium">Sobre</a>
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-sm text-ink-600 hover:text-brand-600 font-medium">Serviços</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-sm text-ink-600 hover:text-brand-600 font-medium">FAQ</a>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-sm text-ink-600 font-medium">
              <Phone className="w-4 h-4" /> (11) 96207-0183
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-500/20 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-400/20 blur-[100px] animate-pulse-slow" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-brand-300 rounded-full animate-pulse" />
              <span className="text-brand-200 text-sm font-medium">Atendimento Online Agora</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-up">
              Central de Atendimento{' '}
              <span className="text-gradient from-brand-200 to-brand-400">Claro</span>
            </h1>

            <p className="text-brand-100/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Segunda via de boleto, negociação, suporte técnico e atendimento.
              Escolha uma das opções e fale diretamente com nossa equipe pelo WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <a
                href={createWhatsAppLink('Olá! Gostaria de falar com a Central de Atendimento Claro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white hover:bg-brand-50 text-brand-700 font-bold px-8 py-4 rounded-2xl shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 text-base"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Falar pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 glass text-white hover:bg-white/15 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-base"
              >
                Ver Serviços
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Floating preview card */}
          <div className="mt-16 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="glass rounded-3xl p-6 shadow-2xl animate-float">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Equipe Claro</p>
                  <p className="text-brand-200/60 text-xs">Online agora</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Online</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
                  <p className="text-brand-50 text-sm">Olá! Como podemos ajudar você hoje?</p>
                </div>
                <div className="bg-brand-500/30 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[70%] ml-auto">
                  <p className="text-white text-sm">Preciso de suporte técnico</p>
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                  <p className="text-brand-50 text-sm">Perfeito! Clique em uma das opções abaixo e te atendo agora mesmo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative">
          <svg className="w-full h-12 sm:h-20" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0 120L60 100C120 80 240 40 360 35C480 30 600 60 720 70C840 80 960 70 1080 55C1200 40 1320 20 1380 10L1440 0V120H0Z" fill="#fef2f2" />
          </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-ink-50 -mt-1">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div key={i} className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex-shrink-0 border border-brand-100">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-800 text-sm leading-tight">{badge.title}</p>
                    <p className="text-xs text-ink-400">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-16 sm:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">Nossos Serviços</span>
            <h2 className="section-heading mt-3 mb-4">Como podemos ajudar você?</h2>
            <p className="text-ink-500 text-base max-w-2xl mx-auto">
              Selecione a opção que melhor atende à sua necessidade e fale com nossa equipe pelo WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.label}
                  href={createWhatsAppLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${i * 100}ms` }}
                  className="group relative flex flex-col bg-white rounded-3xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(230,0,0,0.12)] card-hover border border-ink-100 cursor-pointer overflow-hidden animate-fade-up"
                >
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <p className="font-bold text-ink-800 text-lg leading-tight mb-2">{service.label}</p>
                  <p className="text-sm text-ink-400 leading-relaxed mb-6 flex-1">{service.description}</p>

                  <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm">
                    <MessageCircle className="w-4 h-4" />
                    <span>Iniciar conversa</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-16 sm:py-24 bg-white border-y border-ink-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-50 blur-[80px] opacity-60" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Sobre a Claro</span>
              <h2 className="section-heading mt-3 mb-6">Atendimento profissional e seguro</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                A Claro é uma central de atendimento dedicada a oferecer suporte eficiente e seguro aos seus clientes.
                Nosso compromisso é garantir que você receba o atendimento necessário de forma rápida e confiável.
              </p>
              <p className="text-ink-600 leading-relaxed mb-8">
                Trabalhamos com canais oficiais de comunicação e seguimos as melhores práticas de proteção de dados,
                em conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>
              <ul className="space-y-4">
                {aboutPoints.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink-700 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    style={{ animationDelay: `${i * 100}ms` }}
                    className="bg-gradient-to-br from-white to-ink-50 rounded-2xl p-6 text-center border border-ink-100 hover:border-brand-300 hover:shadow-lg transition-all duration-500 animate-scale-in"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 mb-4">
                      <Icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <p className="text-2xl font-bold text-ink-800">{stat.value}</p>
                    <p className="text-sm text-ink-400 mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 bg-ink-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label">Dúvidas Frequentes</span>
            <h2 className="section-heading mt-3 mb-4">Perguntas e respostas</h2>
            <p className="text-ink-500 text-base">
              Confira as respostas para as dúvidas mais comuns sobre nosso atendimento.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950">
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-brand-500/20 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-brand-400/20 blur-[80px] animate-pulse-slow" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Precisa de ajuda agora?
          </h2>
          <p className="text-brand-100/80 text-lg mb-8">
            Nossa equipe está pronta para atender você pelo WhatsApp.
          </p>
          <a
            href={createWhatsAppLink('Olá! Gostaria de falar com a Central de Atendimento Claro.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white hover:bg-brand-50 text-brand-700 font-bold px-8 py-4 rounded-2xl shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 text-base"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Iniciar Atendimento
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-950 text-brand-100/60 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white text-lg block leading-none">Claro</span>
                  <span className="text-xs text-brand-200/40">Central de Atendimento</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Central de atendimento dedicada a oferecer suporte eficiente e seguro aos clientes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm mb-5">Links Rápidos</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#inicio" className="hover:text-brand-300 transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-brand-300 transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-brand-300 transition-colors">Serviços</a></li>
                <li><a href="#faq" className="hover:text-brand-300 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm mb-5">Contato</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-400" />
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-brand-300 transition-colors">(11) 96207-0183</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-brand-400" />
                  <a
                    href={createWhatsAppLink('Olá! Gostaria de falar com a Central de Atendimento Claro.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-300 transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-400" />
                  <span>Disponível 24 horas</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-brand-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-brand-200/40">
              &copy; {new Date().getFullYear()} Claro - Central de Atendimento. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <button onClick={() => setPage('privacy')} className="hover:text-brand-300 transition-colors">
                Política de Privacidade
              </button>
              <button onClick={() => setPage('terms')} className="hover:text-brand-300 transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={createWhatsAppLink('Olá! Gostaria de falar com a Central de Atendimento Claro.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Falar no WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.5)] hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
      </a>
    </div>
  );
}
