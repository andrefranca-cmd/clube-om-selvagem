import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Leaf, Droplets, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-om-green/20 text-om-green/80 text-sm font-medium w-max">
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
              className="absolute z-10 w-48 h-72 bg-gradient-to-br from-amber-200/40 to-earth-light/60 backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-6 -translate-x-16 translate-y-8"
              style={{ transformStyle: 'preserve-3d' }}
           >
              <Droplets className="text-earth w-16 h-16 mb-4" />
              <div className="text-center">
                <p className="font-serif font-bold text-om-green">Kombucha Om</p>
                <p className="text-xs text-om-green/70">Probiótico Natural</p>
              </div>
           </motion.div>

           {/* Bread Element */}
           <motion.div
              animate={{ y: [0, 25, 0], rotate: [0, -3, 3, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute z-20 w-56 h-56 bg-gradient-to-br from-[#d4a373] to-[#cc8b86] rounded-full shadow-2xl flex flex-col items-center justify-center p-8 translate-x-24 -translate-y-12 border-4 border-bg-cream"
           >
              <Leaf className="text-bg-cream w-12 h-12 mb-2" />
              <div className="text-center text-bg-cream">
                <p className="font-serif font-bold text-xl">Pão Selvagem</p>
                <p className="text-sm opacity-90">Fermentação Longa</p>
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
