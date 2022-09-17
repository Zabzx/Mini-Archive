import React, { useState, useContext } from "react";
import './dashboard.css';
import TempPFP from '../../assets/temp-pfp.jpg'
import { Link } from "react-router-dom";
import LeftSidebar from "../Left-Sidebar component/Left-Sidebar";
import { FiSettings } from 'react-icons/fi'
import twitterLogo  from '../../assets/twitterLogo.png'
import githubLogo  from '../../assets/githubLogo.png'
import porgfolioLogo  from '../../assets/portfolioLogo.png'
import { AiOutlinePicture, AiFillCamera, AiOutlinePaperClip, AiFillHeart, AiOutlineMessage, AiOutlineQuestionCircle } from 'react-icons/ai'
// Context
import { PostContext } from "../../context/PostContext";
import { UserContext } from "../../context/User";
import { LikedPostContext } from "../../context/LikedPostsContext";
import MainFeed from "../MainFeed/MainFeed";
import RightSidebar from "../RightSidebar/RightSidebar";
import Nav from "../Nav/Nav";

function Dashboard() {
  // Context
  const [user, setUser] = useContext(UserContext);
  const [likedPosts, setLikedPosts] = useContext(LikedPostContext);
  
  return (
    <>
    <div className="home">
    <Nav />
    
    {/* // Main content */}
    <div className="main home-container">
      <LeftSidebar />
      <MainFeed />
      <RightSidebar />
    </div>
    </div>
    </>
  );
}

export default Dashboard;
