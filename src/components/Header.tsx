import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logos/logo-main.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Equipamentos", href: "#equipamentos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="Core Sistemas e Diagnóstica"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-core-dark hover:text-core-orange"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-core-orange transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/5562981010074?text=Olá! Gostaria de falar com um especialista sobre as soluções da Core."
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              isScrolled
                ? "bg-core-orange text-white hover:bg-core-gold shadow-lg shadow-core-orange/20"
                : "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm"
            }`}
          >
            <Phone size={18} />
            <span className="hidden xl:inline">Falar com Especialista</span>
            <span className="xl:hidden">Contato</span>
          </a>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? "text-core-dark" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg shadow-xl mx-4 mt-2 rounded-3xl overflow-hidden">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-core-dark font-medium py-3 px-4 hover:bg-core-orange/10 hover:text-core-orange rounded-2xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5562981010074"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-core-orange text-white text-center py-4 px-6 rounded-2xl font-semibold mt-4 hover:bg-core-gold transition-colors"
            >
              Falar com Especialista
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
