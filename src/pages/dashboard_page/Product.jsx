import DataTable from '@/components/dashboard/DataTable.jsx';

export default function Product() {

    return (
        <>
            <DataTable
                tableName="products"
                title="Products List"
                fields={[
                    { name: "sku", label: "SKU", required: true },
                    { name: "name", label: "Product Name", required: true },
                    { name: "stocks", label: "Stocks" },
                    { name: "category", label: "Categori" },
                    { name: "brand", label: "Brand/Supplier" },
                    { name: "warehouse", label: "Warehouse" },
                ]}
                deleteName="name"
            />
        </>
    );
}
