import { ArrowRight, ShoppingCart, Calendar, Handshake, Package } from "lucide-react";
import { products, businessModels, brands } from "../data/content";
import reagentesVida from "../assets/images/reagentes-vida.jpg";
import equipamentoInterno from "../assets/images/equipamento-interno.jpg";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Calendar,
  Handshake,
};

const Products = () => {
  return (
    <section id="equipamentos" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#12121f] via-core-dark to-[#151525] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-core-orange/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-core-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-core-orange/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4 border border-core-orange/20">
            Nossos Equipamentos
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            Tecnologia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">ponta</span> para
            <br className="hidden md:block" /> seu laboratório
          </h2>
          <p className="text-base md:text-lg text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto">
            Equipamentos de alta performance das melhores marcas do mercado,
            com suporte técnico especializado e assessoria completa.
          </p>
        </div>

        {/* Brands */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12 lg:mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="px-4 md:px-6 py-2 md:py-3 bg-white/5 backdrop-blur-sm rounded-full text-gray-400 text-sm md:text-base font-medium border border-white/10 hover:bg-gradient-to-r hover:from-core-orange hover:to-core-gold hover:text-white hover:border-transparent transition-all duration-300 cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-core-orange/30 hover:-translate-y-2"
            >
              <div className="relative h-48 sm:h-56 md:h-72 bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <span className="bg-gradient-to-r from-core-orange to-core-gold text-white text-xs font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6 lg:p-8">
                <div className="text-xs md:text-sm text-core-orange font-semibold mb-2 uppercase tracking-wide">
                  {product.brand}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                  {product.name}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed">{product.description}</p>
                <a
                  href={`https://wa.me/5562981010074?text=Olá! Gostaria de mais informações sobre o equipamento ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-core-orange hover:to-core-gold transition-all duration-300 group/btn text-sm md:text-base w-full sm:w-auto justify-center sm:justify-start"
                >
                  Solicitar Orçamento
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reagents Section */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl md:rounded-[2.5rem] overflow-hidden mb-12 md:mb-16 lg:mb-20 relative border border-white/10">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-core-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-core-gold/10 rounded-full blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-6 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 text-core-orange font-semibold mb-4">
                <Package size={20} />
                Reagentes
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                +200 Tipos de Reagentes
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Fornecemos reagentes de alta qualidade para todas as necessidades do seu laboratório.
                Trabalhamos com as melhores marcas do mercado nacional e internacional.
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {["Vida Biotecnologia", "Vital Scientific", "Dailytech", "Mindray"].map((brand, index) => (
                  <li key={index} className="flex items-center gap-3 text-white text-sm md:text-base">
                    <div className="w-2 h-2 bg-gradient-to-r from-core-orange to-core-gold rounded-full" />
                    {brand}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5562981010074?text=Olá! Gostaria de informações sobre reagentes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-core-orange to-core-gold hover:shadow-lg hover:shadow-core-orange/25 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold transition-all duration-300 w-fit text-sm md:text-base"
              >
                Solicitar Catálogo
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative h-56 sm:h-64 lg:h-auto">
              <img
                src={reagentesVida}
                alt="Reagentes Vida Biotecnologia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-core-dark/80 via-core-dark/30 to-transparent lg:bg-gradient-to-l lg:from-core-dark/60 lg:via-core-dark/20 lg:to-transparent" />
            </div>
          </div>
        </div>

        {/* Equipment Detail Image */}
        <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden mb-12 md:mb-16 lg:mb-20 h-48 sm:h-56 md:h-64 lg:h-80">
          <img
            src={equipamentoInterno}
            alt="Detalhes dos equipamentos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-core-dark/90 via-core-dark/70 to-core-dark/40 flex items-center">
            <div className="container mx-auto px-6 md:px-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
                Tecnologia de Precisão
              </h3>
              <p className="text-gray-300 max-w-lg text-sm md:text-base leading-relaxed">
                Nossos equipamentos utilizam tecnologia de ponta para garantir
                resultados precisos e confiáveis em todas as análises.
              </p>
            </div>
          </div>
        </div>

        {/* Business Models */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 lg:p-12 relative overflow-hidden border border-white/10">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-core-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-core-gold/10 rounded-full blur-3xl" />

          <div className="text-center mb-8 md:mb-10 lg:mb-12 relative z-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Flexibilidade para seu Laboratório
            </h3>
            <p className="text-gray-400 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Escolha o modelo de negócio que melhor se adapta às suas necessidades
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative z-10">
            {businessModels.map((model, index) => {
              const Icon = iconMap[model.icon];
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-[1.5rem] p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 border border-white/10 hover:border-core-orange/30"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gradient-to-br group-hover:from-core-orange group-hover:to-core-gold group-hover:border-transparent transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-core-orange/20">
                    <Icon size={28} className="text-core-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                    {model.title}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{model.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
