
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './header.css';
const Header = ({user, handleLogout}) =>{
  let [Search, setSearch] = useState(false);
  return (
    <>
      <div className='header'>
        <div className="wrap-c" style={{"width":"100%"}}>
        <div className='header1'>
          <div className="btn"><i class="fa-solid fa-bars fa-xl"></i></div>
          <a href="/" className="logo"><img src="logo.jpg" height={100} alt="logo"></img></a>
          <div className="flex">
            <div>{Search ?<div>
              <input type="text" placeholder="Search..."></input></div>:<div></div>}
            </div>
            <div style={{"cursor": "pointer"}} onClick={()=>{setSearch((Search?false:true));}}><i class="fa-solid fa-magnifying-glass"></i></div>
            {
            (!user)?
              <Link to='/login'>login</Link>
              :
              <div className="">
                <p>{user && user.email}</p>
                <Button variant="primary" onClick={handleLogout}>
                  Log out
                </Button>
              </div>
            }     
          </div>
        </div>
        </div>
        <div className="wrap-c">
        <div className='header2 flex'>
          <div><a href="/">Home</a></div>
          <div><a href="/">Packages</a></div>
          <div><a href="/">Expenses</a></div>
          <div><a href="/">locale</a></div>
          <div><a href="/">hello</a></div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Header;