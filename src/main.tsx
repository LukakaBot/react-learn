import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'

const obj = {
  name: 'duyi',
  age: 18,
}

const arr = [1, 2, 3, 4, 5]

let a = '1'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <h1>Hello Vite + React + UnoCSS</h1>
    <p title={a}>{arr}</p>
  </StrictMode>,
)

setTimeout(() => {
  a = '2'
}, 1000)

const h1 = (
  <>
    <h1>Hello Vite + React + UnoCSS</h1>
  </>
)

const p = <h1>Hello Vite + React + UnoCSS</h1>
console.log(h1)
console.log(p)
