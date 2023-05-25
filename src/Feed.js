import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import db from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  // reference to db
  // const postsRef = collection(db, "posts");
  // const todosRef = query(collection(db, "todos"), );

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setPosts(data);
      }
    );

    // Unsubscribe when component unmounts
    return () => unsub();
  }, []);

  const sendPost = async (e) => {
    console.log("i am working");

    e.preventDefault();
    await addDoc(collection(db, "posts"), {
      name: user?.displayName || null,
      description: user?.email || null,
      message: input,
      photoUrl: user?.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    console.log("am i working");
    console.log(user);

    setInput("");
  };
  return (
    <div className="flex-[0.6] my-0 mx-5">
      <div className="flex bg-white p-2 pb-5 rounded-xl mb-5 ">
        <div className="flex border border-gray-400 border-solid rounded-[30px] p-2 text-gray-400 pl-4">
          <CreateIcon />
          <form className="flex w-full">
            <input
              className="border border-gray-400 border-none flex-1 ml-2 outline-0 font-semibold "
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} hidden type="submit">
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            message={message}
            description={description}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      {/* <Post
          name="Faizan Khan"
          description="hello everyone, testing!!"
          message="wow! Linkedin"
        /> */}
    </div>
  );
}

export default Feed;
