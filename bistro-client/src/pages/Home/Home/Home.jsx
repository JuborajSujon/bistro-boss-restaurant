import Category from "../Category/Category";
import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import ChefRecommenbs from "../ChefRecommenbs/ChefRecommenbs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <ChefRecommenbs />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
