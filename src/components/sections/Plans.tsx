import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export default function Plans() {
  const plans = [
    { name: 'Mensal', discount: '0%', priceDesc: 'Preço integral', isPopular: false },
    { name: 'Bimestral', discount: '5%', priceDesc: 'Economia inicial', isPopular: false },
    { name: 'Trimestral', discount: '10%', priceDesc: 'Mais querido', isPopular: true },
    { name: 'Semestral', discount: '15%', priceDesc: 'Para o semestre', isPopular: false },
    { name: 'Anual', discount: '20%', priceDesc: 'Dedicado à saúde', isPopular: false },
  ];

  return (
    <section id="planos" className="py-24 bg-bg-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-om-green mb-4">Escolha sua Fidelidade</h2>
          <p className="text-lg text-om-green/70">
            Nossos planos foram pensados para recompensar o seu compromisso com a alimentação viva. Quanto mais tempo conosco, maior o benefício.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 items-end">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className={`relative bg-white rounded-3xl p-6 border transition-all hover:shadow-2xl ${
                plan.isPopular ? 'border-accent-gold shadow-xl scale-105 z-10' : 'border-earth-light/20 shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-om-green font-bold text-xs uppercase px-3 py-1 rounded-full whitespace-nowrap">
                  Desconto Progressivo
                </div>
              )}
              
              <div className="text-center pb-6 border-b border-om-green/10 mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.isPopular ? 'text-earth' : 'text-om-green'}`}>
                  {plan.name}
                </h3>
                <div className="text-3xl font-serif font-black text-om-green mb-2">
                  -{plan.discount}
                </div>
                <p className="text-sm text-om-green/50">{plan.priceDesc}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-om-green/80">
                  <Check size={18} className="text-om-green shrink-0" />
                  Kombuchas Om Sortidos
                </li>
                <li className="flex gap-2 text-sm text-om-green/80">
                  <Check size={18} className="text-om-green shrink-0" />
                  Massa de Fermentação Natural
                </li>
                <li className="flex gap-2 text-sm text-om-green/80">
                  <Check size={18} className="text-om-green shrink-0" />
                  Queijos e Mimos Surpresa
                </li>
              </ul>
              
              <Button 
                variant={plan.isPopular ? 'primary' : 'outline'} 
                className="w-full"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Assinar
              </Button>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
