import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";

export default function MenuCategory({ items, title, coverImg }) {
  return (
    <div className="mt-8">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-screen-xl mx-auto mt-10 mb-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
