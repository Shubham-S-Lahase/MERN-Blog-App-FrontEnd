import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../NavigationBar/NavBar";
import Post from "../Post/Post";
import "./Blogs.css";

const Blogs = () => {
const [posts, setPosts] = useState([]);
useEffect(() => {
  fetch('https://blogger-trigger-api.onrender.com/api/user/get-post').then(response => {
    response.json().then(posts => {
      setPosts(posts);
      console.log(posts);
    });
  });
}, []);

  return (
    <>
    <NavBar/>
      <div className="blogs">
           {posts.length > 0 && posts.map(post => (
            <Post key={post._id} {...post} />
           ))}
      </div>
    </>
  );
};

export default Blogs;
