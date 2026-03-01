import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '' }) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300";

    const variants = {
        primary: "bg-brand-gold text-brand-black hover:bg-white",
        outline: "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black",
        secondary: "bg-brand-brown text-white hover:bg-brand-brown/80"
    };

    const classes = `${baseStyles} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={classes}
        >
            {children}
        </motion.button>
    );
};

export default Button;
