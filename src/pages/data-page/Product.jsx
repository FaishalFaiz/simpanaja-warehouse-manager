import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient.js";
import FormModal from "@/components/FormModal.jsx";
import DeleteModal from "@/components/DeleteModal.jsx";

export default function Product() {
    const [products, setProducts] = useState([]);

    // 🔹 Ambil data dari Supabase
    const fetchProducts = async () => {
        const { data, error } = await supabase
            .from("products")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) console.error("Gagal ambil data:", error);
        else setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // 🔹 Tambah data
    const handleProductSubmit = async (data) => {
        const { error } = await supabase.from("products").insert([data]);
        if (error) {
            console.error("Gagal tambah data:", error);
        } else {
            fetchProducts(); // refresh tabel
        }
    };

    // 🔹 Hapus data
    const handleDelete = async (id) => {
        const { error } = await supabase.from("products").delete().eq("id", id);
        if (error) {
            console.error("Gagal hapus data:", error);
        } else {
            fetchProducts(); // refresh tabel
        }
    };

    // 🔹 Field untuk form tambah produk
    const productFields = [
        { name: "sku", label: "SKU", required: true },
        { name: "name", label: "Nama Produk", required: true },
        { name: "stocks", label: "Stocks" },
        { name: "category", label: "Kategori" },
        { name: "brand", label: "Brand/Supplier" },
        { name: "warehouse", label: "Warehouse" },
    ];

    return (
        <div className="overflow-x-auto m-0 md:m-5 h-screen p-10 rounded-box border border-base-content/5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] text-black">
            <div className="flex justify-between mb-5">
                <h1 className="text-utama text-xl font-bold">Products</h1>
                <FormModal
                    title="Add Product"
                    fields={productFields}
                    onSubmit={handleProductSubmit}
                />
            </div>

            <table className="table">
                <thead>
                    <tr className="text-black bg-none">
                        <th>SKU</th>
                        <th>Product Name</th>
                        <th>Stocks</th>
                        <th>Category</th>
                        <th>Brand/Supplier</th>
                        <th>Warehouse</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.sku}</td>
                            <td>{product.name}</td>
                            <td>{product.stocks}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>{product.warehouse}</td>
                            <td>
                                <DeleteModal
                                    onDelete={() => handleDelete(product.id)}
                                    itemName={product.name}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {products.length === 0 && (
                <p className="text-center text-gray-400 mt-4">
                    Belum ada data produk.
                </p>
            )}
        </div>

    );
}
