import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import Cookies from 'js-cookie';

const DashboardSidebar = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
        Cookies.remove('accessToken')
    }

    return (
        <div className='sidebar__main'>
            <div className="flex flex-col items-center w-56 h-full overflow-hidden text-gray-700 bg-gray-100 ">
                <Link className="flex items-center w-full px-3 mt-3" to='/'>
                    <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                    <span className="ml-2 text-sm font-bold">Visit Site</span>
                </Link>
                <div className="w-full px-2">
                    <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
                        <Link to='/lateef-creation-dashboard' className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Dashboard</span>
                        </Link>
                        <Link to='/lateef-creation-dashboard/add-project' className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Add Project</span>
                        </Link>
                        <Link to='/lateef-creation-dashboard/test-project' className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Test Project</span>
                        </Link>
                    </div>
                </div>
                <a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="#">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <span className="ml-2 text-sm font-medium">{user.displayName}</span>
                        <div className="ml-2 text-sm font-medium" onClick={handleLogOut}>Logout</div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default DashboardSidebar;