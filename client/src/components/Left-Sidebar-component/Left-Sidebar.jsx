import React, { useContext } from 'react';
import { UserContext } from '../../context/User';
import placeholderPFP from '../../assets/placeholder-pfp.png'
import twitterLogo  from '../../assets/twitterLogo.png'
import githubLogo  from '../../assets/githubLogo.png'
import porgfolioLogo  from '../../assets/portfolioLogo.png'
import '../Dashboard/dashboard.css'
import { Link } from "react-router-dom";
import { FiSettings } from 'react-icons/fi'
import './left-sidebar.css'

const LeftSidebar = () => {

  // Context
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="left-container sticky">
    <div className="left-sidebar">
    <Link to="/profile">
      <div className="left-sidebar-profile sidebar-container">
        <div className="pfp-and-location">
          <img className="sidebar-img" src={user.pfp ? user.pfp : placeholderPFP} alt="" />
          <br />
          <small>Port of Spain, Trinidad</small>
        </div>

        <FiSettings className="left-icon" />
      </div>
      </Link>

      <div className="pages sidebar-container">
        <small className="sidebar-small">YOUR PAGES</small>

        <div className="twitter">
          <img src={twitterLogo} alt="" />
          <div className="twitter-txt">
            <h3>Twitter</h3>
            <small>Social Media Platform</small>
          </div>
        </div>
      </div>

      <h5 className="view-all sidebar-container">View All</h5>

      <div className="projects sidebar-container">
        <small>YOUR PROJECTS</small>
        <div className="projects-flex">
        <div className="github">
          <img src={githubLogo} alt="" />
          <div className="twitter-txt">
            <h3>GitHub</h3>
            <small>Coding Platform</small>
          </div>
        </div>

        <div className="portfolio">
          <img src={porgfolioLogo} alt="" />
          <div className="twitter-txt">
            <h3>Portfolio</h3>
            <small>Portfolio Website</small>
          </div>
        </div>
        
        </div>
      </div>

    </div>

    <div className="left-sidebar-extra-content">
        <p>Privacy Terms</p>
        <p>Advertising</p>
        <p>Cookies</p>
      </div>
      <p className="copyright">Ziabeher Phillips &copy; 2022</p>
    </div>
  )
}

export default LeftSidebar