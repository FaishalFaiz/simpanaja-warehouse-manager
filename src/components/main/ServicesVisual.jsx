import ArrowIcon from '@/assets/icons/arrow_icon.svg'
import { Link } from 'react-router-dom'

export default function ServicesVisual() {

    return (
        <div className="flex flex-col md:flex-row w-4/5 gap-10 justify-center items-center mt-10">
            <div className="overflow-x-auto hidden md:block rounded-box border border-base-content/5 bg-base-100">
                <table className="table table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Warehouse</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Wireless Mouse</td>
                            <td>Main Warehouse</td>
                            <td>120</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>USB-C Charger</td>
                            <td>Branch Storage</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Mechanical Keyboard</td>
                            <td>Main Warehouse</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>HDMI Cable</td>
                            <td>Secondary Warehouse</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>LED Monitor</td>
                            <td>Main Warehouse</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Laptop Stand</td>
                            <td>Branch Storage</td>
                            <td>75</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>Bluetooth Speaker</td>
                            <td>Main Warehouse</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>Ethernet Cable</td>
                            <td>Secondary Warehouse</td>
                            <td>150</td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className="flex flex-col gap-5 max-w-xl">
                <h2 className="text-4xl font-bold">Data visualization to support tracking.</h2>
                <p className="max-w-4xl md:text-xl">SimpanAja helps you store, update, and display inventory    data with ease. With clear and organized insights, it supports better decision-making and smooth business planning.</p>
                <ul className="list">
                    <li className="list-row px-0 flex items-center">
                        <div className="bg-utama rounded-full w-fit p-2">
                            <img src={ArrowIcon} />
                        </div>
                        <div>
                            <p className="text-xl">Fast processing for efficient work</p>
                        </div>
                    </li>
                    <li className="list-row px-0 flex items-center">
                        <div className="bg-utama rounded-full w-fit p-2">
                            <img src={ArrowIcon} />
                        </div>
                        <div>
                            <p className="text-xl">Reliable tracking with accurate data</p>
                        </div>
                    </li>
                    <li className="list-row px-0 flex items-center">
                        <div className="bg-utama rounded-full w-fit p-2">
                            <img src={ArrowIcon} />
                        </div>
                        <div>
                            <p className="text-xl">Simple interface for easy use</p>
                        </div>
                    </li>

                </ul>
                <Link to="/dashboard" className="btn btn-primary w-fit">Learn More</Link>
            </div>
        </div>
    )
}