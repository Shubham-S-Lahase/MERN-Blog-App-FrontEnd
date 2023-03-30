import React from "react";
import NavBar from "../NavigationBar/NavBar";
import "./CreatePost.css";
import Editor from "../Editor";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setfiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
   
    e.preventDefault();
    const response = await fetch("https://blogger-trigger-api.onrender.com/api/user/Post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/Home"} />;
  }


  return (
    <>
      <NavBar />
      <div className="create-post-container">
        <form onSubmit={createNewPost}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <input type="file" onChange={(e) => setfiles(e.target.files)} />
          <Editor value={content} onChange={setContent}/>
          <button>Create Post</button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
