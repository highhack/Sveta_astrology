import React from "react";
import mainPhoto from "./../../public/images/mainPhoto.jpg";
import mainPhoto1 from "./../../public/images/mainPhoto1.png";
import astrologyCircle from "./../../public/images/astrologyCircle.png";
import mainPhotoColor from "./../../public/images/mainPhotoColor.jpg";
import mainPhotoColor1 from "./../../public/images/mainPhotoColor1.jpg";
import Image from "next/image";
import WallClock from "../WallClock/WallClock";

const Main = ({ setPage }) => {
  return (
    <div className="w-full h-[100vh] p-5 relative flex justify-center items-center">
      <div className="w-full h-full border-[2px] border-black rounded-[10px]">
        <div className="absolute flex gap-[10px] top-[60px] right-[100px] z-[20]">
          <button
            className="border-[1px] border-black p-[2px] w-[70px] rounded-[15px] flex justify-center items-center"
            onClick={() => setPage("first-page")}
          >
            first
          </button>
          <button
            className="border-[1px] border-black p-[2px] w-[70px] rounded-[15px] flex justify-center items-center"
            onClick={() => setPage("second-page")}
          >
            second
          </button>
        </div>

        <div className="w-[500px] p-10 text-8">Svitlana Goldin</div>

        <Image
          src={mainPhotoColor}
          className="rounded-[20px] w-[400px] h-[550px] absolute left-10 bottom-10"
          alt=""
        />

        {/* <Image
          alt=""
          src={mainPhotoColor1}
          className="rounded-[20px] w-[450px] h-[650px]  absolute left-10 bottom-10 "
        /> */}

        <Image
          src={mainPhoto}
          alt=""
          className="rounded-[20px] w-[400px] h-[550px] hover:opacity-0 hover:transition-opacity duration-1000 ease-in-out absolute left-10 bottom-10"
        />

        {/* <Image
          src={mainPhoto1}
          alt=""
          className="rounded-[20px] w-[450px] h-[650px] hover:opacity-0 absolute left-10 bottom-10 hover:opacity-0 hover:transition-opacity duration-1000 ease-in-out"
        /> */}

        <div className="absolute left-[45%] top-[200px]">
          <WallClock />
          <Image
            src={astrologyCircle}
            alt=""
            className="h-10 w-10 w-[340px] h-[340px] max-w-[none] absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
