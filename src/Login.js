import React, { useState } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      alert("please Enter a full name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // Signed in
        const user = auth.currentUser;
        updateProfile(user, {
          displayName: name,
          photoUrl: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(error);
        // ..
      });
  };

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // Signed in
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        ); // ...
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="grid place-items-center ml-auto mr-auto pt-[100px] pb-[100px]">
      <img
        className="object-contain h-[70px] mt-5 mb-5"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzAK24wF2WVVW41K2RK5VplVFvj-5hvh81roHk4Iu&s"
        alt=""
      />
      <form className="flex flex-col">
        <input
          className="w-[350px] h-[50px] text-xl pl-2 mb-2 rounded-md "
          type="text"
          placeholder="Full Name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-[350px] h-[50px] text-xl pl-2 mb-2 rounded-md "
          type="text"
          placeholder="Profile pic URL (Optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          className="w-[350px] h-[50px] text-xl pl-2 mb-2 rounded-md "
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[350px] h-[50px] text-xl pl-2 mb-2 rounded-md "
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-[365px] h-[50px] text-lg text-[#fff] bg-[#0074b1] rounded-md"
          type="submit"
          onClick={loginToApp}
        >
          Sign In
        </button>
      </form>
      <p className="mt-5">
        Not a member?{" "}
        <span className="cursor-pointer text-[#0177b7]" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
