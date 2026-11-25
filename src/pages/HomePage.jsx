import React from "react";
// Easy
import Counter from "../challanges/Easy/Counter";
import ImageGallery from "../challanges/Easy/ImageGallery";
import Accordion from "../challanges/Easy/Accordion";
import SimpleAccordian from "../challanges/Easy/SimpleAccordian";
import GuessTheNumber from "../challanges/Easy/GuessTheNumber";
import StarRating from "../challanges/Easy/StarRating";
import Telephone_Formatter from "../challanges/Easy/Telephone_Formatter";
import String_Transformers from "../challanges/Easy/String_Transformers";
import Steppers from "../challanges/Easy/Steppers";
import TicTac_Toe from "../challanges/Easy/TicTac_Toe";
// Medium
import Calculator from "../challanges/medium/Calculator";
import Traffic_Lights from "../challanges/medium/Traffic_Lights";
import Toast_Popup from "../challanges/medium/Toast_Popup";
import Modal_Popup from "../challanges/medium/Modal_Popup";
import Password_Strength from "../challanges/medium/Password_Strength";
import Grid_lights from "../challanges/medium/Grid_lights";
import Column_Table from "../challanges/medium/Column_Table";
import Todo_List from "../challanges/medium/Todo_List";
import StopWatch from "../challanges/medium/StopWatch";
import Quiz_App from "../challanges/medium/Quiz_App";

// hard

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-7">
      {/* Easy */}
      {/* <Counter /> */}
      {/* <ImageGallery /> */}
      {/* <Accordion /> */}
      {/* <SimpleAccordian /> */}
      {/* <GuessTheNumber /> */}
      {/* <StarRating /> */}
      {/* <Telephone_Formatter /> */}
      {/* <String_Transformers /> */}
      {/* <Steppers /> */}
      {/* <TicTac_Toe /> */}

      {/* Medium */}
      {/* <Calculator /> */}         {/* Abhi complete karna hai */}
      {/* <Traffic_Lights /> */}
      {/* <Toast_Popup /> */}
      {/* <Modal_Popup /> */}
      {/* <Password_Strength /> */}
      {/* <Grid_lights /> */}
      {/* <Column_Table /> */}
      {/* <Todo_List /> */}
      <StopWatch />
      <Quiz_App />
      {/* Hard */}

    </div>
  );
};

export default HomePage;
