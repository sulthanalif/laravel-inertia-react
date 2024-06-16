import React, { useEffect, useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import toast from "react-hot-toast";
import PopupDelete from "@/Components/PopupDelete";

function UserIndex({ auth, users }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [id, setId] = useState(0);
    const [r, setR] = useState("");
    const { flash } = usePage().props;

    const [message, setMessage] = useState("");

    const handleShowConfirmation = (id) => {
        setShowConfirm(true);
        setId(id);
        setR("users");
        setMessage(toast.message);
    };

    useEffect(() => {
        flash.message &&
            toast.success(flash.message, {
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
            });
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-right"
                                    >
                                        <Link href={route("users.create")}>
                                            <PrimaryButton>
                                                Create
                                            </PrimaryButton>
                                        </Link>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.data.map((user, index) => (
                                    <tr key={user.id} className="border-t border-b border-gray-200 first:border-t last:border-b hover:bg-gray-100">
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-center">
                                                {index +1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div
                                                className={
                                                    user.roles[0].name ==
                                                    "admin"
                                                        ? "bg-green-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full text-center"
                                                        : user.roles[0].name ==
                                                          "writer"
                                                        ? "bg-blue-600 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full text-center"
                                                        : user.roles[0].name ==
                                                          "editor"
                                                        ? "bg-yellow-600 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full text-center"
                                                        : ""
                                                }
                                            >
                                                {user.roles[0].name}
                                            </div>
                                        </td>
                                        <td className="flex justify-end px-6 py-4 whitespace-nowrap">
                                            {auth.user.id !== user.id && (
                                                <>
                                                    <PrimaryButton className="mr-2">
                                                        Edit
                                                    </PrimaryButton>
                                                    <DangerButton
                                                        onClick={() =>
                                                            handleShowConfirmation(
                                                                user.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </DangerButton>
                                                </>
                                            )}
                                            {showConfirm && (
                                                <PopupDelete
                                                    id={id}
                                                    setShowConfirm={
                                                        setShowConfirm
                                                    }
                                                    r={r}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex items-center justify-center mt-4 mb-4">
                            <Pagination links={users.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default UserIndex;
