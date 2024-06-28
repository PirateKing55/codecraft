import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Sidebar from './components/Sidebar.jsx'
import Stats from './components/Stats.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/stats",
    element: <Sidebar />,
    children: [{
      path: "/stats/:heroname",
      element: <Stats />,
    }]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


