import React from "react";

const NavList = () => {
  return (
    <ul className="bg-C_Green h-1/2 p-2 m-1 text-lg text-C_TextWhiteDull font-semibold flex flex-col gap-2 justify-center rounded-lg lg:flex-row">
      <li className="">
        <a href="/about">Blog</a>
      </li>
      <li className="">
        <a href="/portfolio">Services</a>
      </li>
      <li className="">
        <a href="/contact">About Us</a>
      </li>
      <li className="">
        <a href="/contact">Career</a>
      </li>
      <li className="">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavList;
