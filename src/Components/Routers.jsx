import React from 'react'
import App from '../App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
const allRouters=createBrowserRouter([
{
    path:'./',
    element:<App/>,
    children:[
        {
            path:'./home',
            element:<Home/>
        },
        {
            path:'./login',
            element:<Login/>
        },
        {
            path:'./register',
            element:<Register/>
        }
]
}


])
const Routers = () => {
  return (

    <div>
        
        
    <RouterProvider router={allRouters}/>
    </div>
  )
}

export default Routers
