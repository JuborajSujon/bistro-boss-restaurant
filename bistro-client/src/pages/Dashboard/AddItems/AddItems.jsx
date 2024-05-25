import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_api_key = import.meta.env.VITE_IMAGEBB_API_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    //image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_url, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the img url
      const menuItem = {
        name: data.name,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
      };
      //send menu item data to the server - axios secure use for authentication -admin
      const menuRes = await axiosSecure.post("/menu", menuItem);

      if (menuRes.data.insertedId) {
        //show success toast
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added successfully`,
          showConfirmButton: false,
          timer: 1500,
        });

        reset();
      }
    }
  };

  return (
    <div>
      <SectionTitle subHeading="What's New" heading="Add an Item" />

      <div>
        <form
          className="space-y-4 p-5 md:p-10  bg-base-200 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-base">
                  Recipe Name
                </span>
              </div>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter Recipe Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold text-base">
                    Select Category
                  </span>
                </div>
                <select
                  {...register("category", { required: true })}
                  name="category"
                  className="select select-bordered"
                  defaultValue={"default"}>
                  <option disabled value="default">
                    Select a Category
                  </option>
                  <option value="offered">Offered</option>
                  <option value="popular">Popular</option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
            </div>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold text-base">Price</span>
                </div>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Enter Recipe Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text font-bold text-base">
                  Recipe Details
                </span>
              </div>

              <textarea
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Enter Recipe Details"></textarea>
            </label>
          </div>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <div className="text-center">
            <button
              className="btn btn-outline border-0 border-b-4 border-yellow-500 w-full max-w-xs mt-4 text-xl"
              type="submit">
              Submit <FaUtensils className="ml-2" size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
