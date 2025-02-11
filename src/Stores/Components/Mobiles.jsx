
import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link, useParams } from 'react-router-dom'

const FirstFiveMobiles=mobileData.slice(0,5)

const Mobiles = () => {
  return (

    <>
    <div className='proTitle'>
    <h2>Mobiles</h2>
    </div>
    
    <div className='proSection'>
        {FirstFiveMobiles.map((item)=>{
            return(
              <Link to={`/Mobile/${item.id}`}>
                <div className='proImages'>
                    <img className='proBox' src={item.image} alt="MobileImges"/>
                </div>
                </Link>
            )
        })}
    </div>
    
    </>
  )
}

export default Mobiles