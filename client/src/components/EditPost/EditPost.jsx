import React from "react";
import { useState } from "react";
import Editor from "../Editor";
import NavBar from "../NavigationBar/NavBar";
import { Navigate, useParams } from "react-router-dom";
import "./EditPost.css";
import { useEffect } from "react";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setfiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/api/user/Post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        console.log(postInfo);
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      });
    });
  }, []);

  async function updatePost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if(files?.[0]) {
        data.set("file", files?.[0]);
    }
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/user/Post",{
        method: 'PUT',
        body: data,
        credentials: "include"
    });
    if(response.ok){
        setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }

  return (
    <>
      <NavBar />
      <div className="update-post-container">
        <form onSubmit={updatePost}>
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
          <Editor value={content} onChange={setContent} />
          <button>Update Post</button>
        </form>
      </div>
    </>
  );
};

export default EditPost;
