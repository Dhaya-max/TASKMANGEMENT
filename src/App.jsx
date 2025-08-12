import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Header/>
    <hr/>
    <Outlet/>
    </div>
  )
}

export default App
