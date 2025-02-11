

import React from 'react'
import {watchData} from '../data/watch'
import { Link } from 'react-router-dom'

const FirstFiveWatches=watchData.slice(0,5)

const Watch = () => {
  return (
   <>
   <div className='proTitle'>
    <h2>Watches</h2>
   </div>
    <div className='proSection'>
        {FirstFiveWatches.map((item)=>{
            return(
                <Link to={`/Watch/${item.id}`}>
                <div className='proImages'>
                    <img className='proBox' src={item.image} alt="Images" />
                </div>
                </Link>
            )
        })}
    </div>
   
   
   </>
  )
}

export default Watch