import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"


const Layout = () => {
    return (
        <div className='flex bg-gradient-central h-screen bg-cover bg-no-repeat'>
            <Sidebar />
            <Outlet />
        </div>
    )
};

export default Layout