import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import AddTouristsSpot from './components/AddTouristsSpot/AddTouristsSpot.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails.jsx';
import AllTouristsSpot from './components/AllTouristsSpot/AllTouristsSpot.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch('http://localhost:5000/spots')
      },
      {
        path:'/add-spots',
        element:<PrivateRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivateRoute>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'travels/:id',
        element:<PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path:'/all-spots',
        element:<AllTouristsSpot></AllTouristsSpot>,
        loader:() => fetch('http://localhost:5000/spots')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
