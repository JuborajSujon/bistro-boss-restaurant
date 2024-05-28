import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navOption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salads">Food Order</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart">
          <FaShoppingCart size={"1.2rem"} />
          <sup className="badge badge-secondary">+{cart?.length}</sup>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30  bg-slate-900 text-white max-w-[1540px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-slate-800 rounded-box gap-2 w-52">
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div>
              <img
                className="w-10 rounded-full"
                src={user.photoURL}
                alt={user.displayName}
                title={user.displayName}
              />
            </div>
            <button onClick={handleLogout} className="btn btn-ghost">
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-ghost">
              <NavLink to="/login">Login</NavLink>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
