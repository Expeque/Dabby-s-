import { Link } from "react-router-dom";
import { Leaf, Recycle, Droplets, ShieldCheck } from "lucide-react";

export function Sustainability() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-paper py-20 mb-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight mb-6">Conscious by Design</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            We believe that true luxury doesn't come at the expense of the planet. Here's how we're working to minimize our footprint and maximize our positive impact.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="container mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Leaf, title: "Ethical Materials", desc: "95% of our collection is made from organic, recycled, or regenerative materials." },
            { icon: ShieldCheck, title: "Fair Labor", desc: "We partner exclusively with factories that guarantee living wages and safe conditions." },
            { icon: Droplets, title: "Water Conservation", desc: "Our denim and dyeing processes use 80% less water than industry standards." },
            { icon: Recycle, title: "Circular Future", desc: "Designed for longevity, with a take-back program to ensure nothing goes to landfill." }
          ].map((pillar, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium uppercase tracking-widest mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Material Sourcing */}
      <section className="bg-charcoal text-cream py-24 mb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-medium uppercase tracking-tight mb-8">Material Transparency</h2>
              <p className="text-cream/80 mb-8 leading-relaxed">
                We trace our materials back to their origin. By knowing exactly where our cotton is grown, our wool is sheared, and our recycled fibers are processed, we can ensure the highest standards of environmental and social responsibility.
              </p>
              <ul className="space-y-6">
                <li className="border-b border-cream/20 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium uppercase tracking-widest">Organic Pima Cotton</span>
                    <span className="text-gold">Peru</span>
                  </div>
                  <p className="text-sm text-cream/60">Grown without synthetic pesticides or fertilizers, preserving soil health and protecting farmers.</p>
                </li>
                <li className="border-b border-cream/20 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium uppercase tracking-widest">Recycled Cashmere</span>
                    <span className="text-gold">Italy</span>
                  </div>
                  <p className="text-sm text-cream/60">Post-consumer garments spun into new, luxurious yarns, saving water and reducing waste.</p>
                </li>
                <li className="border-b border-cream/20 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium uppercase tracking-widest">TENCEL™ Lyocell</span>
                    <span className="text-gold">Austria</span>
                  </div>
                  <p className="text-sm text-cream/60">Derived from sustainably sourced wood pulp in a closed-loop production process.</p>
                </li>
              </ul>
            </div>
            <div className="aspect-[4/5] bg-ink overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?q=80&w=1200&auto=format&fit=crop" 
                alt="Cotton field" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-medium uppercase tracking-tight mb-12">Our Certifications</h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder for logos */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full border-2 border-ink flex items-center justify-center font-display font-bold text-xl">B-CORP</div>
            <span className="text-xs uppercase tracking-widest font-medium">Certified B Corp</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full border-2 border-ink flex items-center justify-center font-display font-bold text-xl">GOTS</div>
            <span className="text-xs uppercase tracking-widest font-medium">Global Organic Textile</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full border-2 border-ink flex items-center justify-center font-display font-bold text-xl">OEKO-TEX</div>
            <span className="text-xs uppercase tracking-widest font-medium">Standard 100</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full border-2 border-ink flex items-center justify-center font-display font-bold text-xl">FAIR TRADE</div>
            <span className="text-xs uppercase tracking-widest font-medium">Fair Trade Certified</span>
          </div>
        </div>
      </section>
    </div>
  );
}
