import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Collections', path: '/collections' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="font-serif text-2xl md:text-3xl text-brand-gold tracking-wider">BAKISH</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-10 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-brand-gold ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-cream/80'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/collections"
                            className="bg-brand-gold text-brand-black px-6 py-2 rounded-sm text-sm uppercase tracking-wider font-semibold hover:bg-white transition-colors"
                        >
                            Shop Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-gold hover:text-white transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-black shadow-2xl border-t border-brand-brown/30"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block text-lg uppercase tracking-wider font-medium py-3 border-b border-brand-brown/30 ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-cream/80'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-6">
                                <Link
                                    to="/collections"
                                    className="block w-full text-center bg-brand-gold text-brand-black py-4 rounded-sm uppercase tracking-wider font-semibold"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
