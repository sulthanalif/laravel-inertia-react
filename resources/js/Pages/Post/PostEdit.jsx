import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";
import { useState, useEffect } from "react";

const PostEdit = ({ auth, post }) => {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        slug: post.slug,
        description: post.description,
        body: post.body,
    });

    const [slug, setSlug] = useState(data.title ? slugify(data.title) : "");

    useEffect(() => {
        setSlug(slugify(data.title));
        setData("slug", slug);
    }, [data.title]);

    const submit = (e) => {
        // console.log(data);
        put(route("posts.update", post.slug));
        e.preventDefault();
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Post
                </h2>
            }
        >
            <Head title="Edit Post" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="title" value="Title" />

                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="slug"
                                        value="Slug"
                                    />

                                    <TextInput
                                        id="slug"
                                        type="text"
                                        name="slug"
                                        value={slug}
                                        className="mt-1 block w-full"
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

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="description"
                                        value="Description"
                                    />

                                    <TextInput
                                        id="description"
                                        type="text"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="body" value="Body" />

                                    <TextInput
                                        id="body"
                                        type="text"
                                        name="body"
                                        value={data.body}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("body", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.body}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ms-4" disabled={processing}
                                    >
                                        Save
                                    </PrimaryButton>
                                    <Link
                                        href={route("posts.index")}
                                    >
                                        <DangerButton className="ms-4">Back</DangerButton>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default PostEdit;

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
