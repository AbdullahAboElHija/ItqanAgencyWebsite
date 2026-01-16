import { useState } from 'react';
import api from '../../services/api';

const ProjectForm = ({ onSuccess, projectToEdit, onCancel }) => {
    const [formData, setFormData] = useState({
        titleEn: projectToEdit?.title?.en || '',
        titleAr: projectToEdit?.title?.ar || '',
        titleHe: projectToEdit?.title?.he || '',
        descEn: projectToEdit?.description?.en || '',
        descAr: projectToEdit?.description?.ar || '',
        descHe: projectToEdit?.description?.he || '',
        category: projectToEdit?.category || 'Web Development',
        liveUrl: projectToEdit?.liveUrl || '',
        githubUrl: projectToEdit?.githubUrl || '',
        image: projectToEdit?.images?.[0] || '',
        isFeatured: projectToEdit?.isFeatured || false
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const payload = {
            title: {
                en: formData.titleEn,
                ar: formData.titleAr,
                he: formData.titleHe
            },
            description: {
                en: formData.descEn,
                ar: formData.descAr,
                he: formData.descHe
            },
            category: formData.category,
            images: [formData.image], // Single image for now
            liveUrl: formData.liveUrl,
            githubUrl: formData.githubUrl,
            isFeatured: formData.isFeatured
        };

        try {
            if (projectToEdit) {
                await api.put(`/projects/${projectToEdit._id}`, payload);
            } else {
                await api.post('/projects', payload);
            }
            onSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to save project');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <h3 className="text-xl font-bold mb-4">{projectToEdit ? 'Edit Project' : 'Add New Project'}</h3>

            {error && <div className="text-red-500 bg-red-50 p-3 rounded">{error}</div>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Titles */}
                <div>
                    <label className="block text-sm font-medium">Title (EN)</label>
                    <input name="titleEn" value={formData.titleEn} onChange={handleChange} required className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Title (AR)</label>
                    <input name="titleAr" value={formData.titleAr} onChange={handleChange} required className="w-full border p-2 rounded text-right" dir="rtl" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Title (HE)</label>
                    <input name="titleHe" value={formData.titleHe} onChange={handleChange} required className="w-full border p-2 rounded text-right" dir="rtl" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Descriptions */}
                <div>
                    <label className="block text-sm font-medium">Description (EN)</label>
                    <textarea name="descEn" value={formData.descEn} onChange={handleChange} required className="w-full border p-2 rounded" rows="3" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Description (AR)</label>
                    <textarea name="descAr" value={formData.descAr} onChange={handleChange} required className="w-full border p-2 rounded text-right" dir="rtl" rows="3" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Description (HE)</label>
                    <textarea name="descHe" value={formData.descHe} onChange={handleChange} required className="w-full border p-2 rounded text-right" dir="rtl" rows="3" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium">Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded">
                        <option value="Web Development">Web Development</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="Data Solutions">Data Solutions</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Image URL</label>
                    <input name="image" value={formData.image} onChange={handleChange} className="w-full border p-2 rounded" placeholder="https://..." />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium">Live URL</label>
                    <input name="liveUrl" value={formData.liveUrl} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm font-medium">GitHub URL</label>
                    <input name="githubUrl" value={formData.githubUrl} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
            </div>

            <div className="flex items-center">
                <input
                    type="checkbox"
                    name="isFeatured"
                    checked={formData.isFeatured}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">Feature this project on Home/Portfolio</label>
            </div>

            <div className="flex justify-end space-x-3">
                <button type="button" onClick={onCancel} className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-50">Cancel</button>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-emerald-700 disabled:opacity-50"
                >
                    {loading ? 'Saving...' : 'Save Project'}
                </button>
            </div>
        </form>
    );
};

export default ProjectForm;
