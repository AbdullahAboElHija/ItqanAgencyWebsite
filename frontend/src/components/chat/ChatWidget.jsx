import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { BsChatDotsFill, BsSendFill } from 'react-icons/bs';
import api from '../../services/api';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hello! I am Itqan Bot. How can I help you today? \n\nWe currently have a special offer: 75% OFF for our first 3 clients!',
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        const userMessage = { role: 'user', content: message };
        setMessages((prev) => [...prev, userMessage]);
        setMessage('');
        setIsLoading(true);

        try {
            const history = messages.slice(-5); // Send last 5 messages for context
            const { data } = await api.post('/chat', { message, history });

            setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
        } catch (error) {
            console.error('Chat Error:', error);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Sorry, I am having some trouble connecting. Please try again later or email us at itqanaiagency@gmail.com.' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const isRTL = (text) => {
        // Basic Arabic/Hebrew character range detection
        const rtlChars = /[\u0600-\u06FF\u0590-\u05FF]/;
        return rtlChars.test(text);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-secondary p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-xl font-bold">
                                    I
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Itqan Bot</h3>
                                    <p className="text-[10px] text-gray-300">AI Sales Representative</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/10 p-2 rounded-full transition-colors"
                            >
                                <IoMdClose size={24} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg, index) => {
                                const rtl = isRTL(msg.content);
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        key={index}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl shadow-sm text-sm whitespace-pre-wrap ${msg.role === 'user'
                                                ? 'bg-primary text-white rounded-tr-none'
                                                : 'bg-white text-secondary border border-gray-100 rounded-tl-none'
                                                }`}
                                            style={{ direction: rtl ? 'rtl' : 'ltr', textAlign: rtl ? 'right' : 'left' }}
                                        >
                                            {msg.content}
                                        </div>
                                    </motion.div>
                                );
                            })}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white text-secondary border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Ask about our services..."
                                    className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-primary text-sm transition-all"
                                    dir="auto"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !message.trim()}
                                    className="absolute right-2 p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors disabled:opacity-50"
                                >
                                    <BsSendFill size={20} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="chat-widget-button w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:bg-primary/90 transition-all"
            >
                {isOpen ? <IoMdClose size={28} /> : <BsChatDotsFill size={28} />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
