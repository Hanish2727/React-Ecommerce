

import React from 'react'
import { computerData } from '../data/computers'
import NavBar from '../Components/NavBar'
import { Link } from 'react-router-dom'


const ComputerPage = () => {
  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div className='pageSection'>
{computerData.map((item)=>{
    return(
      
       <div>
<Link to={`/Computers/${item.id}`}>
       <div className='pageSectionImage'>
            <img className='pageSectionImageList' src={item.image} alt="computer" srcset="" />
            </div>
            </Link>
            <div >
              {item.company},{item.model}
            </div>
        </div>
       
      
    )
})}
    </div>
    </>
  )
}

export default ComputerPage