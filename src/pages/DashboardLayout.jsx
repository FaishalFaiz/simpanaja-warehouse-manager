import React from 'react'
import Sidebar from '@/components/Sidebar'
import { Outlet } from 'react-router-dom'
import MenuIcon from '@/assets/icons/menu.svg'

export default function Dashboard() {
    return (
        <div className="drawer lg:drawer-open">
            {/* Checkbox untuk toggle drawer */}
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* Bagian konten utama */}
            <div className="drawer-content flex flex-col min-h-screen">

                <div className="lg:hidden p-4">
                    <label htmlFor="dashboard-drawer" className="cursor-pointer">
                        <img src={MenuIcon} alt="SimpanAja Logo" className="w-8 h-8" />
                    </label>
                </div>

                {/* Isi halaman */}
                <main className="flex-1 p-4">
                    <Outlet />
                </main>
            </div>

            {/* Sidebar (drawer side) */}
            <div className="drawer-side">
                {/* Overlay untuk menutup drawer di mobile */}
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <Sidebar />
            </div>
        </div>
    )
}
