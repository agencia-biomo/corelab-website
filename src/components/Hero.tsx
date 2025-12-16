import { Phone, ArrowDown, Sparkles } from "lucide-react";
import { heroContent } from "../data/content";
import vidaS3800 from "../assets/images/vida-s3800.jpg";
import vidaS4800 from "../assets/images/vida-s4800.jpg";
import equipamentoPrincipal from "../assets/images/equipamento-principal.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-core-dark via-[#1a1a2e] to-core-dark"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-core-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-core-gold/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-core-orange/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-core-orange px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/10">
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
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {heroContent.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
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
                href="#equipamentos"
                className="bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 border border-white/20 hover:bg-white/10 hover:border-white/30"
              >
                {heroContent.cta2}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { value: "24h", label: "Suporte" },
                { value: "200+", label: "Reagentes" },
                { value: "6+", label: "Estados" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-core-orange/30 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Showcase */}
          <div className="relative order-1 lg:order-2">
            {/* Main equipment card */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-core-orange/20 to-core-gold/20 rounded-[3rem] blur-2xl opacity-60" />

              {/* Main image */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-[2.5rem] p-3 border border-white/10">
                <img
                  src={vidaS3800}
                  alt="VIDA S3800"
                  className="w-full h-auto rounded-[2rem] shadow-2xl"
                />

                {/* Badge on image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-core-orange font-semibold uppercase tracking-wide">Em destaque</div>
                      <div className="text-lg font-bold text-core-dark">VIDA S3800</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-core-orange to-core-gold rounded-xl flex items-center justify-center">
                      <Sparkles className="text-white" size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-6 top-1/4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20 hidden xl:block hover:scale-105 transition-transform">
                <img
                  src={equipamentoPrincipal}
                  alt="Selectra"
                  className="w-20 h-20 rounded-xl object-cover mb-2"
                />
                <div className="text-xs text-core-gray">Selectra PRO</div>
              </div>

              <div className="absolute -right-4 top-1/3 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20 hidden xl:block hover:scale-105 transition-transform">
                <img
                  src={vidaS4800}
                  alt="VIDA S4800"
                  className="w-20 h-20 rounded-xl object-cover mb-2"
                />
                <div className="text-xs text-core-gray">VIDA S4800</div>
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-core-orange to-core-gold rounded-2xl p-4 shadow-xl text-white hidden md:block">
                <div className="text-2xl font-bold">5</div>
                <div className="text-xs opacity-90">Marcas Parceiras</div>
              </div>
            </div>
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
