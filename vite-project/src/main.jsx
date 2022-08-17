import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Footer from './components/Footer/Footer'
import NavBar from './components/Navbar/Navbar'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <div>
      <NavBar/>
    </div>
    <div>
    <App />
    </div>
    <div style={{position:"fixed",bottom:'0',justifyContent:"center",width:"95vw"}}>
    <Footer/>
    </div>
   </BrowserRouter>
  </React.StrictMode>
)
