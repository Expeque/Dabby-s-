import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";

export function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-paper py-20 mb-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight mb-6">The Dabby's Journey</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Born from a desire for simplicity without compromise. We create premium casualwear that respects the people who make it and the planet we share.
          </p>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="container mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-paper overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop" 
              alt="Founder in studio" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-display font-medium uppercase tracking-tight mb-8">A Note from the Founder</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                "I started Dabby's Outfitters because I was tired of the cycle of fast fashion—buying pieces that fell apart after a few washes, or feeling guilty about the opaque supply chains behind the clothes I loved."
              </p>
              <p>
                "We set out to build something different. A brand rooted in transparency, where every thread has a purpose and every garment is designed to last. We don't chase trends; we refine the essentials."
              </p>
              <p>
                "Our mission is simple: to make getting dressed the easiest, most comfortable part of your day, while leaving a positive impact on the world."
              </p>
            </div>
            <div className="mt-8">
              <p className="font-display text-xl italic text-ink">Sarah Dabby</p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mt-1">Founder & Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-charcoal text-cream py-32 mb-32">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-medium uppercase tracking-tight mb-16 text-center">Our Timeline</h2>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {[
              { year: "2018", title: "The Idea", desc: "Dabby's begins as a small capsule collection of 5 perfect tees, sold out of a Brooklyn apartment." },
              { year: "2020", title: "Going Global", desc: "We launch our online store and expand our line to include knitwear and trousers, maintaining our commitment to ethical production." },
              { year: "2022", title: "B-Corp Certification", desc: "After years of rigorous auditing, we officially become a certified B-Corporation, cementing our commitment to social and environmental performance." },
              { year: "2024", title: "The Circular Initiative", desc: "We launch our take-back program, allowing customers to return old Dabby's garments for recycling in exchange for store credit." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-32 shrink-0">
                  <span className="text-4xl font-display font-medium text-gold">{item.year}</span>
                </div>
                <div className="flex-1 pb-16 md:pb-0 border-b md:border-b-0 md:border-l border-cream/20 md:pl-12 relative">
                  <div className="hidden md:block absolute left-0 top-3 w-3 h-3 -translate-x-1.5 rounded-full bg-gold" />
                  <h3 className="text-xl font-medium uppercase tracking-widest mb-4">{item.title}</h3>
                  <p className="text-cream/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium uppercase tracking-tight mb-4">Behind the Seams</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Take a look inside our design studio and partner factories.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-square bg-paper overflow-hidden">
            <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop" alt="Fabric swatches" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-square bg-paper overflow-hidden">
            <img src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=800&auto=format&fit=crop" alt="Sewing machine" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-square bg-paper overflow-hidden">
            <img src="https://images.unsplash.com/photo-1558769132-cb1fac08b4af?q=80&w=800&auto=format&fit=crop" alt="Design sketches" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="uppercase tracking-widest">
            <Link to="/sustainability">Explore Our Sustainability</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
