import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { MessageCircle } from 'lucide-react';
import logo from '../../assets/logo-clube.png';

export default function CTA() {
  return (
    <>
    <section className="py-24 bg-earth text-bg-cream relative overflow-hidden" id="cta">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0wIDBoOHY4SDB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent-gold mb-6">
            Pronto para transformar sua rotina alimentar?
          </h2>
          <p className="text-xl text-bg-cream/90 mb-10">
            Junte-se ao clube e receba o melhor da Mantiqueira na sua casa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Button variant="primary" size="lg" className="bg-bg-cream text-earth hover:bg-white w-full sm:w-auto text-xl" onClick={() => window.location.href='#planos'}>
               Quero me Inscrever
             </Button>
             
             <Button variant="outline" size="lg" className="border-bg-cream text-bg-cream hover:bg-bg-cream hover:text-earth w-full sm:w-auto flex items-center justify-center gap-2" onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
               <MessageCircle size={24} />
               Fale no WhatsApp
             </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-om-green text-bg-cream/60 py-12 border-t border-earth-light/20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo Pão Selvagem & Kombucha Om" className="w-40 h-40 md:w-56 md:h-56 object-contain mb-6 drop-shadow-xl" />
          <p className="max-w-xs text-sm leading-relaxed text-bg-cream/50">
            Clube de Assinatura de Fermentação Ancestral e Sabores da Mantiqueira.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm">Acompanhe nosso trabalho</p>
          <div className="flex gap-4">
             <a href="https://www.instagram.com/kombuchaomoficial/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
               <span className="text-sm font-bold">@</span> <span className="text-sm">@kombuchaomoficial</span>
             </a>
             <a href="https://www.instagram.com/padariapaoselvagem/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
               <span className="text-sm font-bold">@</span> <span className="text-sm">@padariapaoselvagem</span>
             </a>
          </div>
        </div>
        
        <div className="md:text-right text-xs">
          <p>© {new Date().getFullYear()} Pão Selvagem & Kombucha Om.</p>
          <p className="mt-1">São Lourenço, Serra da Mantiqueira, MG</p>
        </div>
      </div>
    </footer>
    </>
  );
}
