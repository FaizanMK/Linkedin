import { Avatar } from "@mui/material";
import React from "react";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="flex text-xs text-gray-400 font-bold cursor-pointer mb-1 p-1 hover:bg-gray-200 hover:rounded-xl hover:cursor-pointer hover:text-black ">
      <span className="mr-2 ml-1">#</span>
      <p>{topic} </p>
    </div>
  );
  return (
    <div className="mt-2 stikcy top-44 flex-grow-[0.2] rounded-lg h-fit ">
      <div className="flex flex-col text-center border border-gray-400 border-solid rounded-t-xl rounded-r-xl bg-white pb-3 border-b-0 ">
        {/* Sidebar top */}
        <img
          src="https://thumbs.dreamstime.com/b/colorful-powder-explosion-white-background-abstract-pastel-color-dust-particles-splash-152468326.jpg"
          alt=""
          className="-mb-1 w-full h-14 rounded-t-xl rounded-r-xl object-cover"
        />
        <Avatar class="h-10" />
        <h2 className="text-lg">Faizan</h2>
        <h4 className="text-xs text-gray-400">Faizan's bio</h4>
      </div>
      <div className="p-2 mb-2 border border-solid border-gray-400 bg-white rounded-b-lg	">
        {/* sidebar stats */}
        <div className="mt-2 flex justify-between ">
          {/* sidebar stat */}
          <p className="my-styles">Who viewed you</p>
          <p className="my-styles font-bold text-blue-700">
            {/* stat number */}
            2,543
          </p>
        </div>
        <div className="mt-2 flex justify-between">
          {/* sidebar stat */}
          <p className="pr-2 my-styles ">views on your post</p>
          <p className="my-styles font-bold text-blue-700">
            {/* stat number */}
            2,448
          </p>
        </div>
      </div>
      <div className=" text-left p-2 bg-white rounded-lg border border-solid border-gray-400 mt-3">
        <p className="text-sm pb-[10px]">Recent</p>

        {recentItem("React js")}
        {recentItem("programming")}
        {recentItem("Software Engineering")}
        {recentItem("Developer")}
        {recentItem("Designer")}
      </div>
    </div>
  );
}

export default Sidebar;
