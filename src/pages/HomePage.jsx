import React from "react";
import Counter from "../challanges/Easy/Counter";
import ImageGallery from "../challanges/Easy/ImageGallery";
import Accordion from "../challanges/Easy/Accordion";
import SimpleAccordian from "../challanges/Easy/SimpleAccordian";
import GuessTheNumber from "../challanges/Easy/GuessTheNumber";
import StarRating from "../challanges/Easy/StarRating";






const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Easy */}
      {/* <Counter /> */}
      {/* <ImageGallery /> */}
      {/* <Accordion /> */}
      {/* <SimpleAccordian /> */}
      {/* <GuessTheNumber /> */}
      <StarRating />
    </div>
  );
};

export default HomePage;
