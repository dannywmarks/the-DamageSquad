import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import Logo from "../public/damageFinalWhite.png";
import Image from "next/image";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="mx-autopx-10 border-black border-l-8 border-r-8 border-b-4 w-full lightBlueBackground">
      <div className="inline-block border-black headerImg">
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              forwardRef
            >
              <span className="md:float-right mt-2 align-middle text-black m-4 mr-8 md:mt-2  cursor-pointer text-2xl uppercase  pt-5">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="block p-5 ">
          <Image className="" src={Logo} width="2000px" height="950px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
