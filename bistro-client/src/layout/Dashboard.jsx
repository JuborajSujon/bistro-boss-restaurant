import {
  FaShoppingCart,
  FaHome,
  FaCalendar,
  FaEye,
  FaEnvelope,
  FaUtensils,
  FaList,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { MdBookmarkBorder, MdRestaurantMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

export default function Dashboard() {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer">
      <div className="w-64 min-h-screen  bg-orange-400">
        <ul className="menu p-4 space-y-1 *:uppercase *:font-semibold *:text-base">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome size={"1.2rem"} />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils size={"1.2rem"} />
                  Add an item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList size={"1.2rem"} />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook size={"1.2rem"} />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers size={"1.2rem"} />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  My Cart ({cart.length})
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
                <NavLink to="/dashboard/paymentHistory">
                  <GiWallet size={"1.2rem"} />
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* Shared nav links */}
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
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope size={"1.2rem"} />
              Contact
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
