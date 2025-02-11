
import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'



const WatchPage = () => {
  return (
<>
<div>
    <NavBar/>
</div>
<div className='pageSection'>
        {watchData.map((item)=>{
            return(
                <div>
                    <Link to={`/Watch/${item.id}`}>
                <div className="pageSectionImages">
                    <img className='pageSectionImageList' src={item.image} alt="Watch Photo" />
                    </div> 
                    </Link>
                    <div className='pageSectionModel'>
                        <h3>{item.brand},{item.model}</h3>
                        </div>   
                </div>
            )
        })}
    </div>
</> 
  
  )
}

export default WatchPage