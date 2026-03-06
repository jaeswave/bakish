import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group bg-[#0a0a0a] rounded-sm overflow-hidden border border-brand-brown/20 shadow-lg hover:border-brand-gold/50 transition-all duration-300 flex flex-col h-full"
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#111]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex items-center justify-center">
                    <Link
                        to="/contact" // Assuming contact page is used for orders as requested
                        className="border border-brand-gold text-brand-gold px-8 py-3 rounded-none uppercase tracking-widest text-sm font-semibold hover:bg-brand-gold hover:text-brand-black transition-colors"
                    >
                        Order Now
                    </Link>
                </div>
            </div>

            <div className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="font-serif text-lg md:text-xl text-white group-hover:text-brand-gold transition-colors leading-tight">{product.name}</h3>
                    <span className="text-brand-gold font-medium text-sm md:text-base whitespace-nowrap">{product.price}</span>
                </div>
                <p className="text-brand-cream/60 text-xs md:text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="mt-auto pt-2 flex items-center justify-between border-t border-brand-brown/10 lg:border-none lg:pt-0">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-brown font-semibold">{product.category}</span>
                    <Link to="/contact" className="lg:hidden text-brand-gold text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors bg-brand-gold/10 px-3 py-1.5 rounded-sm">
                        Order Now
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
