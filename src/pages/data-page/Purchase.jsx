import React from 'react'
import DataTable from '@/components/DataTable.jsx';

export default function Purchase() {
    return (
        <>
            <DataTable
                tableName="purchase_order"
                title="Purchase Log"
                fields={[
                    { name: "order_number", label: "Order Number" },
                    { name: "supplier_name", label: "Supplier Name" },
                    { name: "date", label: "Date", type:"date" },
                    { name: "total_items", label: "Total Items" },
                    { name: "status", label: "Status (in/out)" },
                ]}
                deleteName="order_number"
            />
        </>
    )
}