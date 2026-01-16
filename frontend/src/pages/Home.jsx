import { useLanguage } from '../context/LanguageContext';

const Home = () => {
    const { t } = useLanguage();

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
            <div className="container mx-auto px-4 pt-16 pb-24 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-8 leading-tight">
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
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
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
                        </div>
                        {/* Service 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
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
                        </div>
                        {/* Service 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-secondary text-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
