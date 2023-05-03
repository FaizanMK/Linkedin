import { Avatar } from "@mui/material";
import React from "react";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="p-4 bg-white mb-2 rounded-lg">
      <div className="flex mb-3">
        <Avatar />
        <div className="ml-3">
          {/* post info */}
          <h2 className="text-base">Faizan khan</h2>
          <p className="text-gray-400 text-xs">Description</p>
        </div>
      </div>
      <div className="">
        {/* post body */}
        <p>Message goes here</p>
      </div>
    </div>
  );
}

export default Post;
