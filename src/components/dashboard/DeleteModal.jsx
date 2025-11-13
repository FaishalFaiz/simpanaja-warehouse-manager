import { useRef } from "react";

export default function DeleteModal({ onDelete, itemName }) {
    const modalRef = useRef(null);

    const openModal = () => modalRef.current?.showModal();
    const closeModal = () => modalRef.current?.close();

    const handleSubmit = (event) => {
        event.preventDefault();
        onDelete(); // Panggil fungsi hapus yang dikirim dari parent
        closeModal();
    };

    return (
        <>
            {/* Tombol untuk membuka modal */}
            <button className="btn btn-sm btn-outline btn-error" onClick={openModal}>
                Delete
            </button>

            {/* Modalnya */}
            <dialog ref={modalRef} className="modal">
                <form method="dialog" className="modal-box bg-white" onSubmit={handleSubmit}>
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={closeModal}
                    >
                        ✕
                    </button>

                    <h3 className="text-lg font-bold mb-4">Hapus Data Ini?</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        {itemName ? `Apakah kamu yakin ingin menghapus "${itemName}"?` : "Tindakan ini tidak bisa dibatalkan."}
                    </p>

                    <div className="modal-action">
                        <button type="button" className="btn" onClick={closeModal}>
                            Batal
                        </button>
                        <button type="submit" className="btn btn-error text-white">
                            Hapus
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
}
