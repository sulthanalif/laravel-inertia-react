import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PopupDelete from "@/Components/PopupDelete";

function PostIndex({ auth, posts }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [id, setId] = useState(0);
    const { flash } = usePage().props;

    const handleShowConfirmation = (id) => {
        setShowConfirm(true);
        setId(id);
        // console.log(id);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Posts
                </h2>
            }
        >
            <Head title="Posts" />

            {flash.message && (
                <div
                    className="max-w-7xl mx-auto bg-green-500 text-white p-2 mt-4 rounded flash-message"
                    style={{
                        transition: "opacity 1s",
                        opacity: 1,
                    }}
                >
                    {flash.message}

                    {setTimeout(() => {
                        const messageElement =
                            document.querySelector(".flash-message");
                        messageElement.remove();
                    }, 5000)}

                    <button
                        className="float-right text-white"
                        onClick={() => {
                            const messageElement =
                                document.querySelector(".flash-message");
                            messageElement.style.opacity = 0;
                        }}
                    ></button>
                </div>
            )}

            {flash.errors && (
                <div
                    className="max-w-7xl mx-auto bg-red-500 text-white p-2 mt-4 rounded flash-message"
                    style={{
                        transition: "opacity 1s",
                        opacity: 1,
                    }}
                >
                    {flash.errors}
                    <button
                        className="float-right text-white"
                        onClick={() => {
                            const messageElement =
                                document.querySelector(".flash-message");
                            messageElement.style.opacity = 0;
                        }}
                    ></button>

                    {setTimeout(() => {
                        const messageElement =
                            document.querySelector(".flash-message");
                        messageElement.remove();
                    }, 5000)}
                </div>
            )}
            <div className="flex items-center justify-end mt-4 lg:me-12">
                <Link href={route("posts.create")}>
                    <PrimaryButton>Create</PrimaryButton>
                </Link>
            </div>
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            colSpan={2}
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {!posts ? (
                                        <tr>
                                            <td colSpan={4}>No data found!</td>
                                        </tr>
                                    ) : (
                                        posts.data.map((post, index) => (
                                            <tr key={post.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {post.title.length > 25 ? (
                                                        <Link
                                                            href={route(
                                                                "posts.show",
                                                                post.slug
                                                            )}
                                                            className="text-gray-600 hover:text-gray-900"
                                                        >
                                                            {post.title.substring(
                                                                0,
                                                                20
                                                            ) + "..."}
                                                        </Link>
                                                    ) : (
                                                        <Link
                                                            href={route(
                                                                "posts.show",
                                                                post.slug
                                                            )}
                                                            className="text-gray-600 hover:text-gray-900"
                                                        >
                                                            {post.title}
                                                        </Link>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {post.description}
                                                </td>
                                                <td className="flex justify-end px-6 py-4 whitespace-nowrap">
                                                    <PrimaryButton className="mr-2">
                                                        <Link
                                                            href={route(
                                                                "posts.edit",
                                                                post.slug
                                                            )}
                                                        >
                                                            Edit
                                                        </Link>
                                                    </PrimaryButton>
                                                    <DangerButton
                                                        onClick={() =>
                                                            handleShowConfirmation(
                                                                post.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </DangerButton>
                                                    {showConfirm && (
                                                        <PopupDelete
                                                            id={id}
                                                            setShowConfirm={
                                                                setShowConfirm
                                                            }
                                                        />
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>

                            <div className="flex items-center justify-center mt-4 mb-4">
                                <Pagination links={posts.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default PostIndex;
