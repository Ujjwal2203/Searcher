import React from 'react'
import { FaSearch } from "react-icons/fa";
import {RiSendPlaneFill} from "react-icons/ri"
export default function Home() {
  return (
    <form className='w-1/2 relative '>
      <div className="relative flex pl-10 pr-6 py-2 rounded-xl bg-gray-7 place-items-center gap-4">
        <FaSearch className='text-gray-1'/>
        <input type='search' placeholder='connect your apps and start searching' className='w-full bg-transparent outline-0'/>
        <button className='p-4 bg-gray-6 rounded-full'><RiSendPlaneFill/></button>
      </div>

    </form>

  )
}
