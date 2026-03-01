import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const phoneNumber = "2348000000000"; // Replace with actual number
    const defaultMessage = encodeURIComponent("Hello Bakish Wears, I would like to make an inquiry.");

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${defaultMessage}`, '_blank');
    };

    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer group hover:bg-[#20bd5a] transition-colors"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="fill-current" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-brand-black/90 text-white min-w-max px-3 py-1.5 rounded-sm text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Chat with us
            </span>
        </motion.button>
    );
};

export default WhatsAppButton;
