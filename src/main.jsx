import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <React.StrictMode>
        <AppProvider>
          <App />
        </AppProvider>
      </React.StrictMode>
  </BrowserRouter>
)
