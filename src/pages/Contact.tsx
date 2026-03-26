import { Button } from "@/src/components/ui/button";

export function Contact() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-paper py-16 mb-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-medium uppercase tracking-tight mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a question about an order, our products, or our sustainability practices? We're here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-display font-medium uppercase tracking-tight mb-6">Customer Care</h2>
              <p className="text-muted-foreground mb-4">
                Our team is available Monday through Friday, 9am to 5pm EST. We aim to respond to all inquiries within 24 hours.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Email: <a href="mailto:hello@dabbysoutfitters.com" className="text-muted-foreground hover:text-gold transition-colors">hello@dabbysoutfitters.com</a></p>
                <p className="font-medium">Phone: <a href="tel:+18005550199" className="text-muted-foreground hover:text-gold transition-colors">1-800-555-0199</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium uppercase tracking-tight mb-6">Press & Partnerships</h2>
              <p className="text-muted-foreground mb-4">
                For media inquiries, collaborations, or wholesale opportunities, please reach out to our partnerships team.
              </p>
              <p className="font-medium">Email: <a href="mailto:press@dabbysoutfitters.com" className="text-muted-foreground hover:text-gold transition-colors">press@dabbysoutfitters.com</a></p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium uppercase tracking-tight mb-6">Studio</h2>
              <p className="text-muted-foreground">
                123 Creative Way<br />
                Suite 400<br />
                Brooklyn, NY 11201<br />
                United States
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-paper p-8 md:p-12">
            <h2 className="text-2xl font-display font-medium uppercase tracking-tight mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium uppercase tracking-widest">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-charcoal transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium uppercase tracking-widest">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-charcoal transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-charcoal transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="orderNumber" className="text-sm font-medium uppercase tracking-widest">Order Number (Optional)</label>
                <input 
                  type="text" 
                  id="orderNumber" 
                  className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-charcoal transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-charcoal transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <Button type="submit" className="w-full uppercase tracking-widest" size="lg">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
