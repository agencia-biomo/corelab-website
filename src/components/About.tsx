import { Award, Lightbulb, Shield, Eye, Users, Handshake } from "lucide-react";
import { aboutContent } from "../data/content";

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
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-core-orange font-semibold text-sm uppercase tracking-wider">
            Sobre Nós
          </span>
          <h2 className="section-title mt-2">
            Mais de <span className="text-core-orange">20 anos</span> de
            confiança e inovação
          </h2>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-core-dark mb-6">
              {aboutContent.title}
            </h3>
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-core-gray mb-4">
                {paragraph}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: "2002", label: "Fundação" },
                { value: "200+", label: "Reagentes" },
                { value: "6", label: "Estados" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-core-orange">
                    {stat.value}
                  </div>
                  <div className="text-sm text-core-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-core-orange/10 to-core-gold/10 rounded-3xl p-8">
              <img
                src="/src/assets/images/equipamento-2.jpg"
                alt="Equipamento Core"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-core-orange rounded-2xl -z-10" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-core-orange flex items-center justify-center mb-4">
              <Award className="text-white" size={24} />
            </div>
            <h4 className="text-xl font-bold text-core-dark mb-4">
              Nossa Missão
            </h4>
            <p className="text-core-gray">{aboutContent.mission}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-core-gold flex items-center justify-center mb-4">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h4 className="text-xl font-bold text-core-dark mb-4">
              Nossa Visão
            </h4>
            <p className="text-core-gray">{aboutContent.vision}</p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-core-dark text-center mb-10">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aboutContent.values.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <div
                  key={index}
                  className="text-center group cursor-default"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-core-orange/10 flex items-center justify-center mb-4 group-hover:bg-core-orange transition-colors">
                    <Icon
                      size={28}
                      className="text-core-orange group-hover:text-white transition-colors"
                    />
                  </div>
                  <p className="text-sm font-medium text-core-dark">
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
