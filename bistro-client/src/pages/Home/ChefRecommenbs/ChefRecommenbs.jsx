import SectionTitle from "../../../Components/SectionTitle";
import ChefCard from "./ChefCard";
import useMenu from "../../../hooks/useMenu";

const ChefRecommenbs = () => {
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
    <div>
      <SectionTitle subHeading="Should Try" heading="Chef Recommenbs" />

      <div className="grid md:grid-cols-3 gap-10">
        {popularItems.map((item) => (
          <ChefCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommenbs;
