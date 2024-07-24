import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative h-screen">
            <div
                className={`fixed top-0 left-0 h-full bg-[#DFDCCA]/20 p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-700 ease-in-out z-40 border-black border-r-2`}
            >
                <button
                    className="absolute top-4 right-4 text-2xl"
                    onClick={toggleSidebar}
                >
                    {'<<'}
                </button>
                <nav className="font-victor italic flex flex-col mt-16">
                    <NavLink to="/my-workouts" className="hover:underline mb-4">
                        my workouts
                    </NavLink>
                    <NavLink to="/track-session" className="hover:underline mb-4">
                        start session
                    </NavLink>
                    <NavLink to="/session-history" className="hover:underline">
                        session history
                    </NavLink>
                </nav>
            </div>
            {!isOpen && (
                <div
                    className={`fixed top-0 transform ${!isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700 ease-in bg-[#DFDCCA]/20 p-4 text-2xl cursor-pointer z-50 h-screen border-black border-r-2`}
                    onClick={toggleSidebar}
                >
                    {'>>'}
                </div>
            )}
        </div>
    );
};


export default Sidebar