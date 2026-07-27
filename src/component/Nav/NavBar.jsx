import { NavLink } from "react-router";

const navLinkClasses = ({ isActive }) =>
  isActive
    ? "text-primary font-bold border-b-2 border-primary"
    : "hover:text-primary";

const NavBar = () => {
  const link = (
    <>
      <li>
        <NavLink to='/' className={navLinkClasses}>Home</NavLink>
      </li>
      <li>
        <NavLink to='about' className={navLinkClasses}>About</NavLink>
      </li>
      <li>
        <NavLink to='career' className={navLinkClasses}>Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  mb-10 ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">Dragon</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <NavLink to='/auth/login' className="btn text-white bg-gray-600">Login</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
