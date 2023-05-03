import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
function Feed() {
  return (
    <div className="flex-[0.6] my-0 mx-5">
      <div className="flex bg-white p-2 pb-5 rounded-xl mb-5 ">
        <div className="flex border border-gray-400 border-solid rounded-[30px] p-2 text-gray-400 pl-4">
          <CreateIcon />
          <form className="flex w-full">
            <input
              className="border border-gray-400 border-none flex-1 ml-2 outline-0 font-semibold "
              type="text"
            />
            <button hidden type="submit">
              send
            </button>
          </form>
        </div>
        <div className="flex justify-evenly">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#7FC15E"
          />
        </div>
      </div>
      <Post
        bame="Faizan Khan"
        description="hello everyone, testing!!"
        message="wow! Linkedin"
      />
    </div>
  );
}

export default Feed;
