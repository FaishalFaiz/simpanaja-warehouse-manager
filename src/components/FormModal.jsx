import React, { useRef } from "react";

export default function FormModal({ title, fields, onSubmit }) {
    const modalRef = useRef(null);
    const formRef = useRef();

    const openModal = () => {
        modalRef.current?.showModal()
        formRef.current.reset();
    };
    const closeModal = () => modalRef.current?.close();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = {};

        // Ambil semua field value
        fields.forEach(field => {
            data[field.name] = form[field.name].value;
        });

        onSubmit(data);
        closeModal();
    };

    return (
        <>
            {/* Tombol Modal */}
            <button className="btn btn-sm md:btn  btn-primary" onClick={openModal}>
                + Add Data
            </button>

            {/* Modalnya */}
            <dialog ref={modalRef} className="modal">
                <form method="dialog" className="modal-box bg-white" onSubmit={handleSubmit} ref={formRef}>
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={closeModal}
                    >
                        ✕
                    </button>
                    <h3 className="text-lg font-bold mb-4">{title}</h3>

                    <div className="space-y-3">
                        {fields.map((field) => (
                            <div className="form-control " key={field.name}>
                                <label className="label ">
                                    <span className="label-text">{field.label}</span>
                                </label>
                                <input
                                    type={field.type || "text"}
                                    name={field.name}
                                    placeholder={field.placeholder || ""}
                                    className="input bg-white border-gray-200 w-full"
                                    required={field.required}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="modal-action">
                        <button type="button" className="btn" onClick={closeModal}>
                            Batal
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Simpan
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
}
