import React from 'react'
import {Outlet} from 'react-router-dom'
import { SidebarWithBurgerMenu } from '../../Components/Sidebar'
export default function Mainlayout() {
  return (
    <div>
        {/* Navbar */
        <div>
          <SidebarWithBurgerMenu/>
          
        </div>
        }
        <div>
            <Outlet/>
        </div>
        {/* Footer */}
    </div>
  )
}
