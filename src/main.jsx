import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/layout/Main';
import Home from './component/Home/Home';
import Review from './component/Review/Review';
import GrandPa from './component/GrandPa/GrandPa';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch('tshirts.json'),
      },
      {
        path:'review',
        element: <Review></Review>,
      },
      {
        path:'grandPa',
        element:<GrandPa></GrandPa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
