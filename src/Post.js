import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="p-4 bg-white mb-2 rounded-lg">
      <div className="flex mb-3">
        <Avatar src={photoUrl}>{name?.[0]}</Avatar>
        <div className="ml-3">
          {/* post info */}
          <h2 className="text-base">{name}</h2>
          <p className="text-gray-400 text-xs">{description}</p>
        </div>
      </div>
      <div className="">
        {/* post body */}
        <p>{message}</p>
      </div>
      <div className="flex justify-evenly">
        {/* post buttons */}
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOption
          Icon={ChatBubbleOutlineOutlinedIcon}
          title="Comment"
          color="gray"
        />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
