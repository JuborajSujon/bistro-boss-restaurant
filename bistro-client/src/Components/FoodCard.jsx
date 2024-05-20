import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
export default function FoodCard({ item }) {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = async () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      try {
        const { data } = await axiosSecure.post("/carts", cartItem);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added to cart",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the number of items in the cart
          refetch();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card  bg-base-100 rounded-none">
      <figure className="w-full">
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 top-3 mr-6 px-2 py-1.5 rounded text-lg font-semibold">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => {
              handleAddToCart();
            }}
            className="btn btn-outline border-0 border-b-4 border-yellow-500 mt-4 uppercase">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
