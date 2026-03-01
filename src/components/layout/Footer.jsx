import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050505] pt-16 pb-8 border-t border-brand-brown/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <span className="font-serif text-3xl text-brand-gold tracking-wider block">BAKISH</span>
                        <p className="text-brand-cream/70 text-sm leading-relaxed max-w-xs">
                            Redefining native elegance for the modern African man. We specialize in premium tailored Agbada, Senator wears, and custom traditional outfits.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-white">Explore</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/collections" className="text-brand-cream/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">All Collections</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-brand-cream/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">About The Brand</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-brand-cream/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-brand-cream/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Size Guide</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-white">Categories</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/collections" className="text-brand-cream/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Agbada</Link>
                            </li>
                            <li>
                                <Link to="/collections" className="text-brand-cream/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Senator Wear</Link>
                            </li>
                            <li>
                                <Link to="/collections" className="text-brand-cream/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Kaftan</Link>
                            </li>
                            <li>
                                <Link to="/collections" className="text-brand-cream/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Wedding Collection</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-white">Reach Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-brand-cream/70 text-sm">
                                <MapPin size={20} className="text-brand-gold shrink-0 mt-0.5" />
                                <span>Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center space-x-3 text-brand-cream/70 text-sm">
                                <Phone size={20} className="text-brand-gold shrink-0" />
                                <span>+234 (0) 800 000 0000</span>
                            </li>
                            <li className="flex items-center space-x-3 text-brand-cream/70 text-sm">
                                <Mail size={20} className="text-brand-gold shrink-0" />
                                <span>hello@bakishwears.com</span>
                            </li>
                        </ul>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-brown/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-brand-brown/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-cream/50 tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Bakish Wears. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-brand-gold">Privacy Policy</Link>
                        <Link to="#" className="hover:text-brand-gold">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
