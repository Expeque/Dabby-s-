import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const POSTS = [
  {
    id: 1,
    title: "The Art of the Capsule Wardrobe",
    category: "Style Guide",
    date: "October 12, 2024",
    image: "https://images.unsplash.com/photo-1434389678232-04ce6c8f5814?q=80&w=1200&auto=format&fit=crop",
    excerpt: "How to build a versatile, timeless collection of essentials that makes getting dressed the easiest part of your day."
  },
  {
    id: 2,
    title: "Behind the Seams: Our New Recycled Cashmere",
    category: "Sustainability",
    date: "September 28, 2024",
    image: "https://images.unsplash.com/photo-1558769132-cb1fac08b4af?q=80&w=1200&auto=format&fit=crop",
    excerpt: "We traveled to Prato, Italy to partner with a multi-generational mill that transforms post-consumer garments into luxurious new yarns."
  },
  {
    id: 3,
    title: "Dabby's x Studio K: The Ceramics Collection",
    category: "Collaboration",
    date: "September 15, 2024",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop",
    excerpt: "A limited-edition collaboration exploring the intersection of functional fashion and handcrafted homewares."
  },
  {
    id: 4,
    title: "How to Care for Your Linen",
    category: "Care Guide",
    date: "August 30, 2024",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Extend the life of your favorite summer pieces with our comprehensive guide to washing, drying, and storing linen."
  },
  {
    id: 5,
    title: "Meet the Maker: Elena Rossi",
    category: "Interviews",
    date: "August 12, 2024",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop",
    excerpt: "A conversation with our lead pattern maker on the importance of fit, drape, and designing for diverse body types."
  },
  {
    id: 6,
    title: "The Fall/Winter 2024 Lookbook",
    category: "Collections",
    date: "July 25, 2024",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Explore our latest collection, featuring structured wool coats, oversized knits, and tailored denim."
  }
];

export function Journal() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-paper py-16 mb-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-medium uppercase tracking-tight mb-4">The Journal</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Stories on style, sustainability, and the people behind the brand.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Featured Post */}
        <div className="mb-24">
          <Link to={`/journal/${POSTS[0].id}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="aspect-[4/3] lg:aspect-square overflow-hidden bg-paper">
              <img 
                src={POSTS[0].image} 
                alt={POSTS[0].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6 text-sm uppercase tracking-widest">
                <span className="text-gold font-medium">{POSTS[0].category}</span>
                <span className="text-muted-foreground">{POSTS[0].date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-medium uppercase tracking-tight mb-6 group-hover:text-gold transition-colors">
                {POSTS[0].title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {POSTS[0].excerpt}
              </p>
              <div className="flex items-center gap-2 font-medium uppercase tracking-widest text-sm group-hover:text-gold transition-colors">
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {POSTS.slice(1).map((post) => (
            <Link key={post.id} to={`/journal/${post.id}`} className="group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-paper mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-4 mb-4 text-xs uppercase tracking-widest">
                <span className="text-gold font-medium">{post.category}</span>
                <span className="text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-xl font-display font-medium uppercase tracking-tight mb-3 group-hover:text-gold transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 font-medium uppercase tracking-widest text-xs group-hover:text-gold transition-colors mt-auto">
                Read Article <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
