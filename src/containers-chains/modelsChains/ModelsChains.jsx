import React from "react";
import "./modelsChains.css";
import { Article } from "../../components";
import images from '../../assets/Chains/chainsModels'; // Import the formatted images array

const ModelsChains = () => {
  return (
    <div className="prt__modelsChains section__margin gradient__bg">
      <div className="prt__modelsChains-heading">
        <h1 className="gradient__text"> The models I made </h1>
        <p>
          All of the game assets within chains were made by yours truly, using blender.
          There are far too many to show them all on this website, so I'll only show the most interesting ones.
        </p>
      </div>
      <div className="prt__modelsChains-container">
        {images.map((item, index) => (
          <Article key={index} imgUrl={item.image} link="/" title={item.name} paragraph="" />
        ))}
      </div>
    </div>
  );
};

export default ModelsChains;
