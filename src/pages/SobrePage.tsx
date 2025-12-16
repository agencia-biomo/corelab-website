import { Award, Lightbulb, Shield, Eye, Users, Handshake, MapPin, Calendar, Target, Heart } from "lucide-react";
import { aboutContent, companyInfo, coverage } from "../data/content";
import labCentrifuga from "../assets/images/lab-centrifuga.png";
import brandingCore from "../assets/images/branding-core.jpg";
import labProfissional from "../assets/images/lab-profissional.png";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Lightbulb,
  Shield,
  Eye,
  Users,
  Handshake,
};

const SobrePage = () => {
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
              <Heart size={16} />
              Nossa História
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Conheça a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
                Core Sistemas
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mais de 20 anos transformando laboratórios com tecnologia,
              inovação e um compromisso inabalável com a excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-core-orange font-semibold mb-4">
                <Calendar size={20} />
                Desde 2002
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-core-dark mb-6">
                Uma trajetória de inovação e parceria
              </h2>

              <div className="space-y-6 text-lg text-core-gray leading-relaxed">
                <p>
                  Fundada em <strong className="text-core-dark">2002 por Maurício</strong>, a Core Sistemas nasceu para
                  trazer soluções para demandas que os laboratórios tinham com seus equipamentos
                  na linha Selectra, pois não havia suporte adequado em Goiás.
                </p>
                <p>
                  Em <strong className="text-core-dark">2012</strong>, veio a Core Diagnóstica para aumentar ainda mais
                  nosso portfólio de produtos, consolidando um grupo focado em inovação e
                  parceria com os laboratórios da região.
                </p>
                <p>
                  Hoje, somos referência em automação laboratorial no Centro-Oeste, atendendo
                  mais de 6 estados com equipamentos de ponta e o suporte técnico mais rápido
                  do mercado.
                </p>
              </div>

              {/* Slogan */}
              <div className="mt-8 p-6 bg-gradient-to-r from-core-orange to-core-gold rounded-[1.5rem] text-white">
                <p className="text-xl font-bold italic">
                  "{companyInfo.slogan}"
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={labCentrifuga}
                  alt="Técnico trabalhando"
                  className="rounded-[2rem] shadow-2xl w-full"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 z-20 hidden md:block">
                <img
                  src={brandingCore}
                  alt="Branding Core"
                  className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-core-orange/20 rounded-[2rem] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2002", label: "Ano de Fundação" },
              { value: "200+", label: "Tipos de Reagentes" },
              { value: "6+", label: "Estados Atendidos" },
              { value: "24h", label: "Suporte Técnico" },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-[1.5rem] p-6 text-center shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-core-gray mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4">
              Propósito
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-core-dark">
              Missão, Visão e Valores
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] p-8 md:p-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-core-orange to-core-gold flex items-center justify-center mb-6 shadow-lg shadow-core-orange/20">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-core-dark mb-4">Nossa Missão</h3>
              <p className="text-core-gray text-lg leading-relaxed">{aboutContent.mission}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] p-8 md:p-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-core-gold to-core-orange flex items-center justify-center mb-6 shadow-lg shadow-core-gold/20">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-core-dark mb-4">Nossa Visão</h3>
              <p className="text-core-gray text-lg leading-relaxed">{aboutContent.vision}</p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-core-dark to-[#1a1a2e] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-core-orange/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-core-gold/10 rounded-full blur-3xl" />

            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 relative z-10">
              Nossos Valores
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {aboutContent.values.map((value, index) => {
                const Icon = iconMap[value.icon];
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-core-orange group-hover:to-core-gold group-hover:border-transparent transition-all duration-300 group-hover:scale-110">
                      <Icon size={28} className="text-core-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {value.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-core-orange font-semibold mb-4">
                <MapPin size={20} />
                Área de Atuação
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-core-dark mb-6">
                Presentes onde você precisa
              </h2>
              <p className="text-lg text-core-gray mb-8">
                Nossa equipe técnica está estrategicamente posicionada para atender
                laboratórios em toda a região Centro-Oeste e além, garantindo o suporte
                mais rápido do mercado.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {coverage.map((state, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-core-orange/10 flex items-center justify-center">
                      <MapPin size={18} className="text-core-orange" />
                    </div>
                    <span className="text-core-dark font-medium">{state}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={labProfissional}
                alt="Profissional no laboratório"
                className="rounded-[2rem] shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-core-gold/20 rounded-[2rem] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-core-orange to-core-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar seu laboratório?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu laboratório
            a alcançar novos patamares de eficiência e qualidade.
          </p>
          <a
            href="https://wa.me/5562981010074?text=Olá! Gostaria de saber mais sobre a Core Sistemas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-core-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl"
          >
            Falar com Especialista
          </a>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;
