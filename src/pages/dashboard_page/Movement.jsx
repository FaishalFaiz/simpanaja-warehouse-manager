import DataTable from '@/components/dashboard/DataTable.jsx';

export default function Movement() {
    return (
        <>
            <DataTable
                tableName="stock_movements"
                title="Stock Movements"
                fields={[
                    { name: "sku", label: "SKU" },
                    { name: "movement_type", label: "Movement Type" },
                    { name: "quantity", label: "Quantity"  },
                    { name: "date", label: "Date", type: "date" },
                    { name: "note", label: "Note" },
                ]}
                deleteName="sku"
            />
        </>
    )
}