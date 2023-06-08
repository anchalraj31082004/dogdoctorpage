import React from "react";
import Button from "./Button";
import { BiPlayCircle } from "react-icons/bi";

const AnimalLover = (props) => {
  return (
    <div
      className={`flex ${props.fdirection} justify-evenly items-center h-screen`}
    >
      <div className="flex flex-col max-w-xl gap-12">
        <h2 className="font-medium text-6xl">
          As a Vetarinarian and Lover of Animal
        </h2>
        <h4 className="font-normal text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptatum corporis dolorem minima laborum tempora.
        </h4>
        <div>
        <Button text="Our Service" bor={`border`} borRad={`rounded-md`} />
        </div>
      </div>
      <div
        className={`bg-[#ffc400cf] bg-[url("/assets/${props.img}")] bg-cover bg-blend-multiply bg-center h-[500px] w-[530px] pl-[240px] pt-[230px]`}
      >
        <BiPlayCircle className="text-white text-5xl" />
      </div>
    </div>
  );
};

export default AnimalLover;
