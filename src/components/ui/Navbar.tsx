import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import logo from '../../assets/logo-clube.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Clube', href: '#o_clube' },
    { name: 'Planos', href: '#planos' },
    { name: 'Origem', href: '#origem' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-cream/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        
        {/* Desktop Links (Left) */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-widest text-om-green hover:text-earth-light transition-colors" translate="no">
              {link.name}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center z-50">
          <a href="#hero">
            <img 
              src={logo} 
              alt="Logo Pão Selvagem & Kombucha Om" 
              className={`transition-all duration-700 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] ${isScrolled ? 'h-32 w-32 translate-y-0' : 'h-80 w-80 md:h-96 md:w-96 translate-y-4 md:translate-y-12'}`}
            />
          </a>
        </div>

        {/* Desktop Rights (CTA) */}
        <div className="hidden md:flex items-center">
          <Button variant="primary" size="sm" onClick={() => window.location.href='#planos'}>
            Assine Agora
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-om-green focus:outline-none">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-cream shadow-lg border-t border-om-green/10 md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-om-green"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-om-green/10">
                <Button variant="primary" className="w-full" onClick={() => { window.location.href='#planos'; setMobileMenuOpen(false); }}>
                  Assine Agora
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
