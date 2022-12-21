import React from 'react';
import {Islogin} from '../services/Authservice'
import {Navigate, Outlet} from 'react-router-dom'

const  Authrouter=({props}) =>{
  const auth=Islogin();
  return auth?<Outlet/>: <Navigate to="/login"/>
}
export default Authrouter;