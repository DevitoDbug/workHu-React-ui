/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavList from "./NavList";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const handleToggleView = () => {
    setIsNavOpen((prev) => !prev); // toggle the state value
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-3 px-2">
      <a href="/">Artlife</a>
      <nav>
        <section className="lg:hidden">
          <button onClick={handleToggleView}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-[120%] text-C_TextBlack"
            />
          </button>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="bg-red-400 CROSS-ICON absolute top-0 right-0 p-2"
              onClick={handleToggleView}
            >
              <FontAwesomeIcon
                icon={faClose}
                className="text-[150%] text-C_TextBlack"
              />
            </div>
            <NavList />
          </div>
        </section>
        <div className="hidden lg:block">
          <NavList />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
