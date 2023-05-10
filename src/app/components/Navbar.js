import React from "react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "What we offer",
    },
    {
      id: 4,
      link: "Why us",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div
      name="navbar"
      className="flex flex-row w-full h-20 bg-black text-white "
    >
      <div className="flex flex-col px-4 py-4 ">
        <h1 className="text-white ">Doyse Education</h1>
      </div>
      <div>
        <ul className="flex flex-row justify-center">
          {links.map((id, link) => {
            <li key={link.id} className=" px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105">
              {link}
            </li>;
          })}
        </ul>
      </div>
      <div>home</div>
    </div>
  );
};

export default Navbar;
