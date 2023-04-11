
import { Outlet, useLocation } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { useEffect } from 'react';

const Dashboard = () => {
    
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes('dashboard')) {
            const nav = document.getElementById('nav__menu');
            nav.style.display = 'none'
        }
        if (location.pathname.includes('dashboard')) {
            const nav = document.getElementById('footer');
            nav.style.display = 'none'
        }
    }, [])

    return (
        <div className='flex h-screen gap-6'>
        <DashboardSidebar />
        <div className='p-8 w-full h-screen ml-18 overflow-y-auto'>
            <div className="container mx-auto py-6">
                <Outlet />
            </div>
        </div>
    </div>
    );
};

export default Dashboard;