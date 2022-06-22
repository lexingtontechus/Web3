import React from "react";
import Link from "next/link";

//import AnnounceKit from "announcekit-react";
//import Image from "next/image";
// components
//import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
//Images
//import ImgIco from "../public/ico_lxtgroup.svg";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-500 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              alt="Lexington Tech LLC"
              height="25"
              width="25"
              className="bg-pink-500 max-w-full rounded-lg shadow-xl inline-block"
              src="https://imgix.cosmicjs.com/74810d20-f0ee-11ec-8fb8-5d396858ac9b-logolxt.png"
            />{" "}
            <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                WEB3
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
