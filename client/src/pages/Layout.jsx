import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

const Layout = () => {
    return (
        <div className='flex bg-gradient-central h-screen bg-cover bg-no-repeat'>
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Layout