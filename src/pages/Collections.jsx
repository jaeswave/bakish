import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ui/ProductCard';
import { products, categories } from '../data/products';

const Collections = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="pt-24 min-h-screen bg-brand-black">
            {/* Header */}
            <div className="py-16 text-center bg-[#050505] border-b border-brand-brown/20 bg-[url('/images/agbada.png')] bg-cover bg-center relative bg-blend-overlay">
                <div className="absolute inset-0 bg-brand-black/90"></div>
                <div className="relative z-10 px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl text-brand-gold mb-4"
                    >
                        The Collection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-cream/80 text-lg max-w-2xl mx-auto"
                    >
                        Explore our meticulously crafted traditional native wears. Filter by category to find your perfect fit.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-brand-gold text-black border-brand-gold scale-105'
                                    : 'bg-transparent text-white border-brand-brown/50 hover:border-brand-gold hover:text-brand-gold'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl text-brand-gold font-serif mb-4">No items currently available in this category.</h3>
                        <p className="text-brand-cream/60">Please check back later or contact us for custom orders.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Collections;
