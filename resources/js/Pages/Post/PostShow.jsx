import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";

const PostShow = ({ post, auth }) => {
    // console.log(post)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Post Show
                </h2>
            }
        >
            <Head title="Show" />

            <div className="flex max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4 justify-end ">
                <Link href={route("posts.index")}>
                    <DangerButton>Back</DangerButton>
                </Link>
            </div>

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="">
                                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 my-4">
                                    <h2 className="text-black text-4xl font-extrabold dark:text-white font-bold">
                                        {post.title}
                                    </h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        <p className="text-lg text-gray-500">
                                            📝 {post.user.name}
                                        </p>
                                        <p className="text-lg text-gray-500 text-right">
                                            {new Date(
                                                post.created_at
                                            ).toLocaleDateString("en-US", {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                            })}
                                            ,
                                            {new Date(
                                                post.created_at
                                            ).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                    </div>
                                    <div className="">
                                        <p class="my-4 text-lg text-gray-500">
                                            {post.description}
                                        </p>
                                        <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                            {post.body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default PostShow;
