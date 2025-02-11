import React from 'react'
import { mobileData } from '../data/mobiles'
import NavBar from '../Components/NavBar'
import { Link } from 'react-router-dom'

const MobilePage = () => {
  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div className='pageSection'>
      {mobileData.map((item)=>
      {
        return(
          <div>
            <Link to={`/Mobile/${item.id}`}>
            <div className='pageSectionImages'>
                <img className='pageSectionImageList' src={item.image} alt="Mobile Images" />
              </div>
            </Link>
               <div className='pageSectionModel'>
                {item.company},{item.model}
              </div>

          </div>
        )
      })}
    </div>
    
    </>
  )

  }

export default MobilePage