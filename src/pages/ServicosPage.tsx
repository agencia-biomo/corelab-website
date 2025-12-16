import { Wrench, GraduationCap, Settings, Building, Phone, Clock, Shield, Users, CheckCircle, Headphones, Award } from "lucide-react";
import { services } from "../data/content";
import labAmostra from "../assets/images/lab-amostra.png";
import labProfissional from "../assets/images/lab-profissional.png";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  GraduationCap,
  Settings,
  Building,
};

const ServicosPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-core-dark via-[#1a1a2e] to-core-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-core-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-core-gold/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-core-orange px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Headphones size={16} />
              Suporte Completo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
                Serviços
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mais que produtos, entregamos parceria. Suporte técnico 24h,
              assessoria científica gratuita e muito mais.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-gray-50 rounded-[2rem] p-8 md:p-10 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-core-orange/10 to-core-gold/10 flex items-center justify-center flex-shrink-0 group-hover:from-core-orange group-hover:to-core-gold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-core-orange/20">
                      <Icon size={32} className="text-core-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-core-dark mb-4">
                        {service.title}
                      </h3>
                      <p className="text-core-gray text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-core-orange font-semibold mb-4">
                <Wrench size={20} />
                Assistência Técnica
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-core-dark mb-6">
                Suporte Técnico 24 Horas
              </h2>
              <p className="text-lg text-core-gray mb-8 leading-relaxed">
                Nossa equipe técnica está disponível 24 horas para garantir que seu
                laboratório nunca pare. Oferecemos um dos tempos de resposta mais
                rápidos do mercado.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Manutenção preventiva programada",
                  "Manutenção corretiva emergencial",
                  "Peças e deslocamento inclusos",
                  "Técnicos especializados em cada marca",
                  "Atendimento em todo Centro-Oeste",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <CheckCircle size={20} className="text-core-orange flex-shrink-0" />
                    <span className="text-core-dark">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5562981010074?text=Olá! Preciso de suporte técnico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-core-orange to-core-gold text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-core-orange/30 transition-all"
              >
                <Phone size={20} />
                Solicitar Suporte
              </a>
            </div>

            <div className="relative">
              <img
                src={labAmostra}
                alt="Análise laboratorial"
                className="rounded-[2rem] shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-core-orange/20 rounded-[2rem] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Advisory - Featured */}
      <section className="py-24 bg-gradient-to-br from-core-orange via-core-orange to-core-gold relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award size={18} />
                Nosso Diferencial
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Assessoria Científica Gratuita
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Nosso grande diferencial: contamos com 2 profissionais altamente
                capacitados para acompanhar seu laboratório, sem custo adicional.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, text: "Validação de Métodos" },
                  { icon: Users, text: "Treinamento de Equipes" },
                  { icon: Settings, text: "Otimização de Processos" },
                  { icon: Clock, text: "Acompanhamento Contínuo" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <item.icon size={20} />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">O que oferecemos:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Implementação e validação de novos testes",
                  "Treinamento contínuo da sua equipe",
                  "Otimização de processos e redução de custos",
                  "Resolução de problemas técnicos",
                  "Acompanhamento de indicadores de qualidade",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5562981010074?text=Olá! Gostaria de saber mais sobre a assessoria científica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-core-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl"
              >
                <GraduationCap size={20} />
                Conhecer Assessoria
              </a>
            </div>

            <div className="relative">
              <img
                src={labProfissional}
                alt="Profissional no laboratório"
                className="rounded-[2rem] shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation & Training */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4">
              Instalação
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-core-dark">
              Instalação e Treinamento Completos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Instalação",
                description: "Instalação completa do equipamento com validação de todos os sistemas e calibração inicial.",
              },
              {
                icon: GraduationCap,
                title: "Treinamento",
                description: "Capacitação completa da equipe operacional para garantir máximo aproveitamento do equipamento.",
              },
              {
                icon: Shield,
                title: "Validação",
                description: "Validação de métodos e processos para garantir resultados precisos e confiáveis.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-[2rem] p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-core-orange/10 to-core-gold/10 flex items-center justify-center mb-6 group-hover:from-core-orange group-hover:to-core-gold transition-all duration-300 group-hover:scale-110">
                  <item.icon size={36} className="text-core-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-core-dark mb-4">{item.title}</h3>
                <p className="text-core-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "24h", label: "Tempo de Resposta", icon: Clock },
              { value: "100%", label: "Satisfação", icon: Users },
              { value: "+20", label: "Anos de Experiência", icon: Award },
              { value: "6+", label: "Estados Atendidos", icon: Building },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-[1.5rem] p-6 text-center shadow-lg group hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-core-orange/10 to-core-gold/10 flex items-center justify-center group-hover:from-core-orange group-hover:to-core-gold transition-all">
                  <stat.icon className="w-6 h-6 text-core-orange group-hover:text-white transition-colors" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-core-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-core-dark to-[#1a1a2e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precisa de suporte?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para atendê-lo. Entre em contato e descubra
            como podemos ajudar seu laboratório.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5562981010074?text=Olá! Preciso de suporte técnico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-core-orange to-core-gold text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-core-orange/30 transition-all"
            >
              <Phone size={20} />
              Suporte Técnico
            </a>
            <a
              href="tel:+556232840588"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Headphones size={20} />
              (62) 3284-0588
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicosPage;
