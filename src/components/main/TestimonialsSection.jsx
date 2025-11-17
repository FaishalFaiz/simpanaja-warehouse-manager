import ClientImage from '@/assets/client_img.png'

export default function TestimonialsSection() {

    return (
        <>
            <div className="flex flex-row flex-wrap gap-6 items-center justify-between w-4/5">
                <div>
                    <p className="text-utama text-2xl">Testimonials</p>
                    <h1 className="text-5xl md:text-7xl font-bold max-w-2xl">Sound from our <span className="text-utama">happy</span> partners.</h1>
                </div>
                <div className="flex flex-row flex-wrap mt-10 gap-5">
                    <div className="stats ">
                        <div className="stat px-0">
                            <p className="stat-title md:text-xl">Total Page Views</p>
                            <p className="stat-value md:text-6xl">100.000+</p>
                            <p className="stat-desc md:text-xl">21% more than last month</p>
                        </div>
                    </div>
                    <div className="stats ">
                        <div className="stat px-0">
                            <p className="stat-title md:text-xl">Total Client</p>
                            <p className="stat-value md:text-6xl">25+</p>
                            <p className="stat-desc md:text-xl">Around the world</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 w-4/5 md:p-5">
                <div className="flex flex-col gap-4 md:w-2/5">
                    <p className="text-xl">
                        “SimpanAja makes our data feel alive. All the metrics, reports, and stock movements show up clearly and in real-time. It's more than just a storage tool it's a system that speeds up decision-making and reduces errors.”
                    </p>
                    <div>
                        <h4 className="text-2xl font-bold">Faiz Faishal Nugroho</h4>
                        <p className="text-xl text-gray-700">CEO & Founder of CariAja</p>
                    </div>
                </div>
                <div className=" max-w-[300px]">
                    <img src={ClientImage} alt="Client Image" className="w-full rounded-xl" />
                </div>
            </div>
        </>
    )
}