import { motion } from 'framer-motion';

export default function Origin() {
  return (
    <section id="origem" className="bg-om-green text-bg-cream py-24 relative overflow-hidden">
      {/* Decorative large circle */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-full blur-3xl -z-10 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[4/5] bg-earth-light/20 shadow-2xl relative"
          >
             {/* Fake image placeholder representing the farm/process */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white z-10">
                <span className="text-xs uppercase tracking-widest text-accent-gold mb-2 font-bold">Circuito das Águas</span>
                <span className="font-serif text-2xl font-bold">Soledade de Minas e<br/>São Lourenço</span>
             </div>
             {/* Pattern or texture as image replacement */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 20, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-8 -right-8 w-48 h-48 bg-bg-cream rounded-full border-8 border-om-green p-6 flex flex-col items-center justify-center shadow-xl text-om-green text-center"
          >
            <span className="text-4xl font-serif font-black text-earth">72h+</span>
            <span className="text-xs font-bold leading-tight uppercase tracking-wider">de Fermentação</span>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent-gold mb-8">
            Das Nossas Mãos <br/>
            Para a Sua Mesa
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-2 border-white/20 pl-6 hover:border-accent-gold transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">Água Mineral de Nascente</h4>
              <p className="text-bg-cream/70 text-sm">O segredo das nossas Kombuchas e Pães está na água puríssima da Serra da Mantiqueira, o coração do Circuito das Águas.</p>
            </div>
            
            <div className="border-l-2 border-white/20 pl-6 hover:border-accent-gold transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">Manteiga Integral Local</h4>
              <p className="text-bg-cream/70 text-sm">Nossos croissants ganham sua alma e textura inconfundível com a manteiga rica produzida pelas fazendas leiteiras da região.</p>
            </div>
            
            <div className="border-l-2 border-white/20 pl-6 hover:border-accent-gold transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">Fermentação Ancestral</h4>
              <p className="text-bg-cream/70 text-sm">Respeitamos o tempo da natureza. De 72h a 120h de guarda apaixonante, criando complexidade de sabor, leveza digestiva e puro alimento vivo.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
