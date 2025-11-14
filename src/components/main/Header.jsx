import HeroImage from '@/assets/hero_image.webp'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <>
            <header className="hero mt-10 bg-base-200 min-h-[60vh]">
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold">Grow your business. <span className="text-utama">SimpanAja will keep all</span> your stocks.</h1>
                        <p className="py-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                        </p>
                        <Link to="/dashboard" className="btn btn-primary mr-4">Get Started</Link>
                        <Link to="/dashboard" className="btn btn-outline ">About Us</Link>
                    </div>
                </div>
            </header>
            <div class="px-10 md:px-30 mt-5 h-50 md:h-200">
                <img
                    src={HeroImage}
                    alt="Warehouse Building"
                    class="w-full h-full object-cover rounded-2xl shadow object-center"
                />
            </div>
        </>
    )
}