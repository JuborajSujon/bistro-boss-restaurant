import { FaShoppingCart, FaHome, FaCalendar, FaEye } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { MdBookmarkBorder, MdRestaurantMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="drawer">
      <div className="w-64 min-h-screen  bg-orange-400">
        <ul className="menu p-4 space-y-1 *:uppercase *:font-semibold *:text-lg">
          <li>
            <NavLink to="/">
              <FaHome size={"1.2rem"} />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar size={"1.2rem"} />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart size={"1.2rem"} />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaEye size={"1.2rem"} />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <BsFillCartCheckFill size={"1.2rem"} />
              My Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <GiWallet size={"1.2rem"} />
              Payment History
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome size={"1.2rem"} />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdRestaurantMenu size={"1.2rem"} />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salads">
              <MdBookmarkBorder size={"1.2rem"} />
              Food Order
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="drawer-content px-4 py-10">
        <Outlet />
      </div>
    </div>
  );
}
