import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
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
        const { data } = await axiosSecure.delete(`/users/${user._id}`);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  const handleRoleUser = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "User role updated successfully.",
          icon: "success",
        });
        refetch();
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly items-center my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="*:uppercase *:text-base">
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => {
                            handleRoleUser(user);
                          }}
                          className="btn btn-xs">
                          <FaUsers color="green" size={"1.2rem"} />
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleDeleteUser(user);
                        }}
                        className="btn btn-xs">
                        <FaTrash color="red" size={"1.2rem"} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
