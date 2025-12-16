import { ArrowRight, ShoppingCart, Calendar, Handshake } from "lucide-react";
import { products, businessModels, brands } from "../data/content";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Calendar,
  Handshake,
};

const Products = () => {
  return (
    <section id="equipamentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-core-orange font-semibold text-sm uppercase tracking-wider">
            Nossos Equipamentos
          </span>
          <h2 className="section-title mt-2">
            Tecnologia de <span className="text-core-orange">ponta</span> para
            seu laboratório
          </h2>
          <p className="section-subtitle mx-auto">
            Equipamentos de alta performance das melhores marcas do mercado.
          </p>
        </div>

        {/* Brands */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-100 rounded-full text-core-gray font-medium hover:bg-core-orange/10 hover:text-core-orange transition-colors cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-core-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-core-orange font-medium mb-2">
                  {product.brand}
                </div>
                <h3 className="text-xl font-bold text-core-dark mb-3">
                  {product.name}
                </h3>
                <p className="text-core-gray mb-4">{product.description}</p>
                <a
                  href="https://wa.me/5562981010074?text=Olá! Gostaria de mais informações sobre o equipamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-core-orange font-semibold hover:gap-4 transition-all"
                >
                  Solicitar Orçamento
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Business Models */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-core-dark text-center mb-10">
            Flexibilidade para seu Laboratório
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {businessModels.map((model, index) => {
              const Icon = iconMap[model.icon];
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-core-orange/10 flex items-center justify-center mb-6">
                    <Icon size={32} className="text-core-orange" />
                  </div>
                  <h4 className="text-xl font-bold text-core-dark mb-4">
                    {model.title}
                  </h4>
                  <p className="text-core-gray">{model.description}</p>
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
