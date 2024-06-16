import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PopupDelete from "@/Components/PopupDelete";
import toast from "react-hot-toast";
import TextInput from "@/Components/TextInput";

function PostIndex({ auth, posts }) {
    const [showConfirm, setShowConfirm] = useState(false);

    const [id, setId] = useState(0);
    const [r, setR] = useState("");
    const { flash } = usePage().props;
   

    const handleShowConfirmation = (id) => {
        setShowConfirm(true);
        setId(id);
        setR("posts");
        // console.log(id);
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
                    Posts
                </h2>
            }
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 ">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-bold"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            // colSpan={2}
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-bold"
                                        >
                                            Description
                                        </th>
                                        <th
                                            scope="col"
                                            // colSpan={2}
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-bold"
                                        >
                                            Writer
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right"
                                        >
                                            <TextInput
                                                className="me-2 h-8"
                                                type="text"
                                                name="search"
                                                id="search"
                                                placeholder="Search..."
                                               
                                            />
                                            <Link href={route("posts.create")}>
                                                <PrimaryButton className="float-right">
                                                    Create
                                                </PrimaryButton>
                                            </Link>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {posts && posts.data.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={5}
                                                className="text-center py-4 text-gray-600 font-bold text-lg"
                                            >
                                                No data found!
                                            </td>
                                        </tr>
                                    ) : (
                                        posts.data.map((post, index) => (
                                            <tr
                                                key={post.id}
                                                className="border-t border-b border-gray-200 first:border-t last:border-b hover:bg-gray-100"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-center">
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
                                                    {post.description.length >
                                                    25
                                                        ? post.description.substring(
                                                              0,
                                                              20
                                                          ) + "..."
                                                        : post.title}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {post.user.name}
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
                                                            r={r}
                                                        />
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>

                            {posts && posts.data.length === 0 ? null : (
                                <div className="flex items-center justify-center mt-4 mb-4">
                                    <Pagination links={posts.links} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default PostIndex;
