import { Wrench, GraduationCap, Settings, Building } from "lucide-react";
import { services } from "../data/content";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  GraduationCap,
  Settings,
  Building,
};

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-core-orange font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="section-title mt-2">
            Mais que produtos, entregamos{" "}
            <span className="text-core-orange">parceria</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Oferecemos suporte completo para que seu laboratório opere com
            máxima eficiência e precisão.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
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
                <p className="text-core-gray">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Highlight Box */}
        <div className="mt-16 bg-gradient-to-r from-core-orange to-core-gold rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Assessoria Científica Gratuita
              </h3>
              <p className="text-white/90 mb-6">
                Nosso grande diferencial: contamos com 2 profissionais altamente
                capacitados para acompanhar seu laboratório, sem custo
                adicional. Validação de métodos, treinamento de equipes e
                suporte contínuo.
              </p>
              <ul className="space-y-2">
                {[
                  "Otimização de processos e custos",
                  "Implementação e validação de novos testes",
                  "Treinamento contínuo da sua equipe",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white/20 rounded-full p-8">
                <GraduationCap size={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
