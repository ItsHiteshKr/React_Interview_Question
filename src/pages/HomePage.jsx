import React from "react";
import Counter from "../challanges/Easy/Counter";
import ImageGallery from "../challanges/Easy/ImageGallery";
import Accordion from "../challanges/Easy/Accordion";
import SimpleAccordian from "../challanges/Easy/SimpleAccordian";
import GuessTheNumber from "../challanges/Easy/GuessTheNumber";
import StarRating from "../challanges/Easy/StarRating";
import Telephone_Formatter from "../challanges/Easy/Telephone_Formatter";
import String_Transformers from "../challanges/Easy/String_Transformers";




const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-7">
      {/* Easy */}
      {/* <Counter /> */}
      {/* <ImageGallery /> */}
      {/* <Accordion /> */}
      {/* <SimpleAccordian /> */}
      {/* <GuessTheNumber /> */}
      <StarRating />
      {/* <Telephone_Formatter /> */}
      <String_Transformers />
    </div>
  );
};

export default HomePage;
