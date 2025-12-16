import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../assets/logos/logo-main.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Equipamentos", href: "#equipamentos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-core-dark text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+556232840588"
              className="flex items-center gap-2 hover:text-core-gold transition-colors"
            >
              <Phone size={14} />
              (62) 3284-0588
            </a>
            <a
              href="mailto:core_system@hotmail.com"
              className="flex items-center gap-2 hover:text-core-gold transition-colors"
            >
              <Mail size={14} />
              core_system@hotmail.com
            </a>
          </div>
          <div className="text-core-gold font-medium">
            Rápido no atendimento. Forte na confiança.
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Core Sistemas e Diagnóstica" className="h-12 md:h-16" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-core-dark font-medium hover:text-core-orange transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-core-orange transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/5562981010074?text=Olá! Gostaria de falar com um especialista sobre as soluções da Core."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-primary"
          >
            Falar com Especialista
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-core-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-core-dark font-medium py-2 hover:text-core-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5562981010074"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-4"
              >
                Falar com Especialista
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
