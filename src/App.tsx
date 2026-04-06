import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import TheClub from './components/sections/TheClub';
import Plans from './components/sections/Plans';
import Origin from './components/sections/Origin';
import CTA from './components/sections/CTA';

export default function App() {
  return (
    <main className="min-h-screen bg-bg-cream selection:bg-accent-gold/30">
      <Navbar />
      <Hero />
      <TheClub />
      <Plans />
      <Origin />
      <CTA />
    </main>
  );
}
