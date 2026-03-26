import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronRight, Heart, Share2, Truck, RefreshCw } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("White");

  // Mock product data
  const product = {
    id: id || "1",
    name: "The Essential Tee",
    price: "$45",
    description: "Our signature everyday tee, crafted from 100% organic Peruvian Pima cotton. Designed with a relaxed fit, slightly dropped shoulders, and a classic crew neckline that holds its shape wash after wash.",
    details: [
      "100% Organic Pima Cotton",
      "Relaxed, slightly boxy fit",
      "Pre-shrunk for a true fit",
      "Made ethically in Lima, Peru"
    ],
    colors: ["White", "Black", "Heather Grey", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3db8?q=80&w=1200&auto=format&fit=crop"
    ],
    stock: 3
  };

  return (
    <div className="pt-24 pb-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-paper overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="aspect-[3/4] bg-paper overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${product.name} detail ${i + 1}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="sticky top-32">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl md:text-4xl font-display font-medium uppercase tracking-tight">{product.name}</h1>
                <span className="text-2xl font-medium">{product.price}</span>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm text-muted-foreground underline cursor-pointer hover:text-ink transition-colors">128 Reviews</span>
              </div>

              <p className="text-muted-foreground mb-8 text-balance leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium uppercase tracking-widest text-sm">Color: <span className="text-muted-foreground">{selectedColor}</span></span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'ring-2 ring-offset-2 ring-charcoal border-transparent' : 'border-border'} transition-all`}
                      style={{ 
                        backgroundColor: color.toLowerCase().replace(' ', ''),
                        ...(color === 'White' ? { backgroundColor: '#f9fafb' } : {})
                      }}
                      aria-label={`Select ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium uppercase tracking-widest text-sm">Size</span>
                  <button className="text-sm text-muted-foreground underline hover:text-ink transition-colors">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border text-sm font-medium transition-colors ${
                        selectedSize === size 
                          ? 'border-charcoal bg-charcoal text-cream' 
                          : 'border-border hover:border-charcoal text-ink'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency Indicator */}
              {product.stock <= 5 && (
                <div className="mb-6 text-sm font-medium text-amber-700 flex items-center gap-2 bg-amber-50 p-3 rounded-sm border border-amber-100">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  Only {product.stock} left in stock - order soon.
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4 mb-10">
                <Button className="flex-1 uppercase tracking-widest" size="lg">
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="shrink-0">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="shrink-0">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Details Accordion (Simplified) */}
              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h3 className="font-medium uppercase tracking-widest mb-4">Details & Fit</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {product.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-charcoal" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-widest mb-1">Free Shipping</h4>
                      <p className="text-xs text-muted-foreground">On orders over $150</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-widest mb-1">Free Returns</h4>
                      <p className="text-xs text-muted-foreground">Within 30 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buy the Look / Recommendations */}
      <section className="mt-32 container mx-auto px-4 md:px-8 border-t border-border pt-24">
        <h2 className="text-3xl font-display font-medium uppercase tracking-tight mb-12 text-center">Complete the Look</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: 2, name: "Everyday Linen Trouser", price: "$120", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop" },
            { id: 8, name: "Wide Leg Denim", price: "$110", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop" },
            { id: 9, name: "Leather Minimalist Belt", price: "$65", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop" },
            { id: 10, name: "Canvas Tote", price: "$45", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop" },
          ].map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-paper mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-ink">{item.name}</h3>
                <span className="font-medium">{item.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
