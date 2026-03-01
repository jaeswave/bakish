import { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-brand-black">
            {/* Hero */}
            <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <img
                    src="/images/wedding.png"
                    alt="About Bakish Wears"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-brand-black/60"></div>
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl text-brand-gold mb-4"
                    >
                        Our Heritage
                    </motion.h1>
                    <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
                </div>
            </div>

            {/* Brand Story */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg leading-relaxed text-brand-cream/80 space-y-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-serif text-white leading-tight"
                    >
                        "Bakish Wears was born out of a desire to elevate the standard of Nigerian native wear, bringing world-class finishing to our rich cultural garments."
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Founded in the heart of Lagos, Bakish Wears caters to the modern African man who values his roots but demands contemporary excellence. We understand that an Agbada isn't just clothing; it's a mantle. A Senator suit isn't just an outfit; it's a presentation of character.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Craftsmanship */}
            <section className="py-24 bg-[#050505] border-y border-brand-brown/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl text-brand-gold font-serif">Mission & Vision</h2>
                            <p className="text-brand-cream/70 leading-relaxed">
                                To become the premier destination for luxury men's traditional fashion in Africa and the diaspora. We aim to export the elegance of Nigerian tailoring to the global stage, proving that indigenous fashion can compete with international haute couture.
                            </p>

                            <h2 className="text-3xl md:text-4xl text-brand-gold font-serif pt-8">Craftsmanship Focus</h2>
                            <ul className="space-y-4">
                                {[
                                    "Premium Fabrics: We source highest grade cashmere, wool, and authentic silk.",
                                    "Master Tailoring: Over 15 years of combined tailoring experience.",
                                    "Bespoke Embroideries: Hand-stitched detailing that lasts a lifetime.",
                                    "Perfect Fit Guarantee: Structured cuts that compliment the masculine form."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-brand-cream/70">
                                        <span className="text-brand-gold mr-3 mt-1">✦</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <img src="/images/agbada.png" className="w-full h-64 object-cover object-center mt-12" alt="Detail 1" />
                            <img src="/images/senator.png" className="w-full h-64 object-cover object-center" alt="Detail 2" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
