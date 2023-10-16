import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { BiRightArrowCircle } from "react-icons/bi";
import { GrProductHunt } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";
import { GiStarProminences } from "react-icons/gi";
import { BiSolidHelpCircle } from "react-icons/bi";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="main_dashboard">
        <div className="main_name">
          <BiSolidDashboard/>
          <h3>Dashboard</h3>
        </div>
        <div className="sub">
          <div className="sub_names" >
            <div className="icon_name" id="shade">
              <RxDashboard /> <h5>Dashboard</h5>
            </div>
          </div>
          <div className="sub_names">
          <div className="icon_name">
            <GrProductHunt /> <h5>Product</h5>
            </div>
            <BiRightArrowCircle />
          </div>
          <div className="sub_names">
          <div className="icon_name">
            <IoIosPeople /> <h5>Customers</h5>
            </div>
            <BiRightArrowCircle />
          </div>
          <div className="sub_names">
          <div className="icon_name">
            <FaMoneyCheck /> <h5>Income</h5>
            </div>
            <BiRightArrowCircle />
          </div>
          <div className="sub_names">
          <div className="icon_name">
            <GiStarProminences /> <h5>Promote</h5>
            </div>
            <BiRightArrowCircle />
          </div>
          <div className="sub_names">
          <div className="icon_name">
            <BiSolidHelpCircle /> <h5>Help</h5>
            </div>
            <BiRightArrowCircle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
