

import React from 'react'
import {furnitureData} from '../data/furniture'

const FirstFiveFurniture =furnitureData.slice(0,5)

const Furniture = () => {
  return (
    <>
    <div className='proTitle'>
      <h2>Furniture</h2>
    </div>
    <div className='proSection'>
      {FirstFiveFurniture.map((item)=>{
        return(
          <div className='proImages'>
            <img  className='proBox' src={item.image} alt="Furniture Image" srcset="" />
          </div>
        )
      })}

    </div>  
    </>
  )
}

export default Furniture