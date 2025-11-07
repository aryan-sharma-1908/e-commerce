import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  console.log(sidebarToggle);
  const router = createBrowserRouter([
    {
      path: '/',
      exact: true,
      element: <><section className='main'>
        <Header setSidebarToggle={setSidebarToggle} />
        <div className="contentMain flex">
          <div className="sidebarWrapper">
            <Sidebar setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle} />
          </div>
        </div>
      </section></>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
