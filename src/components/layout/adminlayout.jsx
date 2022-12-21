import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./adminHeader";
import MainContent from "./maincontent";
import Sidemenu from "./sidemenu";
const Adminlayout=()=>
{
    useEffect(()=>{
    },[])
    console.log("MainContent");
    return(
        <>
        <AdminHeader/>
          <Sidemenu/>
        <MainContent/>
        <Outlet/>
        </>
    );
}
export default  Adminlayout;