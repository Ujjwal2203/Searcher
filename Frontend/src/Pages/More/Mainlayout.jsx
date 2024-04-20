import React from 'react'
import {Outlet} from 'react-router-dom'
import { SidebarWithBurgerMenu } from '../../Components/Sidebar'
export default function Mainlayout() {
  return (
    <div className='bg-gray-10 text-gray-5 min-h-screen w-screen'>
        {/* Navbar */
        <div>
          <SidebarWithBurgerMenu/>
          
        </div>
        }
        <div className='grid place-items-center'>
            <Outlet/>
        </div>
        {/* Footer */}
    </div>
  )
}
