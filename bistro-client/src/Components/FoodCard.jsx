export default function FoodCard({ item }) {
  const { name, image, price, recipe } = item;
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
          <button className="btn btn-outline border-0 border-b-4 border-yellow-500 mt-4 uppercase">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
