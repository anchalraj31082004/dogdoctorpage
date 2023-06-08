import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex justify-around items-center bg-[#fcc302] h-[calc(100vh-80px)] text-white ">
      <div className="gap-20 flex flex-col">
        <div className="font-bold text-6xl max-w-3xl">
          <h1>FIRST I WANTED TO BE A VETARINARIAN</h1>
        </div>
        <div className="text-2xl max-w-3xl">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum
            optio ipsa sequi impedit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto, pariatur? Mollitia, fugit.
          </h4>
        </div>
        <div className="flex gap-10 justify-start items-center">
          <Button text="Contact Us" bor={`border-2`} borRad={`rounded-md`} />
          <Button
            bor={`border`}
            text="Our Service"
            borRad={`rounded-md`}
          />
        </div>
      </div>
      <div>
        <img src="/assets/heroKutta.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
