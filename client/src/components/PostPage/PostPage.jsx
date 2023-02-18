import React from "react";
import NavBar from "../NavigationBar/NavBar";
import { useState } from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import "./PostPage.css";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://blogger-trigger-api.onrender.com/api/user/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <>
      <NavBar />
      <div className="post-page-container">
        <h1>{postInfo.title}</h1>
        <div className="authortime">
          <div className="author">Author@{postInfo.author.username}</div>
          <div className="date">
            {formatISO9075(new Date(postInfo.createdAt))}
          </div>
          {userInfo.id === postInfo.author._id && (
            <div className="edit-button">
              <Link id="edit" to={`/edit/${postInfo._id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                Edit this Post
              </Link>
            </div>
          )}
        </div>
        <div className="post-image">
          <img
            src={`http://localhost:4000/${postInfo.cover}`}
            alt="post-image"
          />
        </div>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />
      </div>
    </>
  );
};

export default PostPage;
