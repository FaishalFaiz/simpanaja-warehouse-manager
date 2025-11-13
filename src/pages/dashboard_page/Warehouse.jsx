import DataTable from '@/components/dashboard/DataTable.jsx';

export default function Warehouse() {
    return (
        <DataTable
            tableName="warehouses"
            title="Warehouse List"
            fields={[
                { name: "name", label: "Name" },
                { name: "location", label: "Location" },
                { name: "capacity", label: "Capacity" },
                { name: "note", label: "Note" },
            ]}
            deleteName="name"
        />
    );
}
