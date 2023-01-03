import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import { MenuContext } from "../../context/Menu"

const SidebarContainer = () => {
  const [{isCollapsed}]= React.useContext(MenuContext)
  return (
    <div className='menu'>
        <div className="navbar-brand-box my-3">
          { !isCollapsed && (
            <Link to='/' className='logo text-decoration-none mx-4 px-4'>CHAOS</Link>
          )}
            <div data-simplebar className="h-100">
                <SideBar/>
            </div>
        </div>
    </div>
  )
}

export default SidebarContainer