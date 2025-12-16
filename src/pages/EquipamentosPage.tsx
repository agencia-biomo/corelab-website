import { ArrowRight, ShoppingCart, Calendar, Handshake, Package, CheckCircle, Cpu } from "lucide-react";
import { products, businessModels, brands } from "../data/content";
import reagentesVida from "../assets/images/reagentes-vida.jpg";
import equipamentoInterno from "../assets/images/equipamento-interno.jpg";
import reagenteGlicose from "../assets/images/reagente-glicose.jpg";
import detalheEquipamento from "../assets/images/detalhe-equipamento.jpg";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Calendar,
  Handshake,
};

const EquipamentosPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-core-dark via-[#1a1a2e] to-core-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-core-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-core-gold/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-core-orange px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Cpu size={16} />
              Tecnologia de Ponta
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Equipamentos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
                Laboratoriais
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Analisadores bioquímicos de alta performance das melhores marcas
              do mercado, com suporte técnico especializado.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-core-dark">Marcas Parceiras</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-gray-50 rounded-full text-core-dark font-semibold hover:bg-gradient-to-r hover:from-core-orange hover:to-core-gold hover:text-white transition-all duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4">
              Catálogo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-core-dark">
              Nossos Equipamentos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
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
                  <h3 className="text-2xl font-bold text-core-dark mb-3">
                    {product.name}
                  </h3>
                  <p className="text-core-gray mb-6 leading-relaxed">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {["Alta precisão", "Baixo consumo de reagentes", "Interface intuitiva"].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-core-gray">
                        <CheckCircle size={16} className="text-core-orange" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/5562981010074?text=Olá! Gostaria de mais informações sobre o equipamento ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-core-orange to-core-gold text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-core-orange/30 transition-all duration-300"
                  >
                    Solicitar Orçamento
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-core-orange font-semibold mb-4">
                <Cpu size={20} />
                Alta Tecnologia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-core-dark mb-6">
                Precisão em cada análise
              </h2>
              <p className="text-lg text-core-gray mb-8 leading-relaxed">
                Nossos equipamentos utilizam tecnologia de última geração para garantir
                resultados precisos e confiáveis. Sistemas automatizados que otimizam
                o fluxo de trabalho do seu laboratório.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Automação completa",
                  "Resultados rápidos",
                  "Baixa manutenção",
                  "Conectividade LIS",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <CheckCircle size={20} className="text-core-orange flex-shrink-0" />
                    <span className="text-core-dark font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={equipamentoInterno}
                alt="Interior do equipamento"
                className="rounded-[1.5rem] shadow-xl w-full h-48 object-cover"
              />
              <img
                src={detalheEquipamento}
                alt="Detalhe do equipamento"
                className="rounded-[1.5rem] shadow-xl w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reagents Section */}
      <section className="py-24 bg-gradient-to-br from-core-dark via-[#1a1a2e] to-core-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-core-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-core-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-core-orange font-semibold mb-4">
                <Package size={20} />
                Reagentes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                +200 Tipos de Reagentes
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Fornecemos reagentes de alta qualidade para todas as necessidades
                do seu laboratório. Trabalhamos com as melhores marcas do mercado
                nacional e internacional.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Vida Biotecnologia", "Vital Scientific", "Dailytech", "Mindray"].map((brand, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-2 h-2 bg-core-orange rounded-full" />
                    <span className="text-white font-medium">{brand}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5562981010074?text=Olá! Gostaria de informações sobre reagentes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-core-orange to-core-gold text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-core-orange/30 transition-all"
              >
                Solicitar Catálogo
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={reagentesVida}
                alt="Reagentes Vida"
                className="rounded-[1.5rem] shadow-2xl w-full"
              />
              <img
                src={reagenteGlicose}
                alt="Reagente Glicose"
                className="rounded-[1.5rem] shadow-2xl w-full mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4">
              Modelos de Negócio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-core-dark">
              Flexibilidade para seu Laboratório
            </h2>
            <p className="text-lg text-core-gray mt-4 max-w-2xl mx-auto">
              Escolha o modelo que melhor se adapta às suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessModels.map((model, index) => {
              const Icon = iconMap[model.icon];
              return (
                <div
                  key={index}
                  className="bg-white rounded-[2rem] p-8 text-center hover:shadow-2xl transition-all duration-300 group hover:-translate-y-3"
                >
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-core-orange/10 to-core-gold/10 flex items-center justify-center mb-6 group-hover:from-core-orange group-hover:to-core-gold transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-core-orange/20">
                    <Icon size={36} className="text-core-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-core-dark mb-4">{model.title}</h3>
                  <p className="text-core-gray leading-relaxed mb-6">{model.description}</p>
                  <a
                    href="https://wa.me/5562981010074"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-core-orange font-semibold hover:text-core-gold transition-colors inline-flex items-center gap-2"
                  >
                    Saiba mais <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-core-orange to-core-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Encontre o equipamento ideal
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudá-lo a escolher a melhor solução
            para as necessidades do seu laboratório.
          </p>
          <a
            href="https://wa.me/5562981010074?text=Olá! Gostaria de orçamento para equipamentos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-core-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl"
          >
            Solicitar Orçamento
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default EquipamentosPage;
