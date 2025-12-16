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
    <section id="equipamentos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4">
            Nossos Equipamentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-core-dark">
            Tecnologia de <span className="text-core-orange">ponta</span> para
            <br className="hidden md:block" /> seu laboratório
          </h2>
          <p className="text-lg text-core-gray mt-6 max-w-2xl mx-auto">
            Equipamentos de alta performance das melhores marcas do mercado,
            com suporte técnico especializado e assessoria completa.
          </p>
        </div>

        {/* Brands */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-100 rounded-full text-core-gray font-medium hover:bg-core-orange hover:text-white transition-all duration-300 cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Featured Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
            >
              <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-core-orange to-core-gold text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-core-orange font-semibold mb-2 uppercase tracking-wide">
                  {product.brand}
                </div>
                <h3 className="text-xl font-bold text-core-dark mb-3">
                  {product.name}
                </h3>
                <p className="text-core-gray mb-6 leading-relaxed">{product.description}</p>
                <a
                  href={`https://wa.me/5562981010074?text=Olá! Gostaria de mais informações sobre o equipamento ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-core-orange/10 to-core-gold/10 text-core-orange px-6 py-3 rounded-full font-semibold hover:from-core-orange hover:to-core-gold hover:text-white transition-all duration-300 group/btn"
                >
                  Solicitar Orçamento
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reagents Section */}
        <div className="bg-gradient-to-br from-core-dark via-[#1a1a2e] to-core-dark rounded-[2.5rem] overflow-hidden mb-20 relative">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-core-orange/10 rounded-full blur-3xl" />
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-core-orange font-semibold mb-4">
                <Package size={20} />
                Reagentes
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                +200 Tipos de Reagentes
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Fornecemos reagentes de alta qualidade para todas as necessidades do seu laboratório.
                Trabalhamos com as melhores marcas do mercado nacional e internacional.
              </p>
              <ul className="space-y-3 mb-8">
                {["Vida Biotecnologia", "Vital Scientific", "Dailytech", "Mindray"].map((brand, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-core-orange rounded-full" />
                    {brand}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5562981010074?text=Olá! Gostaria de informações sobre reagentes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-core-orange hover:bg-core-gold text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-fit"
              >
                Solicitar Catálogo
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src={reagentesVida}
                alt="Reagentes Vida Biotecnologia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-core-dark/50 to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </div>

        {/* Equipment Detail Image */}
        <div className="relative rounded-[2rem] overflow-hidden mb-20 h-64 md:h-80">
          <img
            src={equipamentoInterno}
            alt="Detalhes dos equipamentos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-core-dark/80 to-core-dark/40 flex items-center">
            <div className="container mx-auto px-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tecnologia de Precisão
              </h3>
              <p className="text-gray-300 max-w-lg">
                Nossos equipamentos utilizam tecnologia de ponta para garantir
                resultados precisos e confiáveis em todas as análises.
              </p>
            </div>
          </div>
        </div>

        {/* Business Models */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-core-dark">
              Flexibilidade para seu Laboratório
            </h3>
            <p className="text-core-gray mt-4 max-w-2xl mx-auto">
              Escolha o modelo de negócio que melhor se adapta às suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {businessModels.map((model, index) => {
              const Icon = iconMap[model.icon];
              return (
                <div
                  key={index}
                  className="bg-white rounded-[1.5rem] p-8 text-center hover:shadow-2xl transition-all duration-300 group hover:-translate-y-3"
                >
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-core-orange/10 to-core-gold/10 flex items-center justify-center mb-6 group-hover:from-core-orange group-hover:to-core-gold transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-core-orange/20">
                    <Icon size={36} className="text-core-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-core-dark mb-4">
                    {model.title}
                  </h4>
                  <p className="text-core-gray leading-relaxed">{model.description}</p>
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
