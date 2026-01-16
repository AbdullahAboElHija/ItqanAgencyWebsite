import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/admin/LoginForm';
import Dashboard from '../components/admin/Dashboard';

const Admin = () => {
    const { user, loading } = useAuth();

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );

    return user ? <Dashboard /> : <LoginForm />;
};

export default Admin;
