import FoodCard from "../../../Components/FoodCard";

export default function OrderTab({ items }) {
  return (
    <div className="grid md:grid-cols-3 gap-10 w-full max-w-screen-xl mx-auto">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
}
