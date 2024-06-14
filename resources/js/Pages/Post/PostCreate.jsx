import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import DangerButton from "@/Components/DangerButton";

function PostCreate({ auth }) {
    // const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        body: "",
        slug: "",
    });

    const [slug, setSlug] = useState(data.title ? slugify(data.title) : "");

    useEffect(() => {
        setSlug(slugify(data.title));
        setData("slug", slug);
    }, [data.title]);

    useEffect(() => {
        return () => {
            reset("title", "description", "body", "slug");
        };
    }, []);

    const submit = (e) => {
        // console.asd(data);
        e.preventDefault();
        post(route("posts.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Post
                </h2>
            }
        >
            <Head title="Create Post" />

            {/* {flash.errors && (
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
            )} */}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form className="p-6 text-gray-900" onSubmit={submit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Title
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="title"
                                    name="title"
                                    value={data.title}
                                    type="text"
                                    placeholder="Title"
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="slug"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Slug
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="slug"
                                    name="slug"
                                    value={slug}
                                    type="text"
                                    placeholder="Slug"
                                    onChange={(e) =>
                                        setData("slug", e.target.value)
                                    }
                                    readOnly
                                />
                                <InputError
                                    message={errors.slug}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Description
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    rows="3"
                                    placeholder="Description"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                ></textarea>
                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="body"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Body
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="body"
                                    name="body"
                                    value={data.body}
                                    rows="3"
                                    placeholder="Body"
                                    onChange={(e) =>
                                        setData("body", e.target.value)
                                    }
                                ></textarea>
                                <InputError
                                    message={errors.body}
                                    className="mt-2"
                                />
                            </div>
                            <div className="pt-4 flex justify-end">
                            <PrimaryButton className="" disabled={processing}>
                                Submit
                            </PrimaryButton>
                            <Link href={route("posts.index")} className="ms-4">
                                <DangerButton className="">
                                    Back
                                </DangerButton>
                            </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default PostCreate;

function slugify(text) {
    const slug = text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");

    return slug;
}
