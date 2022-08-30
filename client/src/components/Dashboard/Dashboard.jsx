import React from "react";
import './dashboard.css';
import TempPFP from '../../assets/temp-pfp.jpg'
// React Icons
import { GoHome } from 'react-icons/go'
import { BsSearch, BsFillPeopleFill, BsChatDots, BsBell, BsTools } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { FiSettings } from 'react-icons/fi'
import twitterLogo  from '../../assets/twitterLogo.png'
import githubLogo  from '../../assets/githubLogo.png'
import porgfolioLogo  from '../../assets/portfolioLogo.png'
import { MdTagFaces } from 'react-icons/md';
import { AiOutlinePicture, AiFillCamera, AiOutlinePaperClip } from 'react-icons/ai'
import { FaHashtag } from 'react-icons/fa'
import { TiAt } from 'react-icons/ti'
function Dashboard() {

  return (
    <>
    {/* // Header */}
    <div className="home">
    <div className="home-nav">
      <div className="home-container home-flex">
      <div className="logo-and-search">

        <svg width="50" height="50" viewBox="0 0 630 514" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 454.31C9 451.81 271 175.31 180 34.3104C89 -106.69 303 512.81 365.5 438.81C428 364.81 422.5 -34.1896 456.5 5.8104C490.5 45.8104 544 518.31 629 511.31" stroke="#FF6884" strokeWidth="20"/>
          </svg>

          <div className="nav-search">
            <BsSearch className="search-icon" />
          <input type="text" className="" placeholder="Search" />
          </div>
      </div>

      <div className="nav-options">
        <div className="nav-option">
          <GoHome className="nav-icon" />
          <h4>Homepage</h4>
        </div>

        <div className="nav-option">
          <BsFillPeopleFill className="nav-icon" />
          <h4>Connections</h4>
        </div>

        <div className="nav-option">
          <BsChatDots className="nav-icon" />
          <h4>Messages</h4>
        </div>

        <div className="nav-option">
          <BsBell className="nav-icon" />
          <h4>Notifications</h4>
        </div>

        <div className="nav-option">
          <BsTools className="nav-icon" />
          <h4>Tools</h4>
        </div>
      </div>

      <div className="profile-dropdown-container">
        <div className="profile-dropdown">
        <img src={TempPFP} className="profile-dropdown-img" alt="" />
        <h4>Zabz</h4>
        <IoIosArrowDown className="primary-pink" />
        </div>
      </div>
      </div>
    </div>
    
    {/* // Main content */}
    <div className="main home-container">
      
      <div className="lsbc">
      <div className="left-sidebar">
        <div className="home-container">

        <div className="left-personal">
          <div className="left-personal-name">
          <img src={TempPFP} alt="" />
          <h4>Ziabeher Phillips</h4>
          <small>Port of Spain, Trinidad</small>
          </div>
          <FiSettings />
        </div>

        <div className="pages">
        <small>YOUR PAGES</small>
        <div className="left-sidebar-component">
          <img src={twitterLogo} alt="" />

          <div className="lsc-details">
            <h4>Twitter</h4>
            <small>Social Media Platform</small>
          </div>

            <div className="notification">
              <p>2</p>
            </div>
        </div>

        <h5 className="primary-blue">View All</h5>

        <div className="projects">
        <small>YOUR PROJECTS</small>
        <div className="left-sidebar-component">
          <img src={githubLogo} alt="" />
          <div className="lsc-details">
            <h4>GitHub</h4>
            <small>Coding Platform</small>
            </div>

            <div className="notification">
              <p>4</p>
            </div>
        </div>

        <div className="left-sidebar-component">
          <img src={porgfolioLogo} alt="" />
          <div className="lsc-details">
            <h4>Portfolio</h4>
            <small>The best portfolio</small>
            </div>

            <div className="notification">
              <p>9</p>
            </div>
        </div>
        </div>

        </div>
        </div>
      </div>
      {/*  */}
      
      <div className="left-sidebar-extra-content">
        <p>Privacy Terms</p>
        <p>Advertising</p>
        <p>Cookies</p>
      </div>
      
      <p>Ziabeher Phillips &copy; 2022</p>
      </div>


      <div className="main-feed">
        <section className="post-form">
          <div className="home-container">
          <div className="img-and-input">
            <img src={TempPFP} alt="" />
            <input type="text" placeholder="Say something..." />

            <MdTagFaces className="search-emoji" />
          </div>
          </div>

          <div className="post-options home-container">
          <ul>
            <li>
              <AiOutlinePicture className="post-option-icon" style={{color: 'var(--primary-blue)'}} />
              Image
            </li>

            <li>
              <AiFillCamera style={{color: '#88E26E'}} className="post-option-icon" />
              Video
            </li>

            <li>
              <AiOutlinePaperClip style={{color: '#ECBD59'}} className="post-option-icon" />
              Attatchment
            </li>

            <li>
              <FaHashtag style={{color: '#EC5959'}} className="post-option-icon" />
              Hashtag
            </li>

            <li>
              <TiAt className="post-option-icon" />
              Mention
            </li>

            <li>
              Public
              <IoIosArrowDown className="primary-pink" />
            </li>
          </ul>
        </div>
        </section>
      </div>


      <div className="right">right</div>
    </div>




    </div>
    </>
  );
}

export default Dashboard;
