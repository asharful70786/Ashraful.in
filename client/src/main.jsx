import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"

import { AuthProvider } from './context/AuthContext' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter> 
    <AuthProvider>
      <App />
      <Analytics />
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
