import React from 'react'
import Logo from '@/assets/icons/simpanaja_logo.svg'
import PurchaseIcon from '@/assets/icons/cart_logo.svg'
import DashboardIcon from '@/assets/icons/dashboard_logo.svg'
import WarehouseIcon from '@/assets/icons/warehouse_logo.svg'
import MovementIcon from '@/assets/icons/movements_logo.svg'
import ProductIcon from '@/assets/icons/simpanaja_logo.svg'

export default function Dashboard() {
    return (
        <div className="flex items-start justify-start h-screen">
            <div className="bg-utama h-screen px-10 flex flex-col gap-10 ">
                <a className="inline-flex w-fit gap-4 items-center mt-10" href="/">
                    <img src={Logo} alt="SimpanAja Logo" />
                    <h1 className="text-lg font-bold">SimpanAja</h1>
                </a>
                <a className="text-md inline-flex items-center p-2 hover:bg-aksen">
                    <img src={DashboardIcon} alt="Dashboard Icon" className="inline-block mr-2" />
                    Dashboard
                </a>
                <a className="text-md inline-flex items-center p-2 hover:bg-aksen">
                    <img src={ProductIcon} alt="Dashboard Icon" className="inline-block mr-2" />
                    Product
                </a>
                <a className="text-md inline-flex items-center p-2 hover:bg-aksen">
                    <img src={WarehouseIcon} alt="Dashboard Icon" className="inline-block mr-2" />
                    Warehouse
                </a>
                <a className="text-md inline-flex items-center p-2 hover:bg-aksen">
                    <img src={PurchaseIcon} alt="Dashboard Icon" className="inline-block mr-2" />
                    Purchase Orders
                </a>
                <a className="text-md inline-flex items-center side-item p-2 hover:bg-aksen">
                    <img src={MovementIcon} alt="Dashboard Icon" className="inline-block mr-2" />
                    Stock Movements
                </a>
            </div>
        </div>
    )
}