import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useState } from 'react';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { language, changeLanguage, t, isRTL } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { name: { en: 'Home', ar: 'الرئيسية', he: 'דף הבית' }, path: '/' },
        { name: { en: 'Portfolio', ar: 'أعمالنا', he: 'תיק עבודות' }, path: '/portfolio' },
        { name: { en: 'Contact', ar: 'تواصل معنا', he: 'צור קשר' }, path: '/contact' },
    ];

    const languages = [
        { code: 'en', label: 'En' },
        { code: 'ar', label: 'عربي' },
        { code: 'he', label: 'עברית' },
    ];

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-primary tracking-tighter">
                        ITQAN<span className="text-secondary">.AGENCY</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-secondary hover:text-primary transition-colors font-medium"
                            >
                                {t(link.name)}
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-secondary hover:text-primary">
                                <FiGlobe className="w-5 h-5" />
                                <span className="uppercase text-sm font-bold">{language}</span>
                            </button>
                            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto border border-gray-100">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={clsx(
                                            "block w-full text-left px-4 py-2 text-sm hover:bg-gray-50",
                                            language === lang.code ? "text-primary font-bold" : "text-gray-700"
                                        )}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-secondary hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-gray-50 rounded-md"
                                >
                                    {t(link.name)}
                                </Link>
                            ))}
                            {/* Mobile Language Switcher */}
                            <div className="flex space-x-4 px-3 pt-4 border-t mt-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            changeLanguage(lang.code);
                                            setIsOpen(false);
                                        }}
                                        className={clsx(
                                            "px-3 py-1 text-sm rounded-full border",
                                            language === lang.code ? "bg-primary text-white border-primary" : "text-gray-600 border-gray-300"
                                        )}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
