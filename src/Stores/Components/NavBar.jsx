
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <div className='navSection'>
      <Link to='/'> <div className='navHome'>Home</div></Link>
         <div className='navSearch'>
           <input type="text" placeholder='Enter the text' />
           <button>Search</button>
        </div>
        <div className='navSign'>SignIn & SignOut </div>
        </div>
        <div className='subMenu'>
          <ul>
            <Link to='/Mobile'> <li>Mobiles</li></Link>
           <Link to='/Computers'><li>Computers</li></Link>
           <Link to='/Watch'><li>Watches</li> </Link>
            
            <li>Books</li>
            <li>Men</li>
            <li>Furniture</li>
            <li>Speakers</li>
            <li>Television</li>
            <li>Kitchen</li>
            <li>Women</li>
            <li>Ac</li>
      
          </ul>
        </div>
    </div>
  )
}

export default NavBar