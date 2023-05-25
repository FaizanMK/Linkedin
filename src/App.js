import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //this useEffect is to keep user persistent...which means when we refresh even then user should be logged in
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.name,
            photoUrl: userAuth.photoUrl,
          })
        ); // ...
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="bg-bk flex flex-col items-center">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="flex mt-[35px] max-w[1200px] ml-5 mr-5">
          {/* App Body */}
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
