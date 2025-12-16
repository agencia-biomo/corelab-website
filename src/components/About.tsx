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
    <section id="sobre" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-core-dark via-[#151525] to-[#12121f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-core-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-32 w-80 h-80 bg-core-gold/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-core-orange/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4 border border-core-orange/20">
            Sobre Nós
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            Mais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">20 anos</span> de
            <br className="hidden md:block" /> confiança e inovação
          </h2>
        </div>

        {/* Story with images */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-20 lg:mb-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-core-orange font-semibold mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-core-orange to-core-gold rounded-full" />
              Nossa História
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
              {aboutContent.title}
            </h3>
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg text-gray-400 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Slogan */}
            <div className="mt-8 p-5 md:p-6 bg-gradient-to-r from-core-orange to-core-gold rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <p className="text-lg md:text-xl font-bold italic relative z-10">
                "Rápido no atendimento. Forte na confiança."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 mt-8 md:mt-10">
              {[
                { value: "2002", label: "Fundação" },
                { value: "200+", label: "Reagentes" },
                { value: "6", label: "Estados" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-core-orange/30 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</div>
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
                className="rounded-2xl md:rounded-3xl shadow-2xl w-full border border-white/10"
              />
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-core-orange/20 to-core-gold/20 rounded-3xl blur-2xl -z-10" />
            </div>

            {/* Secondary image - floating */}
            <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 w-32 h-32 md:w-48 md:h-48 z-20 hidden sm:block">
              <img
                src={brandingCore}
                alt="Branding Core"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-xl border-2 border-core-orange/30"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-core-orange/20 rounded-2xl -z-10 blur-sm" />
            <div className="absolute -bottom-4 right-8 md:-bottom-6 md:right-12 w-16 h-16 md:w-24 md:h-24 bg-core-gold/20 rounded-full -z-10 blur-sm" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-[2rem] p-6 md:p-8 lg:p-10 border border-white/10 hover:border-core-orange/30 transition-all duration-300 group">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-core-orange to-core-gold flex items-center justify-center mb-5 md:mb-6 shadow-lg shadow-core-orange/20 group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={26} />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Nossa Missão
            </h4>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">{aboutContent.mission}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-[2rem] p-6 md:p-8 lg:p-10 border border-white/10 hover:border-core-gold/30 transition-all duration-300 group">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-core-gold to-core-orange flex items-center justify-center mb-5 md:mb-6 shadow-lg shadow-core-gold/20 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="text-white" size={26} />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Nossa Visão
            </h4>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">{aboutContent.vision}</p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 lg:p-12 relative overflow-hidden border border-white/10">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-core-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-core-gold/10 rounded-full blur-3xl" />

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-8 md:mb-12 relative z-10">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 relative z-10">
            {aboutContent.values.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <div
                  key={index}
                  className="text-center group cursor-default"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-gradient-to-br group-hover:from-core-orange group-hover:to-core-gold group-hover:border-transparent transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-core-orange/20">
                    <Icon
                      size={24}
                      className="text-core-orange group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
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
