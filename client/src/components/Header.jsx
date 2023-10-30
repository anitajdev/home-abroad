import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../UserContext.jsx";
import logo from "../assets/icons/logo.png";

'use client';
import { Button } from 'flowbite-react';
import { HiOutlineArrowDown } from 'react-icons/hi';

const Header = () => {

  const {user} = useContext(UserContext);

  return (
    
    <header className="flex justify-between padding-x py-6">
      <Link to={'/'} className="flex items-center gap-1">
        <img src={logo} alt="logo" className="w-40 h-15"/>
      </Link>
      <Button color="gray" className="w-96 max-lg:hidden h-10 items-center mt-3 text-white bg-red-500 border border-white shadow-md shadow-gray-300">
          <a href="#places" className="text-xl">Find your next destination</a>
          <HiOutlineArrowDown className="ml-6 h-5 w-5 font-bold" />
      </Button>
      <Link to={user?'/account':'/login'} className="flex items-center gap-2 border border-gray-500 rounded-2xl px-5 max-lg:px-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
        {!!user && (
          <div className="text-md font-semibold">
            {user.name}
          </div>
        )}
      </Link>
    </header>
  )
}

export default Header