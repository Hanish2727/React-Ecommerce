

import React from 'react'
import {computerData} from "../data/computers"

 const FirstFiveComputers=computerData.slice(0,5)


const Laptops = () => {
  return (
   <>
   <div className='proTitle'>
    <h2>Computers</h2>
   </div>
    <div className='proSection'>
      {FirstFiveComputers.map((item)=>{
        return(
          <div className='proImages'>
            <img className='proBox' src={item.image} alt="Computer Images" srcset="" />
          </div>
        )
      })}

    </div>
   </>
  )
}

export default Laptops
