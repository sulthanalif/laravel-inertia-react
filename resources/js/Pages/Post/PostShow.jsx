import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import DangerButton from '@/Components/DangerButton';

const PostShow = ({ post , auth }) => {
    console.log(post)
  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{post.title}</h2>}
        >
            <Head title="Show" />

            <div className="flex items-center justify-end mt-4 lg:me-12">
                <Link href={route("posts.index")}>
                    <DangerButton>Back</DangerButton>
                </Link>
            </div>

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <p>{post.user.name}</p>
                            <p>{post.description}</p>
                            <div dangerouslySetInnerHTML={{__html: post.body}}></div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  )
}

export default PostShow