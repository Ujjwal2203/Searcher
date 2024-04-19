import React from 'react'
import {Outlet} from 'react-router-dom'
export default function Mainlayout() {
  return (
    <div>
        {/* Navbar */}
        <div>
            <Outlet/>
        </div>
        {/* Footer */}
    </div>
  )
}
