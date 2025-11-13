import Navbar from '@/components/main/Navbar.jsx'
import Footer from '@/components/main/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}