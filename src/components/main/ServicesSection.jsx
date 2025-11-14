import ServicesVisual from '@/components/main/ServicesVisual'
import ServicesStats from '@/components/main/ServicesStats'

export default function ServiceSection() {

    return (
        <>
            <div className="flex flex-col gap-6 mx-5 mt-20 items-center justify-top text-center">
                <p className="text-utama text-2xl">Our Service</p>
                <h1 className="text-5xl md:text-7xl font-bold max-w-2xl">Everything is <span className="text-utama">ready</span> to plan.</h1>
                <p className="max-w-4xl md:text-xl">SimpanAja helps you manage products, stock movement, and warehouses in one clean dashboard.
                    Built for simplicity and speed, it keeps your inventory organized and easy to control.</p>
            </div>

            <ServicesVisual />

            <ServicesStats />
        </>
    )
}