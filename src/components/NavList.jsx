import React from "react";

const NavList = () => {
  return (
    <ul className="flex flex-col items-center justify-between lg:flex-row">
      <li className="border-b border-gray-400 my-8 uppercase">
        <a href="/about">About</a>
      </li>
      <li className="border-b border-gray-400 my-8 uppercase">
        <a href="/portfolio">Portfolio</a>
      </li>
      <li className="border-b border-gray-400 my-8 uppercase">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavList;
