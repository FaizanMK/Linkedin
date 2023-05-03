import React from "react";
import Avatar from "@mui/material/Avatar";

function HeaderOption({ avatar, title, Icon }) {
  return (
    <div className="flex flex-col items-center mr-1 cursor-pointer hover:text-red-700 ">
      {Icon && <Icon class=" !text-4xl object-contain !w-8 " />}
      {avatar && (
        <Avatar
          // sx={{ width: 45, height: 45 }}
          class="hidden object-contain !h-4 !w-4 sm:block sm:mt-[14px]  "
          src={avatar}
        />
      )}
      <h3 className="hidden text-[6px] font-[50] sm:block sm:text-black sm:text-lg sm:mr-2">
        {title}
      </h3>
    </div>
  );
}

export default HeaderOption;
