
import './App.css';
import Login from '../src/components/auth/login';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../src/style/global';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Adminlayout from './components/layout/adminlayout';
import Authrouter from './router/authrouter';
function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      {/* <BrowserRouter> */}
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route  element={<Authrouter />}>
            <Route path="/*" element={<Adminlayout />} />
          </Route>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
