import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

//import './index.css'
//DOM --> CHANGE --> copy --> virtual --> DOM
//-->js --> vdom --> og dom compare --> cahnges --> og dom
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
