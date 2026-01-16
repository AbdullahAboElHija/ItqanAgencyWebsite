import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Try to get language from localStorage or default to 'en'
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('itqan_lang');
        return saved || 'en';
    });

    useEffect(() => {
        localStorage.setItem('itqan_lang', language);

        // Update document direction and language attribute
        const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';
        document.dir = dir;
        document.documentElement.lang = language;
        document.documentElement.dir = dir; // Ensure HTML tag gets it too
    }, [language]);

    const value = {
        language,
        changeLanguage: (lang) => setLanguage(lang),
        dir: language === 'ar' || language === 'he' ? 'rtl' : 'ltr',
        isRTL: language === 'ar' || language === 'he',
        t: (obj) => {
            // Helper to get text from multilingual object {en: "", ar: "", he: ""}
            if (!obj) return "";
            if (typeof obj === 'string') return obj;
            return obj[language] || obj['en'] || "";
        }
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
