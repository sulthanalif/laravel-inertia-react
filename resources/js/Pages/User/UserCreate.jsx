import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

function UserCreate({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        role: "",
    })

    const submit = (e) => {
        e.preventDefault()
        // console.log(data);
        post(route('users.store'))
    }
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create User
                </h2>
            }
        >
            <Head
                title="Create User"
            />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-3 bg-white justify-center items-center border-b border-gray-200">
                            <form
                                className="p-6 text-gray-900"
                                onSubmit={submit}
                            >
                                <div className="grid grid-cols-3 gap-x-2 gap-y-2">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        className="mt-2"
                                        value={data.name}
                                        isFocused
                                        onChange={(e) => setData("name", e.target.value)}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        className="mt-2"
                                        value={data.email}
                                        onChange={(e) => setData("email", e.target.value)}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="role" value="Role" />

                                    <select
                                        id="role"
                                        name="role"
                                        className="mt-2 px-12  py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        value={data.role}
                                        onChange={(e) => setData("role", e.target.value)}
                                    >
                                        <option value="" disabled className="text-gray-400">Select a role</option>
                                        <option value="admin" className="text-gray-700">Admin</option>
                                        <option value="editor" className="text-gray-700">Editor</option>
                                        <option value="writer" className="text-gray-700">Writer</option>
                                    </select>

                                    <InputError message={errors.role} className="mt-2" />
                                </div>
                                </div>
                                <div className="mt-6 flex space-x-2 items-center justify-end">
                                <PrimaryButton
                                disabled={processing}
                                >Submit</PrimaryButton>
                                <Link
                                    href={route("users.index")}
                                    className="text-sm text-gray-600 underline rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <DangerButton>Back</DangerButton>
                                </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default UserCreate;
