import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  if (loading) {
    return (
      <div className="w-24 mx-auto">
        <span className="loading loading-bars w-24"></span>
      </div>
    );
  }
  return (
    <section className="mb-12">
      <SectionTitle subHeading="Popular Items" heading="From Our Menu" />
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-outline border-0 border-b-4 border-yellow-500 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
