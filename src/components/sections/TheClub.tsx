import { motion, type Variants } from 'framer-motion';
import { Croissant, Coffee, Box, ShieldCheck, Heart } from 'lucide-react';

export default function TheClub() {
  const items = [
    {
      title: 'Pães Rústicos e Folheados',
      desc: 'Massas de longa fermentação (72h a 120h) e deliciosos croissants artesanais.',
      icon: <Croissant size={32} />
    },
    {
      title: 'Kombucha Om',
      desc: 'Néctar vivo. Uma guloseima probiótica refrescante para a alma e o corpo.',
      icon: <Box size={32} />
    },
    {
      title: 'Curadoria da Mantiqueira',
      desc: 'Seleção especial de queijos premium e cafés cultivados no Circuito das Águas.',
      icon: <Coffee size={32} />
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemAnim: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="o_clube" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-om-green mb-4">A Experiência do Clube</h2>
          <p className="text-lg text-om-green/70">
            Mais do que comida, uma assinatura de bem-estar. Todo mês, entregamos uma caixa selecionada com os melhores sabores das montanhas de São Lourenço direto para a sua casa.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemAnim}
              className="group bg-bg-cream border border-earth-light/20 p-8 rounded-3xl hover:border-accent-gold/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-om-green/5 flex items-center justify-center text-earth mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-om-green/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 bg-om-green text-bg-cream rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Heart size={200} />
          </div>
          <div className="z-10 text-center md:text-left flex-1">
            <h3 className="text-2xl font-serif font-bold mb-2">Compromisso com sua Saúde</h3>
            <p className="text-bg-cream/80 max-w-md">Ingredientes 100% limpos e locais. O que a natureza faz de melhor com o capricho das mãos humanas.</p>
          </div>
          <div className="z-10 flex gap-4 items-center">
            <ShieldCheck size={48} className="text-accent-gold" />
            <div className="text-left font-bold text-lg">Garantia<br/>Artesanal</div>
          </div>
        </div>
      </div>
    </section>
  );
}
