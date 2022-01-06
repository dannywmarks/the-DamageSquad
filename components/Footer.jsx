import React from "react";


import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

const Footer = () => {
  return (
    <div className="darkerBlueBackground mx-autopx-10 border-l-8 border-r-8 border-b-8 border-black text-white p-10 flex">
      <div className="flex flex-col lg:flex-row  list-none mx-auto justify-center items-center ">
        <div className="flex justify-between space-x-1">
          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            href="https://www.instagram.com/dannydamage"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="text-lg leading-lg text-white "
            />
          </a>

          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            href="https://twitter.com/dannydevage"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="text-lg leading-lg text-white "
            />
          </a>

          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            href="www.youtube.com/dannydamage"
          >
            <FontAwesomeIcon
              icon={["fab", "youtube"]}
              className="text-lg leading-lg text-white "
            />
          </a>

          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            href="mailto:dannydamage@me.com"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-lg leading-lg text-white "
            />
          </a>

          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            href="https://www.facebook.com/groups/thedamagesquad"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="text-lg leading-lg text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
