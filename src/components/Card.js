import React from "react";
import ImageCard from "./ImageCard";

const Card = (props) => {
   let imageDisplay = props.datas;

   let results = imageDisplay.map((image, index) => {
      return <ImageCard imageData={image} key={image.id} />;
   });

   return <div className="result">{results}</div>;
};

export default Card;
