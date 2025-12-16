import { Phone, Play } from "lucide-react";
import { heroContent } from "../data/content";
import labProfessional from "../assets/images/lab-profissional.png";
import equipamentoPrincipal from "../assets/images/equipamento-principal.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-core-dark via-core-dark/95 to-core-dark/80 z-10" />
        <img
          src={labProfessional}
          alt="Laboratório"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-core-orange/20 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-core-orange/10 rounded-full blur-3xl z-10" />

      <div className="container mx-auto px-4 relative z-20 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-core-orange/20 text-core-orange px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-core-orange rounded-full animate-pulse" />
              +20 anos de experiência no mercado
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Soluções em{" "}
              <span className="text-core-orange">Automação</span>{" "}
              <br className="hidden md:block" />
              Laboratorial
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              {heroContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5562981010074?text=Olá! Gostaria de falar com um especialista sobre as soluções da Core."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-core-orange hover:bg-core-gold text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg shadow-core-orange/30"
              >
                <Phone size={20} />
                {heroContent.cta1}
              </a>
              <a
                href="#equipamentos"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <Play size={20} />
                {heroContent.cta2}
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              {[
                { value: "24h", label: "Suporte Técnico" },
                { value: "200+", label: "Reagentes" },
                { value: "6+", label: "Estados" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-core-orange">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment showcase */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main equipment image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-core-dark/50 to-transparent z-10" />
                <img
                  src={equipamentoPrincipal}
                  alt="Equipamento Selectra"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating card - left */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-2xl p-5 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-core-orange/10 flex items-center justify-center">
                    <span className="text-core-orange font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <div className="text-core-dark font-bold">Assessoria</div>
                    <div className="text-sm text-core-gray">Gratuita</div>
                  </div>
                </div>
              </div>

              {/* Floating card - right */}
              <div className="absolute -right-4 bottom-1/3 bg-white rounded-2xl shadow-2xl p-5 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-core-gold/10 flex items-center justify-center">
                    <span className="text-core-gold font-bold text-xl">5</span>
                  </div>
                  <div>
                    <div className="text-core-dark font-bold">Marcas</div>
                    <div className="text-sm text-core-gray">Parceiras</div>
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-core-orange/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a href="#sobre" className="block animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center hover:border-core-orange transition-colors">
            <div className="w-1 h-3 bg-core-orange rounded-full mt-2" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
