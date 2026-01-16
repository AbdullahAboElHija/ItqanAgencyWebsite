import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    const { t } = useLanguage();

    // Helper to safely get multilingual content
    const getTitle = () => project.title ? (typeof project.title === 'string' ? project.title : t(project.title)) : 'Untitled';
    const getDescription = () => project.description ? (typeof project.description === 'string' ? project.description : t(project.description)) : '';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
            <div className="relative h-48 overflow-hidden bg-gray-100">
                {project.images && project.images.length > 0 ? (
                    <img
                        src={project.images[0]}
                        alt={getTitle()}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        No Image
                    </div>
                )}
                {project.isFeatured && (
                    <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        FEATURED
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                    {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {getTitle()}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                    {getDescription()}
                </p>

                <div className="flex space-x-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-secondary hover:text-primary font-medium transition-colors"
                        >
                            <FiExternalLink className="mr-2" /> Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-secondary hover:text-primary font-medium transition-colors"
                        >
                            <FiGithub className="mr-2" /> Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
