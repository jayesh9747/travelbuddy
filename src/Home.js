import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "./context/UserAuthContext";

import Header from "./components/header";
import './App.css'
import './genral.css'
import Main from "./components/main";
import Footer from "./components/footer";

const Home = () =>{
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      
      <Header user={user} handleLogout={handleLogout} />
      <Main />
      <Footer />
    </>
  )
}

export default Home;
