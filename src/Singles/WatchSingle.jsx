
import React from 'react'
import { useParams } from 'react-router-dom'
import { watchData } from '../Stores/data/watch'
import NavBar from '../Stores/Components/NavBar'

const WatchSingle = () => {
  const {id}=useParams()
  const Product=watchData.find((item)=>item.id==id)
  return (

    <>
    <div>
      <NavBar/>
    </div>
    <div className='ind-page'>
      <div className='ind-image'>
        <img src={Product.image} alt="watch image"  />
      </div>
<div className="ind-details">
<div className='ind-brand'>
        <h5>{Product.brand}</h5>
      </div>
      <div className='ind-model'>
        <h4>{Product.model}</h4>
      </div>
      <div className='ind-price'>
        <h4>{Product.price}</h4>
      </div>
      <div>
            <button>Add to cart</button>
        </div>
</div>

      
    </div>
    </>
  )
}

export default WatchSingle