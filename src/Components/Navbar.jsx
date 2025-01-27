import React, { useState } from "react";
import ReactLogo from "../Data/react-logo-png.png";
import { FaAlignJustify } from "react-icons/fa";
import { links, socials } from "../Data/data";
import { FaAlignRight } from "react-icons/fa";

function Navbar() {
  const [showLink, setShowLink] = useState(false);
  return (
    <div className="relative">
      {showLink && (
        <div className="navSidebar h-0 absolute right-0 top-0 w-full mt-16 md:hidden">
          <ul className="flex flex-col pt-6 pl-3 space-y-5 bg-white/90 justify-around items-start">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <nav className="w-100">
        <div className="flex justify-between items-center border md:px-3">
          <div className="navLogo flex">
            <img src={ReactLogo} className="w-14" alt="logo" title="Logo" />
          </div>
          <div className="navLink hidden md:flex">
            <ul className="flex justify-around items-center space-x-4">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navSocial">
            <ul className="flex justify-around items-center space-x-4">
              {socials.map((social) => {
                const { id, url, icon } = social;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            className="navToggle w-12 md:hidden"
            onClick={() => setShowLink(!showLink)}
          >
            {showLink ? <FaAlignRight /> : <FaAlignJustify />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
