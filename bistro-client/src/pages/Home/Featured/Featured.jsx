import SectionTitle from "./../../../Components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured-item  relative">
      <div className="absolute z-10 inset-0 bg-slate-800/60"></div>
      <div className="relative z-20 py-10">
        <SectionTitle subHeading="Check it out" heading="Featured Items" />
        <div className=" md:flex justify-center items-center py-8 px-16">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 20029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              odit debitis illum harum. Culpa libero, corporis voluptatibus
              dolores voluptate exercitationem? Laboriosam eveniet accusamus
              harum enim labore laudantium temporibus, maxime fuga odit quo
              quam, quis totam accusantium veniam. Fugit impedit facere placeat
              nam eum deleniti odio reiciendis error, ipsam neque! Hic!
            </p>
            <button className="btn btn-outline border-0 border-b-4 border-yellow-500 mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
