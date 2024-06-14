import { Link } from '@inertiajs/react'
import React from 'react'

function Pagination({ links }) {
  return (
    <nav aria-label='Pagination'>
        <div className="flex flex-wrap -mb-1">
            {links.map((link, id) => {
                return (
                    <div key={id} className="mb-1">
                        <Link 
                        href={link.url}
                        className={`${link.active ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'} inline-flex items-center px-3 py-2 border text-sm font-medium`}
                        aria-current={link.active ? 'page' : undefined}
                        >
                            <div dangerouslySetInnerHTML={{ __html: link.label }} />
                        </Link>
                    </div>
                )
            })}
        </div>
    </nav>
  )
}

export default Pagination