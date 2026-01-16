import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import api from '../services/api';
import ProjectCard from '../components/portfolio/ProjectCard';

const Portfolio = () => {
    const { t } = useLanguage();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await api.get('/projects');
                setProjects(data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch projects", err);
                // Fallback for demo if backend fails
                setError('Failed to load projects. Using demo data.');
                setProjects([
                    {
                        _id: '1',
                        title: { en: "E-Commerce Demo", ar: "تجريبي", he: "הדגמה" },
                        description: { en: "A sample project to show layout.", ar: "مشروع تجريبي.", he: "פרויקט לדוגמה." },
                        category: "Web Development",
                        images: ["https://placehold.co/600x400"],
                        isFeatured: true
                    }
                ]);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const categories = ['All', 'Web Development', 'AI Automation', 'Data Solutions'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                        {t({
                            en: "Our Portfolio",
                            ar: "أعمالنا",
                            he: "תיק העבודות שלנו"
                        })}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t({
                            en: "Explore our latest projects and success stories.",
                            ar: "استكشف أحدث مشاريعنا وقصص نجاحنا.",
                            he: "חפש את הפרויקטים האחרונים שלנו וסיפורי ההצלחה."
                        })}
                    </p>
                </div>

                {/* Filter */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat
                                    ? 'bg-primary text-white shadow-lg transform -translate-y-1'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
