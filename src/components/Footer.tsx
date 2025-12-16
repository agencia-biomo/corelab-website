import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { companyInfo } from "../data/content";
import logo from "../assets/logos/logo-hero.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#151525] to-core-dark text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-core-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-core-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Core Sistemas" className="h-14 md:h-16 mb-5 md:mb-6" />
            <p className="text-gray-400 mb-5 md:mb-6 text-sm md:text-base leading-relaxed">
              Soluções completas em automação laboratorial com o suporte técnico
              mais rápido e a assessoria científica que seu laboratório precisa.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-core-orange hover:to-core-gold hover:border-transparent transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Links Rápidos</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Sobre", href: "/sobre" },
                { name: "Equipamentos", href: "/equipamentos" },
                { name: "Serviços", href: "/servicos" },
                { name: "Contato", href: "/contato" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-core-orange transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Serviços</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Assistência Técnica 24h",
                "Assessoria Científica",
                "Instalação e Treinamento",
                "Venda de Equipamentos",
                "Locação e Comodato",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm md:text-base">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Contato</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\D/g, "")}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-core-orange transition-colors text-sm md:text-base"
                >
                  <Phone size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <div>{companyInfo.contact.phone}</div>
                    <div>{companyInfo.contact.whatsapp[0]}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-core-orange transition-colors text-sm md:text-base"
                >
                  <Mail size={18} className="flex-shrink-0" />
                  <span className="break-all">{companyInfo.contact.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    {companyInfo.address.street}, {companyInfo.address.complement}
                    <br />
                    {companyInfo.address.neighborhood}, {companyInfo.address.city} -{" "}
                    {companyInfo.address.state}
                    <br />
                    CEP: {companyInfo.address.zip}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © {currentYear} {companyInfo.name}. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs md:text-sm">
            CNPJ: {companyInfo.cnpj}
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5562981010074?text=Olá! Gostaria de falar com um especialista sobre as soluções da Core."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
