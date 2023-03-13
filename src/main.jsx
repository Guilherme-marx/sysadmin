import React from '../sysadmin/node_modules/@types/react'
import ReactDOM from '../sysadmin/node_modules/@types/react-dom/client'
import home from './pages/home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <home />
  </React.StrictMode>,
)