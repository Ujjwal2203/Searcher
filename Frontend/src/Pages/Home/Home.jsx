import React from 'react'
import { FaSearch } from "react-icons/fa";
export default function Home() {
  return (
    <form className='w-[500px] relative'>
      <div className="relative">
        <input type='search' placeholder='connect your apps and start searching' className='w-full p-4 rounded-full bg-gray-8'/>
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-gray-9 rounded-full'> 
          <FaSearch className='text-gray-1'/>
        </button>
      </div>

    </form>

  )
}
