import React, { useContext } from 'react';
import { UserContext } from '../../context/User';
import placeholderPFP from '../../assets/placeholder-pfp.png'
import twitterLogo  from '../../assets/twitterLogo.png'
import githubLogo  from '../../assets/githubLogo.png'
import porgfolioLogo  from '../../assets/portfolioLogo.png'
import '../Dashboard/dashboard.css'
import { Link } from "react-router-dom";
import { FiSettings } from 'react-icons/fi'

const LeftSidebar = () => {

    // Context
    const [user, setUser] = useContext(UserContext);

  return (
    <div className="lsbc">
      <div className="left-sidebar">
        <div className="home-container">
        
        <Link to="/profile">
        <div className="left-personal">
          <div className="left-personal-name">
          <img src={user.pfp ? user.pfp : placeholderPFP} alt="" />
          <h4>{user.username}</h4>
          <small>Port of Spain, Trinidad</small>
          </div>
          <FiSettings />
        </div>
        </Link>

        <div className="pages">
        <small>YOUR PAGES</small>

        <a href="https://twitter.com/zabzDev" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
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
        </a>

        <h5 className="primary-blue">View All</h5>

        <div className="projects">
        <small>YOUR PROJECTS</small>

        <a href="https://github.com/Zabzx" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
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
        </a>

        <a href="https://zabzportfolio.netlify.app/" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
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
        </a>
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
  )
}

export default LeftSidebar