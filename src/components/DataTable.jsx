import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient.js";
import FormModal from "@/components/FormModal.jsx";
import DeleteModal from "@/components/DeleteModal.jsx";

export default function DataTable({ tableName, fields, title, deleteName }) {
    const [rows, setRows] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    // 🔹 Ambil data dari Supabase
    const fetchData = async () => {
        const { data, error } = await supabase
            .from(tableName)
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Gagal ambil data:", error);
            setErrorMsg(error.message);
        } else {
            setRows(data);
            setErrorMsg(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, [tableName]);

    // 🔹 Tambah data
    const handleAddData = async (data) => {
        const { error } = await supabase.from(tableName).insert([data]);
        if (error) {
            console.error("Gagal tambah data:", error);
            setErrorMsg(error.message);
        } else {
            fetchData(); // refresh tabel
        }
    };

    // 🔹 Hapus data
    const handleDelete = async (id) => {
        const { error } = await supabase.from(tableName).delete().eq("id", id);
        if (error) {
            console.error("Gagal hapus data:", error);
            setErrorMsg(error.message);
        } else {
            fetchData();
        }
    };

    return (
        <div className="overflow-x-auto m-0 md:m-5 h-screen p-5 md:p-10 rounded-box border border-base-content/5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] text-black">
            <div className="flex justify-between mb-5">
                <h1 className="text-utama text-xl font-bold">{title}</h1>
                <FormModal
                    title={`Add ${title}`}
                    fields={fields}
                    onSubmit={handleAddData}
                />
            </div>

            {errorMsg && <p className="text-red-500 mb-3">{errorMsg}</p>}

            <table className="table">
                <thead>
                    <tr className="text-black bg-none">
                        {fields.map((f) => (
                            <th key={f.name}>{f.label}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id}>
                            {fields.map((f) => (
                                <td key={f.name}>{row[f.name]}</td>
                            ))}
                            <td>
                                <DeleteModal
                                    onDelete={() => handleDelete(row.id)}
                                    itemName={row[deleteName]} // 🔹 perbaikan di sini
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {rows.length === 0 && (
                <p className="text-center text-gray-400 mt-4">
                    No data available for this table.
                </p>
            )}
        </div>
    );
}
