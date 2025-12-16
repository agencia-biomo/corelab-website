import { Wrench, GraduationCap, Settings, Building, Phone, Clock, Shield, Users } from "lucide-react";
import { services } from "../data/content";
import labAmostra from "../assets/images/lab-amostra.png";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  GraduationCap,
  Settings,
  Building,
};

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-core-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-core-gold/5 rounded-full blur-3xl" />
        {/* Decorative lines */}
        <div className="absolute top-20 left-10 w-32 h-0.5 bg-gradient-to-r from-core-orange/20 to-transparent rounded-full" />
        <div className="absolute bottom-32 right-10 w-48 h-0.5 bg-gradient-to-l from-core-gold/20 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-core-dark">
            Mais que produtos, entregamos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">parceria</span>
          </h2>
          <p className="text-base md:text-lg text-core-gray mt-4 md:mt-6 max-w-2xl mx-auto">
            Oferecemos suporte completo para que seu laboratório opere com
            máxima eficiência e precisão.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl md:rounded-[1.75rem] p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100 ${
                  index === 1 ? "sm:scale-105 sm:z-10 border-core-orange/20 shadow-core-orange/10" : ""
                }`}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-core-orange/10 to-core-gold/10 flex items-center justify-center mb-5 md:mb-6 group-hover:from-core-orange group-hover:to-core-gold group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-core-orange/20">
                  <Icon
                    size={28}
                    className="text-core-orange group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-core-dark mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-core-gray leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Featured Service - Scientific Advisory */}
        <div className="bg-gradient-to-br from-core-orange via-core-orange to-core-gold rounded-2xl md:rounded-[2.5rem] overflow-hidden relative">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-white/5 rounded-full blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-6 md:p-10 lg:p-12 xl:p-16 text-white relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-5 md:mb-6">
                <GraduationCap size={18} />
                Diferencial Core
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Assessoria Científica Gratuita
              </h3>
              <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Nosso grande diferencial: contamos com 2 profissionais altamente
                capacitados para acompanhar seu laboratório, sem custo
                adicional. Validação de métodos, treinamento de equipes e
                suporte contínuo.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {[
                  { icon: Shield, text: "Validação de Métodos" },
                  { icon: Users, text: "Treinamento de Equipes" },
                  { icon: Settings, text: "Otimização de Processos" },
                  { icon: Clock, text: "Suporte Contínuo" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 bg-white/10 rounded-xl p-2.5 md:p-3">
                    <item.icon size={18} className="flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5562981010074?text=Olá! Gostaria de saber mais sobre a assessoria científica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-core-orange px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                <Phone size={18} />
                Falar com Especialista
              </a>
            </div>

            <div className="relative h-56 sm:h-64 lg:h-auto">
              <img
                src={labAmostra}
                alt="Análise laboratorial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-core-orange/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-core-orange/60 lg:via-core-orange/20 lg:to-transparent" />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-10 md:mt-12 lg:mt-16">
          {[
            { value: "24h", label: "Tempo de Resposta", icon: Clock },
            { value: "100%", label: "Satisfação", icon: Users },
            { value: "+20", label: "Anos no Mercado", icon: Shield },
            { value: "6+", label: "Estados Atendidos", icon: Building },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl md:rounded-[1.5rem] p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg md:rounded-xl bg-gradient-to-br from-core-orange/10 to-core-gold/10 flex items-center justify-center group-hover:from-core-orange group-hover:to-core-gold transition-all duration-300">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-core-orange group-hover:text-white transition-colors" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">{stat.value}</div>
              <div className="text-xs md:text-sm text-core-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
