import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowDown } from 'lucide-react';
import logoKombucha from '../../assets/logo-kombucha-om.png';
import logoPao from '../../assets/logo-pao-selvagem.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[500px] md:pt-20 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-bg-cream -z-20"></div>
      
      {/* Decorative blurred shapes */}
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-om-green/10 rounded-full blur-3xl -z-10"
      ></motion.div>
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-earth-light/10 rounded-full blur-3xl -z-10"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-om-green/20 text-om-green/80 text-sm font-medium w-max"
>
            <span className="w-2 h-2 rounded-full bg-accent-gold"></span>
            Direto da Serra da Mantiqueira
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-om-green">
            Alimento Vivo e <br/>
            <span className="text-earth">Guloseima Saudável</span>
          </h1>
          <p className="text-xl text-om-green/80 max-w-lg mb-4">
            Descubra o Clube de Assinatura Pão Selvagem & Kombucha Om. Fermentação ancestral e o puro sabor rústico entregues na sua porta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => window.location.href='#planos'}>
              Conhecer Planos
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href='#o_clube'}>
              Como Funciona
            </Button>
          </div>
        </motion.div>

        {/* 3D-like Floating Visuals */}
        <div className="relative h-[500px] flex items-center justify-center hidden md:flex">
            {/* Kombucha Element */}
            <motion.div
               animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute z-10 w-52 h-72 bg-gradient-to-br from-amber-200/20 to-white/10 backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-6 -translate-x-16 translate-y-8 overflow-hidden"
               style={{ transformStyle: 'preserve-3d' }}
            >
               <img src={logoKombucha} alt="Kombucha Om" className="w-40 h-40 object-contain mb-4 drop-shadow-lg" />
               <div className="text-center">
                 <p className="font-serif font-bold text-om-green">Kombucha Om</p>
                 <p className="text-xs text-om-green/70 uppercase tracking-widest font-bold">Probiótico Natural</p>
               </div>
            </motion.div>

            {/* Bread Element */}
            <motion.div
               animate={{ y: [0, 25, 0], rotate: [0, -3, 3, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute z-20 w-60 h-60 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-4 translate-x-24 -translate-y-12 border-8 border-earth-light/20 relative"
            >
               <img src={logoPao} alt="Pão Selvagem" className="w-48 h-48 rounded-full object-cover shadow-inner" />
               <div className="absolute -bottom-4 bg-earth text-bg-cream px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                 Fermentação Longa
               </div>
            </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-om-green/50"
      >
        <a href="#o_clube"><ArrowDown /></a>
      </motion.div>
    </section>
  );
}
