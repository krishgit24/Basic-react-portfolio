import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-300 p-4">
      <nav className="container flex justify-between items-center">
        <h1 className="text-3xl pl-3 font-serif">My Portfolio</h1>
        <ul className="flex flex-col px-6 gap-2 text-black sm:flex-row sm:gap-6 font-bold">

          <li><a href="#about" className=" hover:underline ease-in-out hover:decoration-yellow-300 decoration-2 hover:transition duration-300 underline-offset-4">About</a></li>

          <li><a href="#projects" className=" hover:underline ease-in-out hover:decoration-yellow-300 decoration-2 hover:transition duration-300 underline-offset-4 ">Projects</a></li>

          <li><a href="#Footer" className=" hover:underline ease-in-out hover:decoration-yellow-300 decoration-2 hover:transition duration-300 underline-offset-4 ">Contact</a></li>

        </ul>
      </nav>
      
    </header>
  );
};

export default Header;
