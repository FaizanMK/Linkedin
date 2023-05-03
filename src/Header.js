import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="flex justify-evenly lg:justify-start border-b border-gray-300 py-2 bg-white w-full sticky top-0 z-nn ">
      <div className="flex">
        {/* lEFT SECTION */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
          alt="Linkedin logo"
          // height={50}
          // width={50}
          className=" h-10 object-contain sm:mt-2 sm:h-12 lg:h-16 lg:my-auto"
        />
        <div className="flex items-center rounded h-8 w-[133px] text-gray-500 bg-gray-200 sm:py-5 sm:mt-2 lg:w-56">
          {/* search bar */}
          <SearchIcon />
          <input
            type="text"
            className="border-none outline-none bg-transparent focus:w-full  "
          />
        </div>
      </div>

      <div className="flex lg:items-start lg:justify-evenly lg:px-10 lg:mx-10 lg:w-full ">
        {/* RIGHT SECTION */}
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          title="Babar"
          avatar="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320400/320448.png"
        />
      </div>
    </div>
  );
}

export default Header;
