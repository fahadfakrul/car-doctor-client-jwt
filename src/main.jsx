import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import Authproviders from './Providers/Authproviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
     <Authproviders>
      <RouterProvider router={router} />
      </Authproviders>
  </React.StrictMode>,
  
)
