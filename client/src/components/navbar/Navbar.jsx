import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo.jsx";
import newRequest from "../../utils/newRequest.js";
import "./Navbar.scss";

const categories = [
  "Graphics & Design",
  "Video & Animation",
  "Writing & Translation",
  "AI Services",
  "Digital Marketing",
  "Music & Audio",
  "Programming & Tech",
  "Business",
  "Lifestyle"
]


function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = () => {
    setActive(window.scrollY > 0) 
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    }
    catch (err) {
      console.log(err);
    }

  }

  return (
    <nav className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <Logo />
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}

          {currentUser ? (
            <div
              className="user"
              onClick={() => setOpen(!open)}>

              <img
                src={currentUser.img || "/img/noavatar.jpg"}
                alt="noavatar" />

              <span>{currentUser?.username}</span>
              {open && <div className="options">

                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" onClick={handleLogout}>
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            {categories.map(category =>
              <Link to="/">
                {category}
              </Link>
            )}
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
