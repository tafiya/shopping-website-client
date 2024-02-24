import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './Providers/AuthProvider';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
 </QueryClientProvider>

 </AuthProvider>
 


  </React.StrictMode>,
)
