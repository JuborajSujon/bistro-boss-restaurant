import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);

        if (res.data.deletedCount > 0) {
          // refetch
          refetch();
          // show alert
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} deleted successfully`,
            icon: "success",
          });
        }
      }
    });
  };

  const handleUpdateItem = (item) => {
    console.log(item);
  };
  return (
    <div>
      <SectionTitle subHeading="Manage All Items" heading="Hurry Up" />

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleUpdateItem(item);
                      }}
                      className="btn btn-ghost btn-xs">
                      <FaEdit color="orange" size={"1.2rem"} />
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => {
                        handleDeleteItem(item);
                      }}
                      className="btn btn-ghost btn-xs">
                      <FaTrash color="red" size={"1.2rem"} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
