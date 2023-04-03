/* eslint-disable jsx-a11y/anchor-is-valid */
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../src/Components/home/home";
import { Register } from "./Components/register/register";
import { Login } from "./Components/register/login";
import { Viewposts } from "./Components/posts/viewposts";
import { Post } from "./Components/posts/post";
import { Header } from "./Components/home/header";
import { AuthProvider } from "./Components/context";
import { Profile } from "./Components/profile/Profile";
import { Blogs } from "./Components/blogs/blogs";
import { initialState } from "./Components/context/reducer";
import { Addposts} from "./Components/posts/Addposts"
import { React, useEffect } from "react";
import ProfileData from "./Components/profile/ProfileData";


function App() {
  
  let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : "";
  let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).accessToken
    : "";
  if (user && token) {
    if (initialState.isAuthenticated === false){
      initialState.isAuthenticated = !initialState.isAuthenticated;
    }   
  }
  return (
    <>
      <AuthProvider>
        <Header />
        <div className="isolate ">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ViewPosts" element={<Viewposts />} />
            <Route path="/ViewPosts/:id" element={<Post />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/ViewProfile" element={<ProfileData />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/CreatePost" element={<Addposts />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
