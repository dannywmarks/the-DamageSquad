import React, { useState } from "react";
import moment from "moment";
import Image from "next/image";
import Logo from "../public/gfFullTransparent.png";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 border-black border-l-8 border-r-8 border-t-8 darkerBlueBackground overflow-x-auto">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ml-3">
            <div
              className="flex justify-center align-center items-center"
            >
              <Image src={Logo} height="40px" width="45px" className="" />
              <Link href="/" forwardRef>
                <a className="text-lg font-bold leading-relaxed  place-items-center whitespace-nowrap uppercase text-white">
           
                  <p className="overflow-x-auto ml-3">THE DAMAGE SQUAD</p>
                  {/* {moment().format("dddd, MMMM Do, YYYY")} */}
                </a>
              </Link>
            </div>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.instagram.com/dannydamage"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />

                  <span className="ml-2">Photo</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.twitter.com/dannydevage"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} />

                  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://youtube.com"
                >
                  <FontAwesomeIcon icon={["fab", "youtube"]} />

                  <span className="ml-2">VIDEO</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
