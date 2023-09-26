import React, { useState, useContext, useEffect } from 'react'
import TempPFP from '../../assets/temp-pfp.jpg'
import { Link } from 'react-router-dom'
import NotificationDropdown from '../Dropdowns/NotificationDropdown'
// React Icons
import { GoHome } from 'react-icons/go'
import { BsSearch, BsFillPeopleFill, BsChatDots, BsBell, BsTools, BsThreeDots } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { TbRefreshAlert } from 'react-icons/tb'
import { VscFeedback } from 'react-icons/vsc'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import {IoIosArrowDown} from 'react-icons/io';      
// Images
import pfp1 from '../../assets/pfp-1.jpg'
import pfp2 from '../../assets/pfp-2.jpg'
import pfp3 from '../../assets/pfp-3.jpg'
import pfp4 from '../../assets/pfp-4.jpg'
import placeholderPFP from '../../assets/placeholder-pfp.png'
// Framer Motion
import { motion, AnimatePresence } from "framer-motion"
import { UserContext } from '../../context/User'
import './nav.css'
import ProfileDropdown from '../Dropdowns/ProfileDropdown'

const Nav = () => {
    // State
    const [profileDropdown, setProfileDropdown] = useState(false);
    const [notificationDropdown, setNotificationDropdown] = useState(false);

    // Context
    const [user, setUser] = useContext(UserContext);

    // Functions
    const openProfile = () => {
        setProfileDropdown(!profileDropdown);
      }
    
      const openNotifications = () => {
        setNotificationDropdown(!notificationDropdown);
      }
    
      const closeDropdown = () => {
        setNotificationDropdown(false);
        setProfileDropdown(false);
      }

  return (
    // Overlay
    <>
    { profileDropdown || notificationDropdown ? <div className="overlay" onClick={closeDropdown}></div> : ''}
    <div className="home-nav">
      <div className="home-container home-nav-flex">

      <div className="logo-and-search">
        <Link to="/">
        <svg width="50" height="50" viewBox="0 0 630 514" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 454.31C9 451.81 271 175.31 180 34.3104C89 -106.69 303 512.81 365.5 438.81C428 364.81 422.5 -34.1896 456.5 5.8104C490.5 45.8104 544 518.31 629 511.31" stroke="#FF6884" strokeWidth="20"/>
          </svg>
          </Link>

          <div className="nav-search">
            <BsSearch className="search-icon" />
          <input type="text" className="" placeholder="Search" />
          </div>
      </div>

      <div className="nav-options">
        <Link style={{ color: "black", textDecoration: "none" }} to="/">
        <div className="nav-option">
          <GoHome className="nav-icon" />
          <h4>Homepage</h4>
        </div>
        </Link>

        <div className="nav-option">
          <BsFillPeopleFill className="nav-icon" />
          <h4>Connections</h4>
        </div>

        <div className="nav-option">
          <BsChatDots className="nav-icon" />
          <h4>Messages</h4>
        </div>

        <div className={ notificationDropdown ? "nav-option notif-active" : "nav-option notif"} onClick={openNotifications}>
          <BsBell className={ notificationDropdown ? "icon-active" : "nav-icon"}/>
          <h4 className="notif-heading">Notifications</h4>

          <div className="notif-notification">
              <p>9</p>
            </div>
          </div>

          <AnimatePresence>
          { notificationDropdown ? <NotificationDropdown /> : ''}
          </AnimatePresence>

        <div className="nav-option">
          <BsTools className="nav-icon" />
          <h4>Tools</h4>
        </div>
      </div>

      <div className="profile-dropdown-container">
        <div className="profile-dropdown" onClick={openProfile}>
        <img src={ user.pfp ? user.pfp : placeholderPFP } className="profile-dropdown-img" alt="" />
        <h4>{user.username}</h4>
        <IoIosArrowDown className="primary-pink" />
        </div>

        <AnimatePresence>
        { profileDropdown ? <ProfileDropdown /> : ''}
        </AnimatePresence>
      </div>

      </div>
    </div>
    </>
  )
}

export default Nav