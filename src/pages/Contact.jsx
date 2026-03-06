import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert("Inquiry submitted successfully. A representative will reach out to you shortly.");
    };

    return (
        <div className="pt-24 min-h-screen bg-brand-black pb-24">
            {/* Header */}
            <div className="py-12 md:py-16 text-center border-b border-brand-brown/20 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl text-brand-gold mb-4 font-serif"
                >
                    Get In Touch
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-brand-cream/80 text-lg max-w-2xl mx-auto"
                >
                    Book an appointment, request a custom measurement, or ask about our ready-to-wear collections.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

                    {/* Contact Info container */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-3xl font-serif text-white mb-6">Contact Information</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-white font-medium mb-1">Our Atelier</h4>
                                        <p className="text-brand-cream/70">123 Fashion Avenue,<br />Victoria Island, Lagos, Nigeria</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-white font-medium mb-1">Phone</h4>
                                        <p className="text-brand-cream/70">+234 (0) 800 000 0000</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-white font-medium mb-1">Email</h4>
                                        <p className="text-brand-cream/70">hello@bakishwears.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-brown/20">
                            <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 bg-[#050505] border border-brand-brown/20 hover:border-[#25D366] group transition-colors">
                                <MessageCircle size={32} className="text-[#25D366] mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-sm uppercase tracking-widest text-[#25D366]">WhatsApp</span>
                            </a>
                            <a href="#" className="flex flex-col items-center justify-center p-6 bg-[#050505] border border-brand-brown/20 hover:border-[#E1306C] group transition-colors">
                                <Instagram size={32} className="text-[#E1306C] mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-sm uppercase tracking-widest text-[#E1306C]">Instagram</span>
                            </a>
                            <a href="#book" className="flex flex-col items-center justify-center p-6 bg-[#050505] border border-brand-brown/20 hover:border-brand-gold group transition-colors">
                                <Calendar size={32} className="text-brand-gold mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-sm uppercase tracking-widest text-brand-gold text-center">Book Fitting</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#050505] p-8 md:p-10 border border-brand-brown/20"
                        id="book"
                    >
                        <h2 className="text-3xl font-serif text-white mb-2">Send an Inquiry</h2>
                        <p className="text-brand-cream/60 mb-8 text-sm">Fill out the form below to request a quote, book a fitting, or submit your measurements.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-brand-cream/80 text-sm mb-2 font-medium tracking-wide">First Name</label>
                                    <input type="text" required className="w-full bg-brand-black border border-brand-brown/30 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="e.g. Adeolu" />
                                </div>
                                <div>
                                    <label className="block text-brand-cream/80 text-sm mb-2 font-medium tracking-wide">Last Name</label>
                                    <input type="text" required className="w-full bg-brand-black border border-brand-brown/30 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="e.g. Adeleke" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-brand-cream/80 text-sm mb-2 font-medium tracking-wide">Email Address</label>
                                    <input type="email" required className="w-full bg-brand-black border border-brand-brown/30 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="you@example.com" />
                                </div>
                                <div>
                                    <label className="block text-brand-cream/80 text-sm mb-2 font-medium tracking-wide">Phone Number</label>
                                    <input type="tel" className="w-full bg-brand-black border border-brand-brown/30 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="+234..." />
                                </div>
                            </div>

                            <div>
                                <label className="block text-brand-cream/80 text-sm mb-2 font-medium tracking-wide">Inquiry Type</label>
                                <select className="w-full bg-brand-black border border-brand-brown/30 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Custom Order (Agbada)</option>
                                    <option>Custom Order (Senator / Kaftan)</option>
                                    <option>Wedding Package Details</option>
                                    <option>Book a Physical Fitting</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-brand-cream/80 text-sm mb-2 font-medium tracking-wide">Message details</label>
                                <textarea rows="5" required className="w-full bg-brand-black border border-brand-brown/30 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Provide more details about your inquiry or paste your measurements here..."></textarea>
                            </div>

                            <div className="pt-2">
                                <Button type="submit" variant="primary" className="w-full justify-center">
                                    Submit Request
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
