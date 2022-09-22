import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import NavMenu from './Component/NavMenu/NavMenu'
import SinglePortfolio from './Component/SinglePortfolio/SinglePortfolio'
import Category from './Component/Category/Category'
import Footer from './Component/Footer/Footer'
import Dashboard from './Component/Dashboard/Dashboard'
import Login from './Component/Login/Login'
import ForgetPassword from './Component/ForgetPassword/ForgetPassword'
import Register from './Component/Register/Register'
import RequireAuth from './Component/RequireAuth/RequireAuth'
import Loading from './Component/Loading/Loading'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<SinglePortfolio />} />
        <Route path="/category/:categoryName" element={<Category />} />

        <Route path="/lateef-creation-dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>} />

        <Route path="/login" element={<Login></Login>} />
        <Route path="/forget-password" element={<ForgetPassword></ForgetPassword>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
