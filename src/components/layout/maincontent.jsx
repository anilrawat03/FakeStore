import React from "react"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import Dashboard from "../Home";
import Products from "../Products";
import Productdetails from "../Views/productdetail";
import Sidemenu from "./sidemenu";
const MainContent = () => {
    console.log("MainContent");
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard"/>} />
                <Route  path='/dashboard' element={<Dashboard />} />
                <Route  path='/Products' element={<Products />} />
                <Route  path="/productdetail/:id" element={<Productdetails/>}></Route>
            </Routes>
        </>
    )
}
export default MainContent;