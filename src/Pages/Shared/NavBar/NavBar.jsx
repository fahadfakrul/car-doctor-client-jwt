import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authproviders";
const NavBar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services ">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {user?.email ? <li><Link to="/bookings">My Bookings</Link> </li>: <li></li>}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-lg"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">{navItems}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user?.email ? <button className="btn  bg-[#FF3811] text-white  font-semibold text-lg" onClick={handleLogout}>Log Out</button>:<Link to="/login" className="btn  bg-[#FF3811] text-white  font-semibold text-lg">Sign In</Link> }
      <button className="btn btn-outline hover:bg-[#FF3811] hover:border-none text-[#FF3811]  font-semibold text-lg">Appointment</button>
      </div>
    </div>
  );
};

export default NavBar;
