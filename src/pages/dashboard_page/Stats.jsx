import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient.js";

export default function Stats() {
    const [counts, setCounts] = useState({
        products: 0,
        warehouses: 0,
        orders: 0,
    })

    useEffect(() => {
        async function fetchCounts() {
            const { count: productCount } = await supabase
                .from('products')
                .select('*', { count: 'exact', head: true })

            const { count: warehouseCount } = await supabase
                .from('warehouses')
                .select('*', { count: 'exact', head: true })

            const { count: orderCount } = await supabase
                .from('purchase_order')
                .select('*', { count: 'exact', head: true })

            setCounts({
                products: productCount || 0,
                warehouses: warehouseCount || 0,
                orders: orderCount || 0
            })
        }

        fetchCounts()
    }, [])


    return (
        <div className="p-0 md:p-14">
            <h1 className="text-utama text-xl font-bold">Dashboard</h1>
            <div className="flex flex-row mt-5 gap-5 flex-wrap">
                <div className="card bg-base-100 card-xl w-96 shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="card-body">
                        <p>Product Total</p>
                        <h2 className="card-title">{`${counts.products} Product`}</h2>
                        <p>Total number of products stored across all warehouses.</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-xl w-96 shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="card-body">
                        <p>Warehouse Total</p>
                        <h2 className="card-title">{`${counts.warehouses} Warehouses`}</h2>
                        <p>Total number of warehouse locations currently available.</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-xl w-96 shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="card-body">
                        <p>Order Total</p>
                        <h2 className="card-title">{`${counts.orders} Orders`}</h2>
                        <p>Total number of orders processed from all warehouses.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}