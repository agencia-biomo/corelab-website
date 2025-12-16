import { ArrowRight, Phone } from "lucide-react";
import { heroContent } from "../data/content";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-core-orange/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-core-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-core-orange/10 text-core-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-core-orange rounded-full animate-pulse" />
              +20 anos de experiência
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-core-dark leading-tight mb-6">
              {heroContent.title.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="text-core-orange">
                {heroContent.title.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <p className="text-xl text-core-gray mb-8 max-w-xl mx-auto lg:mx-0">
              {heroContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5562981010074?text=Olá! Gostaria de falar com um especialista sobre as soluções da Core."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                {heroContent.cta1}
              </a>
              <a
                href="#equipamentos"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                {heroContent.cta2}
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-sm text-core-gray">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-core-orange/10 flex items-center justify-center">
                  <span className="text-core-orange font-bold">24h</span>
                </div>
                <span>Suporte Técnico</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-core-orange/10 flex items-center justify-center">
                  <span className="text-core-orange font-bold">✓</span>
                </div>
                <span>Assessoria Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-core-orange/10 flex items-center justify-center">
                  <span className="text-core-orange font-bold">6+</span>
                </div>
                <span>Estados Atendidos</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main image placeholder - replace with actual equipment image */}
              <div className="bg-gradient-to-br from-core-orange to-core-gold rounded-3xl p-8 shadow-2xl">
                <img
                  src="/src/assets/images/selectra.jpg"
                  alt="Equipamento Selectra"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-xl p-4 animate-bounce">
                <div className="text-core-orange font-bold text-2xl">200+</div>
                <div className="text-sm text-core-gray">Reagentes</div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4">
                <div className="text-core-orange font-bold text-2xl">5</div>
                <div className="text-sm text-core-gray">Marcas Parceiras</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-core-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-core-orange rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
