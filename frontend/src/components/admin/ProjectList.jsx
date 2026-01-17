import { FiEdit2, FiTrash2, FiExternalLink } from 'react-icons/fi';

const ProjectList = ({ projects, onEdit, onDelete }) => {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
                {projects.map((project) => (
                    <li key={project._id}>
                        <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                                <h4 className="text-lg font-bold text-primary truncate">
                                    {project.title.en}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {project.category} | {project.isFeatured ? 'Featured' : 'Standard'}
                                </p>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => onEdit(project)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                                >
                                    <FiEdit2 />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
                {projects.length === 0 && (
                    <li className="px-4 py-8 text-center text-gray-500">
                        No projects found. Add one to get started!
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ProjectList;
