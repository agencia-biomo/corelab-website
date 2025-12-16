import { Phone, ArrowDown, Sparkles } from "lucide-react";
import { heroContent } from "../data/content";
import heroVideo from "../assets/videos/hero-video.mp4";

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
        <div className="absolute inset-0 bg-gradient-to-r from-core-dark/90 via-core-dark/80 to-core-dark/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-core-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-core-gold/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-core-orange px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Sparkles size={16} className="animate-pulse" />
            +20 anos de inovação no mercado
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            Soluções em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
              Automação Laboratorial
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {heroContent.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/5562981010074?text=Olá! Gostaria de falar com um especialista sobre as soluções da Core."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-core-orange to-core-gold text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:shadow-core-orange/30 hover:scale-105"
            >
              <Phone size={20} />
              {heroContent.cta1}
            </a>
            <a
              href="/equipamentos"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 border border-white/30 hover:bg-white/20 hover:border-white/40"
            >
              {heroContent.cta2}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto">
            {[
              { value: "24h", label: "Suporte Técnico" },
              { value: "200+", label: "Reagentes" },
              { value: "6+", label: "Estados Atendidos" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:border-core-orange/30 transition-colors"
              >
                <div className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#sobre"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-core-orange transition-colors group"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Explorar</span>
          <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:border-core-orange transition-colors">
            <ArrowDown size={18} className="animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
