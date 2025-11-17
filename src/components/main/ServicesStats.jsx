import ArrowIcon from '@/assets/icons/arrow_icon.svg'
import { Link } from 'react-router-dom'

export default function ServicesVisual() {

    return (
        <div className="flex flex-col md:flex-row w-4/5 gap-10 justify-center items-center mt-10">
            <div className="flex flex-col gap-5 max-w-xl">
                <h2 className="text-4xl font-bold">Make confident decisions with clear data.</h2>
                <p className="max-w-4xl md:text-xl">
                    SimpanAja gives you clear, structured, and real-time inventory insights.
                    With better visibility of your data, you can make smarter decisions and plan your business with confidence.
                </p>

                <ul className="list">
                    <li className="list-row px-0 flex items-center">
                        <div className="bg-utama rounded-full w-fit p-2">
                            <img src={ArrowIcon} alt="arrow icon"/>
                        </div>
                        <div>
                            <p className="text-xl">Real-time insights for decisions</p>
                        </div>
                    </li>

                    <li className="list-row px-0 flex items-center">
                        <div className="bg-utama rounded-full w-fit p-2">
                            <img src={ArrowIcon} alt="arrow icon"/>
                        </div>
                        <div>
                            <p className="text-xl">Accurate metrics for reliable planning</p>
                        </div>
                    </li>

                    <li className="list-row px-0 flex items-center">
                        <div className="bg-utama rounded-full w-fit p-2">
                            <img src={ArrowIcon} alt="arrow icon" />
                        </div>
                        <div>
                            <p className="text-xl">Clear dashboards for easy monitoring</p>
                        </div>
                    </li>
                </ul>

                <Link to="/dashboard" className="btn btn-primary w-fit">Learn More</Link>
            </div>

            <div className="hidden md:flex flex-col gap-5 ">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className="card-body">
                        <p>Product Total</p>
                        <h2 className="card-title">120 Product</h2>
                        <p>Total number of products stored across all warehouses.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className="card-body">
                        <p>Warehouse Total</p>
                        <h2 className="card-title">16 Warehouse</h2>
                        <p>Total number of warehouse locations currently available.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className="card-body">
                        <p>Order Total</p>
                        <h2 className="card-title">320 Order</h2>
                        <p>Total number of orders processed from all warehouses.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}