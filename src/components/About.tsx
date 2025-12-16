import { Award, Lightbulb, Shield, Eye, Users, Handshake } from "lucide-react";
import { aboutContent } from "../data/content";
import labCentrifuga from "../assets/images/lab-centrifuga.png";
import brandingCore from "../assets/images/branding-core.jpg";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Lightbulb,
  Shield,
  Eye,
  Users,
  Handshake,
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-core-dark">
            Mais de <span className="text-core-orange">20 anos</span> de
            <br className="hidden md:block" /> confiança e inovação
          </h2>
        </div>

        {/* Story with images */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-core-orange font-semibold mb-4">
              <div className="w-12 h-0.5 bg-core-orange" />
              Nossa História
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-core-dark mb-6">
              {aboutContent.title}
            </h3>
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-core-gray mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Slogan */}
            <div className="mt-8 p-6 bg-gradient-to-r from-core-orange to-core-gold rounded-2xl text-white">
              <p className="text-xl font-bold italic">
                "Rápido no atendimento. Forte na confiança."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "2002", label: "Fundação" },
                { value: "200+", label: "Reagentes" },
                { value: "6", label: "Estados" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-core-orange">
                    {stat.value}
                  </div>
                  <div className="text-sm text-core-gray font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Main image */}
            <div className="relative z-10">
              <img
                src={labCentrifuga}
                alt="Técnico trabalhando no laboratório"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>

            {/* Secondary image - floating */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 z-20 hidden md:block">
              <img
                src={brandingCore}
                alt="Branding Core"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-core-orange/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 right-12 w-24 h-24 bg-core-gold/20 rounded-full -z-10" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-core-orange to-core-gold flex items-center justify-center mb-6 shadow-lg shadow-core-orange/20">
              <Award className="text-white" size={28} />
            </div>
            <h4 className="text-2xl font-bold text-core-dark mb-4">
              Nossa Missão
            </h4>
            <p className="text-core-gray text-lg leading-relaxed">{aboutContent.mission}</p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-core-gold to-core-orange flex items-center justify-center mb-6 shadow-lg shadow-core-gold/20">
              <Lightbulb className="text-white" size={28} />
            </div>
            <h4 className="text-2xl font-bold text-core-dark mb-4">
              Nossa Visão
            </h4>
            <p className="text-core-gray text-lg leading-relaxed">{aboutContent.vision}</p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-core-dark to-[#1a1a2e] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-core-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-core-gold/10 rounded-full blur-3xl" />

          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 relative z-10">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {aboutContent.values.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <div
                  key={index}
                  className="text-center group cursor-default"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-core-orange group-hover:to-core-gold group-hover:border-transparent transition-all duration-300 group-hover:scale-110">
                    <Icon
                      size={28}
                      className="text-core-orange group-hover:text-white transition-colors duration-300"
                    />
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
  );
};

export default About;
