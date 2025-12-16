import { Phone, ArrowDown } from "lucide-react";
import { heroContent } from "../data/content";
import heroVideo from "../assets/videos/hero-video.mp4";
import logoHero from "../assets/logos/logo-header.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-core-dark/85 via-core-dark/75 to-core-dark/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-core-orange/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-core-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-core-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Grande */}
          <div className="mb-2">
            <img
              src={logoHero}
              alt="Core Sistemas e Diagnóstica"
              className="h-52 md:h-72 lg:h-96 xl:h-[28rem] mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Slogan */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light mb-2 tracking-wide">
            Rápido no atendimento. Forte na confiança.
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-400 mb-4 max-w-xl mx-auto leading-relaxed">
            {heroContent.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href="https://wa.me/5562981010074?text=Olá! Gostaria de falar com um especialista sobre as soluções da Core."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-core-orange to-core-gold text-white px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-core-orange/30 hover:scale-105"
            >
              <Phone size={18} />
              {heroContent.cta1}
            </a>
            <a
              href="/equipamentos"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 border border-white/30 hover:bg-white/20 hover:border-white/40"
            >
              {heroContent.cta2}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-xl mx-auto">
            {[
              { value: "24h", label: "Suporte Técnico" },
              { value: "200+", label: "Reagentes" },
              { value: "6+", label: "Estados Atendidos" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10 hover:border-core-orange/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#sobre"
          className="flex flex-col items-center gap-1 text-white/50 hover:text-core-orange transition-colors group"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Explorar</span>
          <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:border-core-orange transition-colors">
            <ArrowDown size={14} className="animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
