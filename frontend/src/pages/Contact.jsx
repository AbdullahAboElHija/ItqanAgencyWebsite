import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import api from '../services/api';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Web Development',
        content: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await api.post('/messages', formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', service: 'Web Development', content: '' });
        } catch (error) {
            console.error("Failed to send message", error);
            // Even if API fails (e.g. no DB), show success for demo purposes if it's a network error?
            // For now let's show error unless it's just a demo requirement.
            // Let's assume we want to be honest, but if offline, maybe fail.
            // Actually, for the user's "WOW" factor, if backend is down, we might want to fake it?
            // No, let's keep it real but user friendly.
            if (!error.response) {
                // Network error or server down
                setStatus('error');
            } else {
                setStatus('error');
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                        {t({
                            en: "Get in Touch",
                            ar: "تواصل معنا",
                            he: "צור קשר"
                        })}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t({
                            en: "Ready to scale your business? Let's discuss your project.",
                            ar: "هل أنت مستعد لتوسيع نطاق عملك؟ دعنا نناقش مشروعك.",
                            he: "מוכן להרחיב את העסק שלך? בוא נדבר על הפרויקט שלך."
                        })}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-primary mb-6">
                                {t({ en: "Contact Information", ar: "معلومات الاتصال", he: "פרטי התקשרות" })}
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                                    <div className="bg-emerald-100 p-3 rounded-full text-primary shrink-0">
                                        <FiMail className="w-6 h-6" />
                                    </div>
                                    <div className="text-left rtl:text-right">
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Email</p>
                                        <p className="text-lg text-gray-800 font-medium">itqanaiagency@gmail.com</p>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/972505398835"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start space-x-4 rtl:space-x-reverse group hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors cursor-pointer"
                                >
                                    <div className="bg-emerald-100 p-3 rounded-full text-primary group-hover:bg-emerald-200 transition-colors shrink-0">
                                        <FiPhone className="w-6 h-6" />
                                    </div>
                                    <div className="text-left rtl:text-right">
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">WhatsApp</p>
                                        <p className="text-lg text-gray-800 font-medium group-hover:text-primary transition-colors" dir="ltr">+972 50 539 8835</p>
                                    </div>
                                </a>

                                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                                    <div className="bg-emerald-100 p-3 rounded-full text-primary shrink-0">
                                        <FiMapPin className="w-6 h-6" />
                                    </div>
                                    <div className="text-left rtl:text-right">
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Location</p>
                                        <p className="text-lg text-gray-800 font-medium">Haifa, Israel</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="bg-secondary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">
                                    {t({ en: "Why Wait?", ar: "لماذا تنتظر؟", he: "למה לחכות?" })}
                                </h3>
                                <p className="text-gray-300">
                                    {t({
                                        en: "Our engineers are ready to build your solution. First consultation is free.",
                                        ar: "مهندسونا مستعدون لبناء حلك. الاستشارة الأولى مجانية.",
                                        he: "המהנדסים שלנו מוכנים לבנות את הפתרון שלך. ייעוץ ראשון חינם."
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FiSend className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                                <p className="text-gray-600">We will get back to you within 24 hours.</p>
                                <button onClick={() => setStatus('idle')} className="mt-6 text-primary font-medium hover:underline">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="+1 234 567 890"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        >
                                            <option>Web Development</option>
                                            <option>AI Automation</option>
                                            <option>Data Solutions</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        name="content"
                                        value={formData.content}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                                        Something went wrong. Please try again or email us directly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                                >
                                    {status === 'submitting' ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            <FiSend /> <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
