import { useState } from 'react'
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
import RequireAuth from './Component/RequireAuth/RequireAuth'
import ErrorPage from './Component/ErrorPage/ErrorPage'
import PortfolioLoading from './Component/PortfolioLoading/PortfolioLoading'


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

        <Route path="/ltc-admin-login" element={<Login></Login>} />
        <Route path="/loading" element={<PortfolioLoading></PortfolioLoading>} />
        <Route path="/forget-password" element={<ForgetPassword></ForgetPassword>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
