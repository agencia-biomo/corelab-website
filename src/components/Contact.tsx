import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { companyInfo, coverage } from "../data/content";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.%0A%0AE-mail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5562981010074?text=${message}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-core-orange font-semibold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="section-title mt-2">
            Entre em <span className="text-core-orange">Contato</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Estamos prontos para atender você. Tire suas dúvidas, solicite um
            orçamento ou agende uma demonstração.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-core-dark mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <a
                href={`tel:${companyInfo.contact.phone.replace(/\D/g, "")}`}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-core-orange/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-core-orange/10 flex items-center justify-center group-hover:bg-core-orange transition-colors">
                  <Phone
                    size={24}
                    className="text-core-orange group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <div className="font-semibold text-core-dark">Telefone</div>
                  <div className="text-core-gray">{companyInfo.contact.phone}</div>
                  <div className="text-core-gray">
                    {companyInfo.contact.whatsapp.join(" / ")}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-core-orange/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-core-orange/10 flex items-center justify-center group-hover:bg-core-orange transition-colors">
                  <Mail
                    size={24}
                    className="text-core-orange group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <div className="font-semibold text-core-dark">E-mail</div>
                  <div className="text-core-gray">{companyInfo.contact.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-core-orange/10 flex items-center justify-center">
                  <MapPin size={24} className="text-core-orange" />
                </div>
                <div>
                  <div className="font-semibold text-core-dark">Endereço</div>
                  <div className="text-core-gray">
                    {companyInfo.address.street}, {companyInfo.address.complement}
                    <br />
                    {companyInfo.address.neighborhood}, {companyInfo.address.city} -{" "}
                    {companyInfo.address.state}
                    <br />
                    CEP: {companyInfo.address.zip}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-core-orange/10 flex items-center justify-center">
                  <Clock size={24} className="text-core-orange" />
                </div>
                <div>
                  <div className="font-semibold text-core-dark">
                    Horário de Atendimento
                  </div>
                  <div className="text-core-gray">
                    Segunda a Sexta: 08h às 18h
                    <br />
                    Suporte 24h para clientes com contrato
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage */}
            <div className="mt-8">
              <h4 className="font-semibold text-core-dark mb-4">
                Área de Cobertura
              </h4>
              <div className="flex flex-wrap gap-2">
                {coverage.map((region, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-core-orange/10 text-core-orange text-sm rounded-full"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-core-dark mb-6">
              Envie sua Mensagem
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-core-dark mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-core-gray">
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-core-dark mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-core-orange focus:ring-2 focus:ring-core-orange/20 outline-none transition-all"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-core-dark mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-core-orange focus:ring-2 focus:ring-core-orange/20 outline-none transition-all"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-core-dark mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-core-orange focus:ring-2 focus:ring-core-orange/20 outline-none transition-all"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-core-dark mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-core-orange focus:ring-2 focus:ring-core-orange/20 outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
