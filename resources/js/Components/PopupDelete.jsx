import React from "react";
import PrimaryButton from "./PrimaryButton";
import DangerButton from "./DangerButton";
import { router } from "@inertiajs/react";
import toast from "react-hot-toast";

const PopupDelete = ({ setShowConfirm, id, r }) => {
    const handleDelete = () => {
        router.post(
            route(`${r}.destroy`, id),
            {
                _method: "DELETE",
            },
            {
                onSuccess: () => [
                    setShowConfirm(false),
                    toast.success("Deleted successfully", {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                    }),
                ],
            }
        );
    };

    return (
        <section className="w-full fixed left-0 top-0 flex flex-col justify-center items-center h-screen">
            <div
                className="w-full fixed bg-black/50 left-0 top-0 h-screen"
                onClick={() => setShowConfirm(false)}
            ></div>
            <div className="bg-white relative rounded-md flex-center">
                <header className="border-b py-2 px-6 font-bold text-xl">
                    Confirmation
                </header>
                <div className="p-6">
                    <h4>Are you sure you want to delete this data?</h4>

                    <div className="flex pt-6 space-x-4 justify-end">
                        <PrimaryButton onClick={handleDelete}>
                            Yes, I'm sure!
                        </PrimaryButton>
                        <DangerButton onClick={() => setShowConfirm(false)}>
                            No
                        </DangerButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopupDelete;
