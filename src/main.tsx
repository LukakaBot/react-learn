import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <h1>Hello Vite + React + UnoCSS</h1>
  </StrictMode>,
)
