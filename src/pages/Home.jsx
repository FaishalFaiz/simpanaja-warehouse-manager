import React from 'react'
import HeroImage from '@/assets/hero_image.svg'
import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import Stats from '@/components/Stats.jsx'
import { Link } from 'react-router-dom'
import '@/main.css'

export default function Home() {
    return (
        <>
            <Navbar />
            <header className="px-10  hero font-geologica min-h-screen">
                <div className=" w-full text-black flex flex-col justify-center items-center md:flex-row">
                    <div className="mr-10 gap-5 flex flex-col items-center md:items-start justify-center mb-10 md:mb-0">
                        <h1 className="text-4xl text-center md:text-start text-utama ">Kelola Stok Lebih Mudah, <span className=" font-bold">SimpanAja!</span></h1>
                        <p className="text-xl text-center md:text-start font-light text-gray-700 max-w-3/4 text-wrap">Pantau, simpan, dan atur stok barangmu tanpa ribet. Semuanya langsung dari satu tempat.</p>
                        <Link to="/dashboard" className="btn border-none bg-utama">Coba Sekarang!</Link>
                    </div>
                    <div>
                        <img src={HeroImage} />
                    </div>
                </div>
            </header>

            <Stats />

            <Footer />
        </>
    )
}
