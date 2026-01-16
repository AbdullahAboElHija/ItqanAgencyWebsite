import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-light py-12 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">ITQAN AGENCY</h3>
                        <p className="text-gray-400 mb-4">
                            {t({
                                en: "Building digital excellence for businesses worldwide.",
                                ar: "نبني التميز الرقمي للشركات حول العالم.",
                                he: "בונים מצוינות דיגיטלית לעסקים ברחבי העולם."
                            })}
                        </p>
                        <p className="text-primary font-bold">itqanaiagency@gmail.com</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {year} Itqan Agency. {t({
                        en: "All rights reserved.",
                        ar: "جميع الحقوق محفوظة.",
                        he: "כל הזכויות שמורות."
                    })}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
