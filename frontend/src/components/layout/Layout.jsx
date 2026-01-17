import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Layout = () => {
    const { language } = useLanguage();

    const fontClass = {
        ar: 'font-arabic',
        he: 'font-heebo',
        en: 'font-sans'
    }[language] || 'font-sans';

    return (
        <div className={`flex flex-col min-h-screen ${fontClass}`}>
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
