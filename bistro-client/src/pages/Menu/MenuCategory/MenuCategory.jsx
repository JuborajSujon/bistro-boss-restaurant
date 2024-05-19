import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";
import { Link } from "react-router-dom";

export default function MenuCategory({ items, title, coverImg }) {
  return (
    <div className="mt-8 mb-20">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-screen-xl mx-auto mt-10 mb-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      {title && (
        <div className="text-center">
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 border-yellow-500 mt-4">
              Order Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
