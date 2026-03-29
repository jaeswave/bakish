import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { products } from '../data/products';

const Home = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const featuredProducts = products.filter(product => product.featured).slice(0, 4);

    return (
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero.png"
              alt="Hero Model"
              className="w-full h-full object-cover object-center md:object-top scale-105"
            />

            {/* Gradient overlay (bottom-heavy for text readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-brand-gold uppercase tracking-[0.25em] text-xs sm:text-sm md:text-base font-semibold mb-4"
            >
              Premium Native Fashion
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight text-white drop-shadow-2xl"
            >
              Redefining Native{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600 italic">
                Elegance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-brand-cream/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl leading-relaxed"
            >
              Experience the fusion of royal heritage and modern craftsmanship.
              Tailored exclusively for the confident African man.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8"
            >
              <Button to="/collections" variant="primary">
                Shop Collection
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Featured Outfits */}
        <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-brand-brown/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">
                Curated Pieces
              </span>
              <h2 className="text-4xl md:text-5xl text-white">
                Featured Collections
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button to="/collections" variant="outline">
                View All Styles
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] lg:aspect-square overflow-hidden"
              >
                <img
                  src="/images/wedding.png"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-4 border-brand-gold/20 m-6 pointer-events-none"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <span className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">
                    Our Story
                  </span>
                  <h2 className="text-4xl md:text-5xl leading-tight text-white mb-6">
                    The Art of <br />
                    Premium Tailoring
                  </h2>
                  <div className="w-16 h-1 bg-brand-gold"></div>
                </div>
                <p className="text-brand-cream/70 text-lg leading-relaxed">
                  Bakish Wears is more than a fashion brand; it's a statement of
                  royalty, culture, and modern African elegance. Every stitch
                  tells a story of luxury craftsmanship designed to bring out
                  the confidence in you.
                </p>
                <p className="text-brand-cream/70 text-lg leading-relaxed pb-4">
                  Whether you are a groom, a business leader, or a diaspora
                  African maintaining roots, our bespoke Agbada, Senator wears,
                  and Kaftans are tailored to perfection.
                </p>
                <Button to="/about" variant="outline">
                  Read Our Story
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-brand-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-white">
                Words of Royalty
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  text: "The craftsmanship is unparalleled. I wore my custom Agbada for my wedding and felt like absolute royalty. The fit was perfect.",
                  author: "Adeolu, Groom",
                  location: "Lagos",
                },
                {
                  text: "My go-to for Senator wears. The fabric quality and attention to detail in the embroidery is simply the best I've seen in Nigeria.",
                  author: "Musa D.",
                  location: "Abuja",
                },
                {
                  text: "Ordering from the diaspora was seamless. The clothes arrived exactly as measured and the modern touch on the traditional wear is stunning.",
                  author: "Chuka E.",
                  location: "London, UK",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="bg-[#050505] p-8 border border-brand-brown/10 relative"
                >
                  <div className="text-brand-gold text-4xl font-serif absolute top-4 left-6 opacity-20">
                    "
                  </div>
                  <p className="text-brand-cream/80 text-lg mb-8 relative z-10 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-serif text-white text-xl">
                      {testimonial.author}
                    </h4>
                    <p className="text-brand-gold text-sm tracking-wider uppercase mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Preview */}
        <section className="py-16 bg-[#050505] border-t border-brand-brown/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
            <h2 className="font-serif text-3xl text-white mb-4">
              Follow The Culture
            </h2>
            <p className="text-brand-cream/60 mb-8">@bakishwears</p>
            <div className="flex justify-center flex-wrap gap-4">
              <img
                src="/images/agbada.png"
                alt="Insta 1"
                className="w-32 h-32 md:w-48 md:h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <img
                src="/images/senator.png"
                alt="Insta 2"
                className="w-32 h-32 md:w-48 md:h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <img
                src="/images/kaftan.png"
                alt="Insta 3"
                className="w-32 h-32 md:w-48 md:h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <img
                src="/images/wedding.png"
                alt="Insta 4"
                className="w-32 h-32 md:w-48 md:h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500 hidden sm:block"
              />
            </div>
            <div className="mt-12">
              <Button to="#" variant="outline">
                Follow on Instagram
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Home;
