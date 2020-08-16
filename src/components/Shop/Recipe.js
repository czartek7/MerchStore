import React from "react";

const Recipe = ({ title, desc, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: desc }}></p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
