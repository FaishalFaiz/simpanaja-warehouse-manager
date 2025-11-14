import AboutCard from '@/components/main/AboutCard.jsx'


export default function AboutSection() {

    return (
        <>
            <div className="flex flex-row flex-wrap gap-6 items-center justify-between w-4/5">
                <div>
                    <p className="text-utama text-2xl">About</p>
                    <h1 className="text-5xl md:text-7xl font-bold max-w-2xl">Solution for your <span className="text-utama">business</span> need.</h1>
                </div>
                <p className="max-w-lg  md:text-xl md:text-right">SimpanAja is a simple and smart stock management website that helps you track products, warehouses, and orders easily. Designed for efficiency and clarity, it lets you manage your inventory anytime, anywhere.</p>
            </div>

            <AboutCard />
        </>
    )
}