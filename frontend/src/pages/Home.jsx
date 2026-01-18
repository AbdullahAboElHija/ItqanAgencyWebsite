import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFileExcel, FaChartLine } from 'react-icons/fa';
import { FiClock, FiTrendingUp, FiDollarSign, FiChevronDown } from 'react-icons/fi';

const Home = () => {
    const { t } = useLanguage();

    const scrollToAttract = () => {
        const element = document.getElementById('attract-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className="min-h-screen">
            {/* Promotional Banner */}
            <div className={`bg-gradient-to-r from-accent to-red-500 text-white px-4 py-2 text-center text-sm font-bold relative transition-all duration-500`}>
                <span className="animate-pulse">
                    {t({
                        en: "🚀 GRAND OPENING: 75% OFF for the first 3 projects only!",
                        ar: "🚀 افتتاح كبير: خصم 75٪ لأول 3 مشاريع فقط!",
                        he: "🚀 פתיחה חגיגית: 75% הנחה ל-3 הפרויקטים הראשונים בלבד!"
                    })}
                </span>
            </div>

            {/* Hero Section */}
            <div
                className="min-h-[calc(100vh-40px)] flex items-center justify-center relative overflow-hidden"
                style={{
                    backgroundColor: '#f8fafc',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%23cbd5e1' fill-opacity='0.4'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35 19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            >
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className={`text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-8 ${useLanguage().language === 'ar' ? 'leading-[1.6] py-6' : 'leading-tight'}`}>
                            {t({
                                en: "Automate Operations. Multiply Revenue. Scale with Confidence.",
                                ar: "أتمتة العمليات. ضاعف الأرباح. انطلق بثقة.",
                                he: "אוטומציה של פעולות. הכפל את ההכנסות. צמח בביטחון."
                            })}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            {t({
                                en: "We are Software Engineers building custom AI & Web solutions designed to save you hours every day and bring more customers to your door.",
                                ar: "نحن مهندسو برمجيات نبني حلول الذكاء الاصطناعي والويب المخصصة لتوفير وقتك يومياً وجلب المزيد من العملاء.",
                                he: "אנו מהנדסי תוכנה הבונים פתרונות AI ואינטרנט מותאמים אישית שנועדו לחסוך לך שעות בכל יום ולהביא יותר לקוחות לעסק שלך."
                            })}
                        </p>
                        <a href="/contact" className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                            {t({
                                en: "Get Started Now",
                                ar: "ابدأ الآن",
                                he: "התחל עכשיו"
                            })}
                        </a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 10 }}
                    transition={{
                        delay: 1,
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    onClick={scrollToAttract}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-gray-400 hover:text-primary transition-colors flex flex-col items-center gap-1 group"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">
                        {t({ en: "Scroll", ar: "تصفح", he: "גלול" })}
                    </span>
                    <FiChevronDown className="text-2xl" />
                </motion.div>
            </div>

            {/* attract section*/}
            <div id="attract-section" className="bg-secondary text-white py-24 overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                                {t({
                                    en: "Stop Trading Your Hours for Repetitive Tasks",
                                    ar: "توقف عن استبدال ساعاتك بالمهام المتكررة",
                                    he: "תפסיק להחליף את השעות שלך במשימות שחוזרות על עצמן"
                                })}
                            </h2>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                                {t({
                                    en: "Our AI systems don't just work; they scale your business while you focus on what matters. Win back 20+ hours a week and watch your revenue grow.",
                                    ar: "أنظمة الذكاء الاصطناعي لدينا لا تعمل فقط؛ بل توسع نطاق عملك بينما تركز على ما يهم. استعد أكثر من 20 ساعة أسبوعياً وشاهد أرباحك تنمو.",
                                    he: "מערכות ה-AI שלנו לא רק עובדות; הן מגדילות את העסק שלך בזמן שאתה מתרכז במה שחשוב. החזר לעצמך 20+ שעות בשבוע וראה את ההכנסות שלך גדלות."
                                })}
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <div className="bg-white/10 p-6 rounded-2xl flex-1 min-w-[200px] border border-white/10">
                                    <FiClock className="text-4xl text-primary mb-4" />
                                    <h4 className="text-3xl font-bold text-white mb-2">20+</h4>
                                    <p className="text-gray-400">{t({ en: "Hours Saved Weekly", ar: "ساعة موفرة أسبوعياً", he: "שעות שנחסכו בשבוע" })}</p>
                                </div>
                                <div className="bg-white/10 p-6 rounded-2xl flex-1 min-w-[200px] border border-white/10">
                                    <FiTrendingUp className="text-4xl text-accent mb-4" />
                                    <h4 className="text-3xl font-bold text-white mb-2">40%</h4>
                                    <p className="text-gray-400">{t({ en: "Operational Savings", ar: "توفير تشغيلي", he: "חיסכון תפעולי" })}</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={0}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-3xl border border-primary/20 self-end"
                            >
                                <FiDollarSign className="text-5xl text-primary mb-4" />
                                <h3 className="text-2xl font-bold mb-2">
                                    {t({ en: "Multiply Revenue", ar: "ضاعف الأرباح", he: "הכפל הכנסות" })}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {t({
                                        en: "Redirect manual efforts to sales and customer expansion.",
                                        ar: "إعادة توجيه الجهود اليدوية نحو المبيعات وجذب العملاء.",
                                        he: "הפנה מאמצים ידניים למכירות ולהתרחבות לקוחות."
                                    })}
                                </p>
                            </motion.div>
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={1}
                                viewport={{ once: true }}
                                className="bg-white/5 p-8 rounded-3xl border border-white/10"
                            >
                                <div className="w-12 h-12 bg-accent rounded-full mb-4 animate-bounce"></div>
                                <h3 className="text-2xl font-bold mb-2">
                                    {t({ en: "Scale Instantly", ar: "توسع فوراً", he: "צמח באופן מיידי" })}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {t({
                                        en: "AI systems scale with you, handling 1 or 1,000 customers seamlessly.",
                                        ar: "أنظمة الذكاء الاصطناعي تتوسع معك، تتعامل مع عميل واحد أو 1,000 عميل بسلاسة.",
                                        he: "מערכות ה-AI צומחות איתך, ומטפלות בלקוח אחד או ב-1,000 לקוחות בצורה חלקה."
                                    })}
                                </p>
                            </motion.div>
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={2}
                                viewport={{ once: true }}
                                className="bg-white/5 p-8 rounded-3xl border border-white/10 col-span-2 mt-4"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="h-2 flex-1 bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            className="h-full bg-primary"
                                        ></motion.div>
                                    </div>
                                    <span className="text-primary font-bold">
                                        {t({
                                            en: "85% Faster ROI",
                                            ar: "عائد استثمار أسرع بنسبة 85٪",
                                            he: "החזר השקעה מהיר יותר ב-85%"
                                        })}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mt-4">
                                    {t({
                                        en: "Join Itqan Agency and watch your business transform from manual to magical.",
                                        ar: "انضم إلى وكالة إتقان وشاهد عملك يتحول من اليدوي إلى السحري.",
                                        he: "הצטרף לסוכנות איתקאן וראה את העסק שלך הופך מידני לקסום."
                                    })}
                                </p>
                            </motion.div>

                            {/* Decorative Blur */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-50 py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
                        {t({
                            en: "Our Expertise",
                            ar: "خبراتنا",
                            he: "המומחיות שלנו"
                        })}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Service 1 */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={0}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="text-5xl mb-6">💻</div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">
                                {t({
                                    en: "Web Development",
                                    ar: "تطوير الويب",
                                    he: "פיתוח אתרים"
                                })}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t({
                                    en: "High-converting websites that turn visitors into paying customers.",
                                    ar: "مواقع ويب عالية التحويل تحول الزوار إلى عملاء دافعين.",
                                    he: "אתרים בעלי יחס המרה גבוה ההופכים מבקרים ללקוחות משלמים."
                                })}
                            </p>
                        </motion.div>
                        {/* Service 2 */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="text-5xl mb-6">🤖</div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">
                                {t({
                                    en: "AI Automation",
                                    ar: "أتمتة الذكاء الاصطناعي",
                                    he: "אוטומציה ב-AI"
                                })}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t({
                                    en: "24/7 Digital Employees that handle support and sales while you sleep.",
                                    ar: "موظفون رقميون يعملون 24/7 لإدارة الدعم والمبيعات أثناء نومك.",
                                    he: "עובדים דיגיטליים 24/7 שמטפלים בתמיכה ומכירות בזמן שאתה ישן."
                                })}
                            </p>
                        </motion.div>
                        {/* Service 3 */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="text-5xl mb-6">📊</div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">
                                {t({
                                    en: "Data Solutions",
                                    ar: "حلول البيانات",
                                    he: "פתרונות נתונים"
                                })}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t({
                                    en: "Insights that help you cut costs and spot new revenue opportunities.",
                                    ar: "رؤى تساعدك على خفض التكاليف واكتشاف فرص إيرادات جديدة.",
                                    he: "תובנות שעוזרות לך לקצץ בעלויות ולזהות הזדמנויות הכנסה חדשות."
                                })}
                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>

            {/* Solutions Showcase Section */}
            <div className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4 text-secondary">
                        {t({
                            en: "Stop Wasting Time on Repetitive Tasks",
                            ar: "توقف عن إهدار الوقت في المهام المتكررة",
                            he: "תפסיק לבזבז זמן על משימות שחוזרות על עצמן"
                        })}
                    </h2>
                    <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
                        {t({
                            en: "We don't just write code. We solve expensive business problems.",
                            ar: "نحن لا نكتب الكود فقط. نحن نحل مشاكل الأعمال المكلفة.",
                            he: "אנחנו לא רק כותבים קוד. אנחנו פותרים בעיות עסקיות יקרות."
                        })}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: AI Automation */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={0}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-green-200 transition-colors relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FaWhatsapp className="text-8xl text-green-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                                    <FaWhatsapp className="text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-secondary">
                                    {t({
                                        en: "The 24/7 Salesman",
                                        ar: "رجل المبيعات 24/7",
                                        he: "איש המכירות 24/7"
                                    })}
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                                        <p className="text-sm text-red-700 font-medium flex items-start">
                                            <span className="mr-2 rtl:ml-2">❌</span>
                                            {t({
                                                en: "Problem: Missed calls and slow replies lose you customers.",
                                                ar: "المشكلة: المكالمات الفائتة والردود البطيئة تفقدك العملاء.",
                                                he: "בעיה: שיחות שלא נענו ותגובות איטיות גורמות לך לאבד לקוחות."
                                            })}
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                        <p className="text-sm text-green-700 font-medium flex items-start">
                                            <span className="mr-2 rtl:ml-2">✅</span>
                                            {t({
                                                en: "Solution: A WhatsApp AI Bot that answers FAQs, books appointments, and closes deals instantly.",
                                                ar: "الحل: بوت واتساب ذكي يجيب على الأسئلة، يحجز المواعيد، ويغلق الصفقات فوراً.",
                                                he: "פתרון: בוט וואטסאפ חכם שעונה על שאלות נפוצות, קובע פגישות וסוגר עסקאות באופן מיידי."
                                            })}
                                        </p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-200">
                                        <p className="font-bold text-primary">
                                            {t({
                                                en: "Result: Zero missed leads. 100% response rate.",
                                                ar: "النتيجة: صفر عملاء مفقودين. معدل استجابة 100٪.",
                                                he: "תוצאה: אפס לידים פספסים. 100% שיעור תגובה."
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Workflow Automation */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-colors relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FaFileExcel className="text-8xl text-blue-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                    <FaFileExcel className="text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-secondary">
                                    {t({
                                        en: "The Auto-Pilot Admin",
                                        ar: "المسؤول الآلي",
                                        he: "מנהל המשרד האוטומטי"
                                    })}
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                                        <p className="text-sm text-red-700 font-medium flex items-start">
                                            <span className="mr-2 rtl:ml-2">❌</span>
                                            {t({
                                                en: "Problem: Drowning in manual data entry and excel sheets?",
                                                ar: "المشكلة: الغرق في إدخال البيانات يدوياً وجداول الإكسل؟",
                                                he: "בעיה: טובע בהזנת נתונים ידנית וגיליונות אקסל?"
                                            })}
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                        <p className="text-sm text-blue-700 font-medium flex items-start">
                                            <span className="mr-2 rtl:ml-2">✅</span>
                                            {t({
                                                en: "Solution: We connect your email, CRM, and invoices. Everything updates automatically.",
                                                ar: "الحل: نربط بريدك الإلكتروني، CRM، والفواتير. كل شيء يتم تحديثه تلقائياً.",
                                                he: "פתרון: אנו מחברים את האימייל, ה-CRM והחשבוניות שלך. הכל מתעדכן אוטומטית."
                                            })}
                                        </p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-200">
                                        <p className="font-bold text-primary">
                                            {t({
                                                en: "Result: Save 20+ hours of manual work per week.",
                                                ar: "النتيجة: توفير أكثر من 20 ساعة عمل يدوي أسبوعياً.",
                                                he: "תוצאה: חסוך מעל 20 שעות עבודה ידנית בשבוע."
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Data Intelligence */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-purple-200 transition-colors relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FaChartLine className="text-8xl text-purple-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                                    <FaChartLine className="text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-secondary">
                                    {t({
                                        en: "The Profit Radar",
                                        ar: "رادار الأرباح",
                                        he: "רדאר הרווחים"
                                    })}
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                                        <p className="text-sm text-red-700 font-medium flex items-start">
                                            <span className="mr-2 rtl:ml-2">❌</span>
                                            {t({
                                                en: "Problem: Guessing which products or ads are working?",
                                                ar: "المشكلة: التخمين أي المنتجات أو الإعلانات تعمل؟",
                                                he: "בעיה: מנחש אילו מוצרים או מודעות עובדים?"
                                            })}
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                        <p className="text-sm text-purple-700 font-medium flex items-start">
                                            <span className="mr-2 rtl:ml-2">✅</span>
                                            {t({
                                                en: "Solution: Custom Dashboards that track real profit in real-time.",
                                                ar: "الحل: لوحات تحكم مخصصة تتبع الأرباح الحقيقية في الوقت الفعلي.",
                                                he: "פתרון: דשבורדים מותאמים אישית שעוקבים אחר רווח אמיתי בזמן אמת."
                                            })}
                                        </p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-200">
                                        <p className="font-bold text-primary">
                                            {t({
                                                en: "Result: Data-driven decisions that increase net profit.",
                                                ar: "النتيجة: قرارات مبنية على البيانات تزيد صافي الربح.",
                                                he: "תוצאה: החלטות מבוססות נתונים שמגדילות את הרווח הנקי."
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-secondary text-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
                    >
                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                {t({
                                    en: "The Hybrid Team Advantage",
                                    ar: "ميزة الفريق الهجين",
                                    he: "יתרון הצוות ההיברידי"
                                })}
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                                {t({
                                    en: "Enterprise-grade engineering quality at startup-friendly prices.",
                                    ar: "جودة هندسية بمستوى المؤسسات الكبرى بأسعار مناسبة للشركات الناشئة.",
                                    he: "איכות הנדסית ברמת ארגונים גדולים במחירים ידידותיים לסטארטאפים."
                                })}
                            </p>
                            <a href="/contact" className="inline-block bg-white text-secondary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                {t({
                                    en: "Work With Us",
                                    ar: "اعمل معنا",
                                    he: "עבוד איתנו"
                                })}
                            </a>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export default Home;
