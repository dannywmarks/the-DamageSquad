import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import Logo from "../public/damageLogoNoFilter.png";
import Image from "next/image";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="lightBlueBackground mx-auto px-10  border-black border-l-4 border-r-4">
      <div className=" w-full inline-block border-black pb-4 pt-8 ">
        <div className="md:float-left block pl-4">
          <Link href="/">
            <Image src={Logo} height="100%" width="550px" />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-black m-4 mr-8 md:mt-2 font-semibold cursor-pointer text-2xl uppercase font-pixelDead">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
