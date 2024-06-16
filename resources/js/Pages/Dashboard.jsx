import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function Dashboard({ auth, counts }) {
    console.log(auth.user);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>   
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg shadow p-4">
                                <h2 className="text-lg font-semibold mb-2">Posts</h2>
                                <p className="text-gray-500">Total posts: {counts.posts} </p>
                            </div>
                            { auth.user.roles[0].name == "admin" ? (
                                <div className="bg-white rounded-lg shadow p-4">
                                <h2 className="text-lg font-semibold mb-2">Users</h2>
                                <p className="text-gray-500">Total users: {counts.users} </p>
                            </div>
                            ) : null }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Dashboard;
