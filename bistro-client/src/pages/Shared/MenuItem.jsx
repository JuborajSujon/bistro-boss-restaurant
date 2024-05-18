const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex items-center gap-3">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px] h-[100px]"
        src={image}
        alt={name}
      />
      <div>
        <div className="flex justify-between items-center">
          <h3 className="uppercase">{name}-----------</h3>
          <p className="text-yellow-500">Price: ${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
