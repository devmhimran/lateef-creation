import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import NavMenu from "./Component/NavMenu/NavMenu";
import SinglePortfolio from "./Component/SinglePortfolio/SinglePortfolio";
import Category from "./Component/Category/Category";
import Footer from "./Component/Footer/Footer";
import Dashboard from "./Component/Dashboard/Dashboard";
import Login from "./Component/Login/Login";
import ForgetPassword from "./Component/ForgetPassword/ForgetPassword";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import PortfolioLoading from "./Component/PortfolioLoading/PortfolioLoading";
import AddProject from "./Component/AddProject/AddProject";
import AllProject from "./Component/AllProject/AllProject";
import PortfolioPage from "./Component/PortfolioPage/PortfolioPage";
import AllTestProject from "./Component/AllTestProject/AllTestProject";
import TestCode from "./Component/TestCode/TestCode";
import AllPortfolioSkeleton from "./Component/Skeleton/AllPortfolioSkeleton";

function App() {
  useEffect(() => {
    var circle = document.getElementById("circle");

    if (circle) {
      window.addEventListener("mousemove", function (dets) {
        gsap.to(circle, {
          x: dets.clientX,
          y: dets.clientY,
          duration: 0.3,
          ease: "Expo.easeOut",
        });
      });
    }
  }, []);
  return (
    <div className="App relative">
      <NavMenu></NavMenu>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:id" element={<SinglePortfolio />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/portfolio" element={<PortfolioPage />} />

          <Route
            path="lateef-creation-dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route
              index
              element={
                <RequireAuth>
                  <AllProject />
                </RequireAuth>
              }
            />
            <Route
              path="add-project"
              element={
                <RequireAuth>
                  <AddProject />
                </RequireAuth>
              }
            />
            <Route
              path="test-project"
              element={
                <RequireAuth>
                  <AllTestProject />
                </RequireAuth>
              }
            />
            <Route
              path="test-code"
              element={
                <RequireAuth>
                  <TestCode />
                </RequireAuth>
              }
            />
          </Route>

          <Route path="/ltc-admin-login" element={<Login></Login>} />
          {/* <Route path="/loading" element={<AllPortfolioSkeleton />} /> */}
          <Route
            path="/forget-password"
            element={<ForgetPassword></ForgetPassword>}
          />
          <Route path="*" element={<ErrorPage></ErrorPage>} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
