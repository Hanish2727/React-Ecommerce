

import React from 'react'
import { computerData } from '../Stores/data/computers'
import { useParams } from 'react-router-dom'

const ComputerSingle = () => {

const {id}=useParams()
const Prod=computerData.find((item)=>item.id===id)
  return (
    <div className='ind-page'>
        <div className='ind-image'>
         <img src={Prod.image} alt="watch image" />
        </div>
       <div className="ind-details">
       <div className="ind-model">
            <h3>{Prod.model}</h3>
        </div>
        <div className="ind-price">
            <h4>{Prod.price}</h4>
        </div>
        <div className="ind-description">
            <h5>{Prod.description}</h5>
        </div>
        <div>
            <button>Add to cart</button>
        </div>
       </div>
       
    </div>
  )
}

export default ComputerSingle