import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";

function PostIndex({ auth, posts }) {
    const { flash } = usePage().props;
    //   console.log(flash.message);

    const { data, setData, delete: destroy } = useForm();

    const deletePost = (e) => {
        if (confirm("Are you sure you want to delete this post?")) {
            e.preventDefault();

            destroy(route("posts.destroy"));
        }
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
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Description
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {posts.data.map((post) => (
                                        <tr key={post.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {post.title}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {post.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <form onSubmit={deletePost}>
                                                    <input
                                                        type="hidden"
                                                        value={post.id}
                                                        onChange={(e) =>
                                                            setData(
                                                                "id",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <DangerButton type="submit">
                                                        Delete
                                                    </DangerButton>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default PostIndex;
