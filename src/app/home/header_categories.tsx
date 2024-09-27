import React from 'react'

function HeaderCategories({ title }: any) {
    return (
        <div className='border-2 border-white border-b-gray-500 pb-4 mb-5'>
            <h1 className='uppercase text-[24px] font-bold'>{title}</h1>
        </div>
    )
}

export default HeaderCategories