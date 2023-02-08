import React from "react";
import NavBar from "../NavigationBar/NavBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CreatePost.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

//imported from the react-quill website
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

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
    const response = await fetch("http://localhost:4000/api/user/Post", {
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
          <ReactQuill
            value={content}
            modules={modules}
            formats={formats}
            onChange={(newValue) => setContent(newValue)}
          />
          <button>Create Post</button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
