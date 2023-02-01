import React from "react";
import NavBar from "../NavigationBar/NavBar";
import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <div className="blogs">
        <NavBar/>
        <div className="post">
          <div className="image">
            <img
              src="https://techcrunch.com/wp-content/uploads/2023/01/Kittl-team.jpg?w=730&crop=1"
              alt=""
            />
          </div>
          <div className="text">
            <h2>
              This startup hopes to take on Canva, raising a $11.6M Series A for
              its design platform
            </h2>
            <p className="info">
              {/* <a className="author">Shubham Lahase</a> */}
              <time>2023/01/26 17:53</time>
            </p>
            <p className="summary">
              Despite Canva being worth in the region of $26 billion, it appears
              startups feel there is still plenty to be mined from this
              ;easy-to-use design platform’ arena. Admittedly, Professional
              Adobe tools remain fiddly for most people. Perhaps that’s why
              Berlin-based startup
            </p>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img
              src="https://techcrunch.com/wp-content/uploads/2023/01/Kittl-team.jpg?w=730&crop=1"
              alt=""
            />
          </div>
          <div className="text">
            <h2>
              This startup hopes to take on Canva, raising a $11.6M Series A for
              its design platform
            </h2>
            <p className="info">
              {/* <a className="author">Shubham Lahase</a> */}
              <time>2023/01/26 17:53</time>
            </p>
            <p className="summary">
              Despite Canva being worth in the region of $26 billion, it appears
              startups feel there is still plenty to be mined from this
              ;easy-to-use design platform’ arena. Admittedly, Professional
              Adobe tools remain fiddly for most people. Perhaps that’s why
              Berlin-based startup
            </p>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img
              src="https://techcrunch.com/wp-content/uploads/2023/01/Kittl-team.jpg?w=730&crop=1"
              alt=""
            />
          </div>
          <div className="text">
            <h2>
              This startup hopes to take on Canva, raising a $11.6M Series A for
              its design platform
            </h2>
            <p className="info">
              {/* <a className="author">Shubham Lahase</a> */}
              <time>2023/01/26 17:53</time>
            </p>
            <p className="summary">
              Despite Canva being worth in the region of $26 billion, it appears
              startups feel there is still plenty to be mined from this
              ;easy-to-use design platform’ arena. Admittedly, Professional
              Adobe tools remain fiddly for most people. Perhaps that’s why
              Berlin-based startup
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
