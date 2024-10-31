import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { AppProvider } from './contexterro.jsx'
import { Appcontext } from './context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appcontext>
      <App />
    </Appcontext>
    
  </StrictMode>,
)
