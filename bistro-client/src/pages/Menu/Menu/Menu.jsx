import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu, loading] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
      <SectionTitle subHeading={"Don't Miss"} heading={"Todays Offer"} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory items={desserts} title={"Desserts"} coverImg={dessertImg} />
      {/* pizza menu items */}
      <MenuCategory items={pizzas} title={"Pizzas"} coverImg={pizzaImg} />
      {/* salad menu items */}
      <MenuCategory items={salads} title={"Salads"} coverImg={saladImg} />
      {/* soup menu items */}
      <MenuCategory items={soups} title={"Soups"} coverImg={soupImg} />
    </div>
  );
};

export default Menu;
