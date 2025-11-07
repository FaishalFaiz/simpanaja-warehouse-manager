import React from 'react'
import Logo from '@/assets/icons/simpanaja_logo.svg'
import PurchaseIcon from '@/assets/icons/cart_logo.svg'
import DashboardIcon from '@/assets/icons/dashboard_logo.svg'
import WarehouseIcon from '@/assets/icons/warehouse_logo.svg'
import MovementIcon from '@/assets/icons/movements_logo.svg'
import ProductIcon from '@/assets/icons/simpanaja_logo.svg'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="bg-utama h-screen px-10 flex flex-col gap-10 ">

            <ul className="menu menu-lg flex flex-col gap-7 p-0 rounded-box w-56">
                <li className="menu-title">
                    <Link to="/" className="inline-flex w-fit text-xl text-white gap-4 mt-10" href="/">
                        <img src={Logo} alt="SimpanAja Logo" />
                        SimpanAja
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                        <img src={DashboardIcon} />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/product">
                        <img src={ProductIcon} alt="Dashboard Icon" />
                        Product
                    </Link>
                </li>
                <li>
                    <Link to="/warehouse">
                        <img src={WarehouseIcon} alt="Dashboard Icon" />
                        Warehouse
                    </Link>
                </li>
                <li>
                    <Link to="/purchase-orders">
                        <img src={PurchaseIcon} alt="Dashboard Icon" />
                        Purchase Orders
                    </Link>
                </li>
                <li>
                    <Link to="/stock-movement">
                        <img src={MovementIcon} alt="Move Icon" />
                        Stock Movement
                    </Link>
                </li>
            </ul>

            <button className="btn btn-wide btn-outline" >Generate Supply Report</button>

        </div>
    )
}