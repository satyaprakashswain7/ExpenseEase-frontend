import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

const pub_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!pub_key){
  throw new Error("key not found")
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={pub_key}>
      <App />
    </ClerkProvider>
    
  </React.StrictMode>,
)
