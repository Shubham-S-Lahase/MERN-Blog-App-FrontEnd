import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../NavigationBar/NavBar";
import Post from "../Post/Post";
import "./Blogs.css";


const Blogs = () => {
useEffect(() => {
  fetch('http://localhost:4000/api/user/getPosts').then(response => {
    response.json().then(posts => {
      console.log(posts);
    });
  });
}, []);
  return (
    <>
    <NavBar/>
      <div className="blogs">
            <Post />
            <Post />
      </div>
    </>
  );
};

export default Blogs;
