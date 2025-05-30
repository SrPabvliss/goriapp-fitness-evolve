// src/components/Navbar.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";


export const scrollToSection = (sectionId: string, setIsMenuOpen?: (isOpen: boolean) => void) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80; // altura del navbar
    const elementPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
  if (setIsMenuOpen) {
    setIsMenuOpen(false);
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navItems = [
    { id: 'features', label: 'Características' },
    { id: 'solutions', label: 'Soluciones' },
    { id: 'pricing', label: 'Precios' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                DEMISOFT
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, setIsMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact', setIsMenuOpen)}
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              Agenda Consulta
            </Button>
            <Button 
              className="gradient-bg text-white"
              onClick={() => scrollToSection('pricing', setIsMenuOpen)}
            >
              Ver Precios
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, setIsMenuOpen)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact', setIsMenuOpen)}
                  className="border-blue-200 text-blue-600"
                >
                  Agenda Consulta
                </Button>
                <Button 
                  className="gradient-bg text-white"
                  onClick={() => scrollToSection('pricing', setIsMenuOpen)}
                >
                  Ver Precios
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;