import { Link } from 'react-router-dom'

export default function CTA() {

    return (
        <>
            <div className="w-full bg-utama text-center py-30 md:py-50">
                <h1 className="text-white text-2xl px-5 md:text-7xl max-w-5xl font-bold mx-auto">Looking for leading stock management platform for your business?</h1>
                <div className="mt-10">
                    <Link to="/dashboard" className="btn mr-4">Try Demo</Link>
                    <Link to="/dashboard" className="btn text-white btn-outline ">Contact Us</Link>
                </div>
            </div>
        </>
    )
}