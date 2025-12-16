import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram } from "lucide-react";
import { companyInfo, coverage } from "../data/content";

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Contato via Site*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Assunto:* ${formData.subject}%0A%0A*Mensagem:*%0A${formData.message}`;
    window.open(`https://wa.me/5562981010074?text=${message}`, "_blank");
  };

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
              <MessageCircle size={16} />
              Fale Conosco
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Entre em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-core-orange to-core-gold">
                Contato
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Estamos prontos para atendê-lo. Entre em contato e descubra como
              podemos ajudar seu laboratório a crescer.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-core-dark mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6 mb-12">
                {/* Phone */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-core-orange to-core-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-core-dark mb-2">Telefone</h3>
                    <a href="tel:+556232840588" className="text-core-gray hover:text-core-orange transition-colors block">
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-core-orange to-core-gold flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-core-dark mb-2">WhatsApp</h3>
                    {companyInfo.contact.whatsapp.map((number, index) => (
                      <a
                        key={index}
                        href={`https://wa.me/55${number.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-core-gray hover:text-core-orange transition-colors block"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-core-orange to-core-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-core-dark mb-2">E-mail</h3>
                    <a href={`mailto:${companyInfo.contact.email}`} className="text-core-gray hover:text-core-orange transition-colors">
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-core-orange to-core-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-core-dark mb-2">Endereço</h3>
                    <p className="text-core-gray">
                      {companyInfo.address.street}<br />
                      {companyInfo.address.complement}<br />
                      {companyInfo.address.neighborhood}<br />
                      {companyInfo.address.city} - {companyInfo.address.state}<br />
                      CEP: {companyInfo.address.zip}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-core-orange to-core-gold flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-core-dark mb-2">Horário de Atendimento</h3>
                    <p className="text-core-gray">
                      Segunda a Sexta: 8h às 18h<br />
                      Suporte Técnico: 24 horas
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-bold text-core-dark mb-4">Redes Sociais</h3>
                <a
                  href={`https://instagram.com/${companyInfo.social.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-core-orange/10 to-core-gold/10 text-core-orange px-6 py-3 rounded-full font-semibold hover:from-core-orange hover:to-core-gold hover:text-white transition-all"
                >
                  <Instagram size={20} />
                  {companyInfo.social.instagram}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10">
                <h2 className="text-2xl font-bold text-core-dark mb-6">
                  Envie sua Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-core-dark mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-core-orange focus:ring-2 focus:ring-core-orange/20 outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-core-dark mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-core-orange focus:ring-2 focus:ring-core-orange/20 outline-none transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-core-dark mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-core-orange focus:ring-2 focus:ring-core-orange/20 outline-none transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-core-dark mb-2">
                      Assunto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-core-orange focus:ring-2 focus:ring-core-orange/20 outline-none transition-all"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Orçamento de Equipamento">Orçamento de Equipamento</option>
                      <option value="Orçamento de Reagentes">Orçamento de Reagentes</option>
                      <option value="Suporte Técnico">Suporte Técnico</option>
                      <option value="Assessoria Científica">Assessoria Científica</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-core-dark mb-2">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-core-orange focus:ring-2 focus:ring-core-orange/20 outline-none transition-all resize-none"
                      placeholder="Como podemos ajudá-lo?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-core-orange to-core-gold text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-core-orange/30 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-core-dark">Nossa Localização</h2>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8847047894483!2d-49.27082492394849!3d-16.692194684147287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11c86b8d4db%3A0x7bff9b9f12e0a0d0!2sAv.%20Oeste%2C%20267%20-%20St.%20Aeroporto%2C%20Goi%C3%A2nia%20-%20GO%2C%2074075-110!5e0!3m2!1spt-BR!2sbr!4v1702749600000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Core Sistemas"
            />
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-core-orange font-semibold text-sm uppercase tracking-wider bg-core-orange/10 px-4 py-2 rounded-full mb-4">
              Área de Cobertura
            </span>
            <h2 className="text-3xl font-bold text-core-dark">
              Estados Atendidos
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {coverage.map((state, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gradient-to-r hover:from-core-orange hover:to-core-gold hover:text-white transition-all group"
              >
                <MapPin size={24} className="mx-auto mb-2 text-core-orange group-hover:text-white transition-colors" />
                <span className="text-sm font-medium">{state}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-core-orange to-core-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Precisa de atendimento rápido?</h3>
              <p className="text-white/90">Fale diretamente com nossa equipe pelo WhatsApp</p>
            </div>
            <a
              href="https://wa.me/5562981010074"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-core-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatoPage;
