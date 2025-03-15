// import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function Search_bar() {
    return (
        <div className='flex items-center justify-between border-2 border-gray-200 h-10 w-[300px] rounded-full overflow-hidden '>
            <input
                className=' px-3 py-1  focus:outline-none'
                placeholder='Search'
                type='text'
            />
            <div className='rounded-full bg-slate-200 w-8 h-8 flex justify-center items-center mr-1'><CiSearch className='w-5 h-5 hover:cursor-pointer ' />
            </div>
        </div>
    )
}
