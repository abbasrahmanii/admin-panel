import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGlobe, faGear } from "@fortawesome/free-solid-svg-icons";

import avatar from "../../images/me.jpg";

const Topbar = () => {
  return (
    <div className="topbar w-full h-12 bg-white sticky top-0 z-50">
      <div className="topbarWrapper h-full px-5 flex items-center justify-between">
        <div className="topLeft">
          <span className="logo font-bold text-3xl text-blue-900 cursor-pointer">
            Abbas
          </span>
        </div>
        <div className="topRight flex items-center space-x-2">
          <div className="topbarIconContainer relative cursor-pointer text-gray-700">
            <FontAwesomeIcon icon={faBell} />
            <span className="topIconBag absolute -top-1 right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              2
            </span>
          </div>
          <div className="topbarIconContainer relative cursor-pointer text-gray-700">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div className="topbarIconContainer relative cursor-pointer text-gray-700">
            <FontAwesomeIcon icon={faGear} />
          </div>
          <img
            src={avatar}
            alt="Avatar"
            className="topAvatart w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
