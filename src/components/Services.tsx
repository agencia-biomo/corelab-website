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
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-core-dark">
            Mais que produtos, entregamos{" "}
            <span className="text-core-orange">parceria</span>
          </h2>
          <p className="text-lg text-core-gray mt-6 max-w-2xl mx-auto">
            Oferecemos suporte completo para que seu laboratório opere com
            máxima eficiência e precisão.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 ${
                  index === 1 ? "lg:scale-105 lg:z-10 border-2 border-core-orange/20" : ""
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-core-orange/10 flex items-center justify-center mb-6 group-hover:bg-core-orange group-hover:scale-110 transition-all duration-300">
                  <Icon
                    size={32}
                    className="text-core-orange group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-core-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-core-gray leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Featured Service - Scientific Advisory */}
        <div className="bg-gradient-to-br from-core-orange via-core-orange to-core-gold rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-16 text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <GraduationCap size={18} />
                Diferencial Core
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Assessoria Científica Gratuita
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Nosso grande diferencial: contamos com 2 profissionais altamente
                capacitados para acompanhar seu laboratório, sem custo
                adicional. Validação de métodos, treinamento de equipes e
                suporte contínuo.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, text: "Validação de Métodos" },
                  { icon: Users, text: "Treinamento de Equipes" },
                  { icon: Settings, text: "Otimização de Processos" },
                  { icon: Clock, text: "Suporte Contínuo" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <item.icon size={20} />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5562981010074?text=Olá! Gostaria de saber mais sobre a assessoria científica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-core-orange px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} />
                Falar com Especialista
              </a>
            </div>

            <div className="relative h-72 lg:h-auto">
              <img
                src={labAmostra}
                alt="Análise laboratorial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-core-orange/30 to-transparent lg:bg-gradient-to-l lg:from-core-orange/50" />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "24h", label: "Tempo de Resposta", icon: Clock },
            { value: "100%", label: "Satisfação", icon: Users },
            { value: "+20", label: "Anos no Mercado", icon: Shield },
            { value: "6+", label: "Estados Atendidos", icon: Building },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <stat.icon className="w-8 h-8 text-core-orange mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-core-dark">{stat.value}</div>
              <div className="text-sm text-core-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
