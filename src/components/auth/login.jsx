import { Box, Button, FormLabel, Input } from "@material-ui/core";
import React, { useState } from "react";
import {toast} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import { loginRequestAction } from "../../store/auth/authactioncreator";
import history from "../../services/history";
import { useNavigate } from "react-router-dom";

const Login = () => {
    var navigate=useNavigate();
    const dispatch=useDispatch();
    const [username, setusername] = useState("mor_2314");
    const [password, setpassword] = useState("83r5^_");
    const Handlerlogin = (event) => 
    {
        if(!username ||!password )
        {
            alert("username and password is required.");
            return;
        }
        dispatch(loginRequestAction({navigate:(route)=>navigate(route),logindata:{username:username,password:password}}))
        event.preventDefault();
    } 
    return(<>
     <Box component="span" m={1}>
        <FormLabel>User Name</FormLabel>
        <Input value={username} onChange={(e) => { setusername(e.target.value) }} />

        <FormLabel>Password</FormLabel>
        <Input value={password} onChange={(e) => { setpassword(e.target.value) }} />
        <Button variant="contained" color="secondary" onClick={Handlerlogin} >login</Button>
    </Box>
    </>)
   
};
export default Login;