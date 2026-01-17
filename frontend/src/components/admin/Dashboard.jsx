import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import { FiPlus } from 'react-icons/fi';

const Dashboard = () => {
    const { logout, user } = useAuth();
    const [projects, setProjects] = useState([]);
    const [view, setView] = useState('list'); // list, add, edit
    const [editingProject, setEditingProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const { data } = await api.get('/projects');
            setProjects(data);
        } catch (error) {
            console.error("Failed to fetch projects", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await api.delete(`/projects/${id}`);
                setProjects(projects.filter(p => p._id !== id)); // Immediate UI update
                alert('Project deleted successfully');
                return true;
            } catch (error) {
                console.error('Delete failed:', error);
                const msg = error.response?.data?.message || 'Failed to delete project. Check console for details.';
                alert(msg);
                return false;
            }
        }
        return false;
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setView('edit');
    };

    const handleSuccess = () => {
        fetchProjects();
        setView('list');
        setEditingProject(null);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600">Welcome, {user?.username}</span>
                            <button
                                onClick={logout}
                                className="text-red-600 hover:text-red-800 font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">

                    {/* Header Actions */}
                    {view === 'list' && (
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
                            <button
                                onClick={() => setView('add')}
                                className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-emerald-700 shadow-sm"
                            >
                                <FiPlus className="mr-2" /> Add Project
                            </button>
                        </div>
                    )}

                    {/* Content Area */}
                    {view === 'list' ? (
                        loading ? (
                            <div className="text-center py-10">Loading...</div>
                        ) : (
                            <ProjectList
                                projects={projects}
                                onDelete={handleDelete}
                                onEdit={handleEdit}
                            />
                        )
                    ) : (
                        <ProjectForm
                            onSuccess={handleSuccess}
                            onCancel={() => {
                                setView('list');
                                setEditingProject(null);
                            }}
                            onDelete={async (id) => {
                                const success = await handleDelete(id);
                                if (success) {
                                    setView('list');
                                    setEditingProject(null);
                                }
                            }}
                            projectToEdit={editingProject}
                        />
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
