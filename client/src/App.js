import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import AsideInfo from "./components/Aside/AsideInfo";
import Blogs from "./components/Blogs/Blogs";
import RegisterForm from "./components/Register/RegisterForm";
import LoginForm from "./components/Login/LoginForm";
import Footer from "./components/Footer/Footer";
import PostPage from "./components/PostPage/PostPage";
import UserContextProvider from "./components/UserContext";
import CreatePost from "./components/CreatePost/CreatePost";
import EditPost from "./components/EditPost/EditPost";

function App() {
  return (
    <div className="container">
      <div className="Header">
        <Header />
      </div>
      <div className="Aside">
        <AsideInfo />
      </div>
      <div className="Blogs">
        <UserContextProvider>
        <Routes>
            <Route index path="/" element={ <Welcome/> } />
            <Route path="/Register" element={ <RegisterForm/> } />
            <Route path="/Login" element={ <LoginForm/> } />
            <Route path="/Home" element={ <Blogs/> } />
            <Route path="/Create" element={ <CreatePost/> } />
            <Route path="/post/:id" element={ <PostPage/> } />
            <Route path="/edit/:id" element={ <EditPost/> } />
        </Routes>
        </UserContextProvider>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
