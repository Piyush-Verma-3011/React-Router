import React from 'react'
import {NavLink} from 'react-router-dom'


const Menu = () => {
  return (
    <div style={{background:"black", height:"30px", textAlign:"center"}}>
    
<NavLink to='/user' style={{color:'green'}}>User</NavLink>


    </div>
  )
}

export default Menu