import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logos/logo-hero.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Equipamentos", href: "/equipamentos" },
    { name: "Serviços", href: "/servicos" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  // Determine header style based on page and scroll
  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        shouldBeTransparent
          ? "bg-transparent py-3"
          : "bg-white/95 backdrop-blur-lg shadow-lg py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:justify-center relative">
          {/* Logo - Absolute on desktop for true center nav */}
          <Link to="/" className="flex items-center lg:absolute lg:left-4">
            <img
              src={logo}
              alt="Core Sistemas e Diagnóstica"
              className="h-12 md:h-14 lg:h-16 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  shouldBeTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-core-dark hover:text-core-orange"
                } ${isActive(link.href) ? (shouldBeTransparent ? "text-white" : "text-core-orange") : ""}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-core-orange to-core-gold transition-all duration-300 rounded-full ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button - Absolute on desktop */}
          <a
            href="https://wa.me/5562981010074?text=Olá! Gostaria de falar com um especialista sobre as soluções da Core."
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 lg:absolute lg:right-4 text-sm ${
              shouldBeTransparent
                ? "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm"
                : "bg-gradient-to-r from-core-orange to-core-gold text-white hover:shadow-lg hover:shadow-core-orange/25 hover:scale-105"
            }`}
          >
            <Phone size={16} />
            <span>Fale Conosco</span>
          </a>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              shouldBeTransparent ? "text-white" : "text-core-dark"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
        <div className="bg-white/95 backdrop-blur-lg shadow-xl mx-4 mt-2 rounded-2xl overflow-hidden border border-gray-100">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium py-3 px-4 rounded-xl transition-all ${
                  isActive(link.href)
                    ? "bg-gradient-to-r from-core-orange to-core-gold text-white"
                    : "text-core-dark hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/5562981010074"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-core-orange to-core-gold text-white text-center py-3 px-6 rounded-xl font-semibold mt-3 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Falar com Especialista
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
