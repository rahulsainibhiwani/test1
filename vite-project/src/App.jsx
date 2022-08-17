import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductForm from './components/screens/ProductForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Routes>
      <Route path='/'>
        <Route index element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/productForm' element={<ProductForm/>}/>
      </Route>
      <Route path='/navbar' element={<NavBar/>} />
      <Route path='/footer' element={<Footer/>} />
    </Routes>
    </div>
  )
}

export default App
