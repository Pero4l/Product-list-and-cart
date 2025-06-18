import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from './component/first-cont.jsx'
import Second from './component/second-cont.jsx'
import Third from './component/third-cont.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <First />

    <Second />

    <Third />

  </StrictMode>,
)
