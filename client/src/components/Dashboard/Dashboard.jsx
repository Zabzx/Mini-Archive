import React from "react";
import './dashboard.css';
import TempPFP from '../../assets/temp-pfp.jpg'
import {GoHome} from 'react-icons/go'
import { BsSearch, BsFillPeopleFill, BsChatDots, BsBell, BsTools } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

function Dashboard() {

  return (
    <div className="home-nav home-container">
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
        <IoIosArrowDown className="nav-icon" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
