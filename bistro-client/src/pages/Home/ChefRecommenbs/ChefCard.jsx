const ChefCard = () => {
  return (
    <div className="card  bg-base-100 rounded-none">
      <figure className="">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="h-1/2"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
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
