import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { LoadProductsRequestAction } from "../store/products/productsactioncreater";

const Dashboard = () => {
    return (<>
        <h3>Welcome to dashboard</h3>
    </>);
}
export default Dashboard;