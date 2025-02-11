

import React from 'react'
import { mobileData } from '../Stores/data/mobiles'
import { useParams } from 'react-router-dom'
import NavBar from '../Stores/Components/NavBar'

const MobileSingle = () => {

    const {id}=useParams()
    const product=mobileData.find((item)=>item.id===id)
  return (
    <>
    <div>
        <NavBar/>
    </div>
    <div className='ind-page'>
        <div className='ind-image'>
            <img src={product.image} alt="Mobile image" />
        </div>
       <div className="ind-details">
        <div className='ind-company'>
            <h1>{product.company}</h1>
        </div>
       <div className='ind-model'>
            <h2>{product.model}</h2>
        </div>
        <div className='ind-price'>
            <h3>{product.price}</h3>
        </div>
        <div className="ind-description">
            <h4>{product.description}</h4>
        </div>
        <div>
            <button>Add to cart</button>
        </div>
       </div>
    
    </div>
    </>
  )
}

export default MobileSingle