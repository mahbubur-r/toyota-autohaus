import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout