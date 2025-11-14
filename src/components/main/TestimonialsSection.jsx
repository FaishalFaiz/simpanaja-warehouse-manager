

export default function TestimonialsSection() {

    return (
        <>
            <div className="flex flex-row flex-wrap gap-6 items-center justify-between w-4/5">
                <div>
                    <p className="text-utama text-2xl">Testimonials</p>
                    <h1 className="text-5xl md:text-7xl font-bold max-w-2xl">Sound from our <span className="text-utama">happy</span> partners.</h1>
                </div>
                <div className="flex flex-row mt-10 gap-5">
                    <div className="stats ">
                        <div className="stat">
                            <p className="stat-title text-xl">Total Page Views</p>
                            <p className="stat-value text-6xl">89,400</p>
                            <p className="stat-desc text-xl">21% more than last month</p>
                        </div>
                    </div>
                    <div className="stats ">
                        <div className="stat">
                            <p className="stat-title text-xl">Total Page Views</p>
                            <p className="stat-value text-6xl">89,400</p>
                            <p className="stat-desc text-xl">21% more than last month</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}