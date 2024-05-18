import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import ChefCard from "./ChefCard";

const ChefRecommenbs = () => {
  return (
    <div>
      <SectionTitle subHeading="Should Try" heading="Chef Recommenbs" />

      <div className="grid md:grid-cols-3 gap-2">
        <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard />
      </div>
    </div>
  );
};

export default ChefRecommenbs;
