import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logos/logo-header.png";

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
          ? "bg-transparent py-4"
          : "bg-white/95 backdrop-blur-lg shadow-lg py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Core Sistemas e Diagnóstica"
              className={`transition-all duration-300 ${
                isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
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
                  className={`absolute -bottom-1 left-0 h-0.5 bg-core-orange transition-all duration-300 rounded-full ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/5562981010074?text=Olá! Gostaria de falar com um especialista sobre as soluções da Core."
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              shouldBeTransparent
                ? "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm"
                : "bg-core-orange text-white hover:bg-core-gold shadow-lg shadow-core-orange/20"
            }`}
          >
            <Phone size={18} />
            <span className="hidden xl:inline">Falar com Especialista</span>
            <span className="xl:hidden">Contato</span>
          </a>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              shouldBeTransparent ? "text-white" : "text-core-dark"
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
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium py-3 px-4 rounded-2xl transition-all ${
                  isActive(link.href)
                    ? "bg-core-orange/10 text-core-orange"
                    : "text-core-dark hover:bg-core-orange/10 hover:text-core-orange"
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
