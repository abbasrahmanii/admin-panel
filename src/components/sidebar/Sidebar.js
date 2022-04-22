import {
  faArrowTrendUp,
  faChartLine,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sidebar = () => {
  return (
    <div
      className="sidebar flex-1 bg-red-200"
      style={{ height: `calc(100vh - 3rem)` }}
    >
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FontAwesomeIcon icon={faList} />
              Home
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon icon={faChartLine} />
              Analystics
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon icon={faArrowTrendUp} />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
