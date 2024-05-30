const ChefCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card  bg-base-100 rounded-none">
      <figure className="w-full">
        <img src={image} alt={name} className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price : {price}</p>
        <p>{recipe}</p>

        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 border-yellow-500 mt-4 uppercase">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
