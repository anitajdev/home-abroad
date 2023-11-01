import RomeImg from "../assets/carousel/rome.jpg";
import SantoriniImg from "../assets/carousel/santorini.jpg";
import BarcelonaImg from "../assets/carousel/barcelona.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";

'use client';
import { Carousel } from 'flowbite-react';
import { Button } from 'flowbite-react';

const Hero = () => {

  const {user} = useContext(UserContext);

  return (
    <div className="relative w-full h-[55rem] max-lg:h-[20rem]">
      <Carousel slideInterval={3000}>
      <img
        className="opacity-75"
        alt="rome image"
        src={RomeImg}
      />
      <img
        className="opacity-75"
        alt="santorini image"
        src={SantoriniImg}
      />
      <img
        className="opacity-75"
        alt="barcelona image"
        src={BarcelonaImg}
      />
      </Carousel>
      <div className="absolute top-40 left-40 max-lg:top-5 max-lg:left-4 max-xl:top-40 max-xl:left-10">
        <h1 className="flex flex-col max-lg:flex-row max-lg:gap-2 text-6xl max-lg:text-3xl font-bold">
          <span className="mb-4 text-red-500">Travel</span>
          <span className="mb-4">Rent</span>
          <span>Repeat</span>
        </h1>
      </div>
      <div className="absolute bottom-60 left-40 max-lg:-top-20 max-lg:left-5 max-sm:-top-20 max-sm:left-5 max-xl:left-10">
      <p className="mt-40 text-md font-semibold italic max-lg:text-sm">Find your new home anywhere in the world, <br /> enjoy new locations and create memories</p>
      <p className="mt-4 mb-5 text-xl ml-20 font-semibold italic max-lg:text-sm">or</p>
      <Link to={user?'/account/places/new':'/login'}>
        <Button color="gray" className="ml-3 bg-red-500 text-white lg:px-6 lg:py-2">Become a host</Button>
      </Link>
      </div>
    </div>
  );
}

export default Hero

