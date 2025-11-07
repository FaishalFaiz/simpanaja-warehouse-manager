import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar.jsx'

export default function Dashboard() {
    return (
        <div className="flex items-start justify-start h-screen">
            <Sidebar />

            <main>
                <Outlet />
            </main>
        </div>
    )
}