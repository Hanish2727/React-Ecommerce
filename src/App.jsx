

import React from 'react'

import './App.css'
import LadingPage from './Stores/Pages/LadingPage'
import { Router,Route,Routes } from 'react-router-dom'
import MobilePage from './Stores/Pages/MobilePage'
import ComputerPage from './Stores/Pages/ComputerPage'
import MobileSingle from './Singles/MobileSingle'
import WatchPage from './Stores/Pages/WatchPage'
import WatchSingle from './Singles/WatchSingle'
import ComputerSingle from './Singles/ComputerSingle'


const App = () => {
  return (
    <div>
      <Routes >
        <Route path='/' element={<LadingPage/>} />
        <Route path='/Mobile' element={<MobilePage/>}/>
        <Route path='/Computers' element={<ComputerPage/>}/>
        <Route path='/Mobile/:id' element={<MobileSingle/>}/>
        <Route path='/Watch' element={<WatchPage/>}/>
        <Route path='/Watch/:id' element={<WatchSingle />} />
        <Route path='Computers/:id' element={<ComputerSingle/>}/> 

      </Routes>
    

    </div>
  )
}

export default App