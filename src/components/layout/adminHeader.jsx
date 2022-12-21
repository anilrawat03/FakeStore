import React from "react";
import {useNavigate } from 'react-router-dom';
const AdminHeader=()=>{
    const navigate = useNavigate ();
    const LogoutUser=()=>{
        localStorage.clear();
        navigate("/login");
    }
    return (<>
    <h3>Header section</h3>
    <button onClick={LogoutUser}>Logout</button>
    </>)
}
export default AdminHeader;