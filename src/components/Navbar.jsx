import React from 'react';
import Logo from '@/assets/icons/simpanaja_logo.svg';
import Profile from '@/assets/profile_img.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar bg-utama shadow-sm px-5">
            <div className="navbar-start hidden md:inline-flex">
                <div className="avatar avatar-online">
                    <div className="w-8 rounded-full">
                        <img src={Profile} />
                    </div>
                </div>
            </div>
            <Link to="/" className="btn btn-ghost navbar-center">
                <img src={Logo} />
                <p className="text-lg">SimpanAja</p>
            </Link>
            <Link to="/dashboard" className="navbar-end flex gap-5">
                <p className="btn btn-outline">Dashboard</p>
            </Link>
        </nav>
    )
}