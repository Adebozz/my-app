import React from "react";

const Navbar = () => {
    const links = [
        {}
    ]
  return (
    <div
      name="navbar"
      className="flex flex-col w-full h-20 bg-black text-white "
    >
      <div className="flex flex-col px-4 py-4 ">
        <h1 className="text-white ">Doyse Education</h1>
      </div>
      <div>
        <ul>
            <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
