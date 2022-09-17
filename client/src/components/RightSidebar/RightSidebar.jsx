import React from 'react'
import pfp1 from '../../assets/pfp-1.jpg'
import pfp2 from '../../assets/pfp-2.jpg'
import pfp3 from '../../assets/pfp-3.jpg'
import pfp4 from '../../assets/pfp-4.jpg'
import twitterLogo  from '../../assets/twitterLogo.png'
import githubLogo  from '../../assets/githubLogo.png'
import porgfolioLogo  from '../../assets/portfolioLogo.png'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { ImUserPlus } from 'react-icons/im'
import './right-sidebar.css'

const RightSidebar = () => {
  return (
    <section className="right-sidebar">
    <div className="right-sidebar-section">
    <div className="home-container">
      <h4 className="sh4">Suggestions for you</h4>

      <div className="suggestions">
      <div className="right-sidebar-component">
        <div className="r-name-and-img">
          <img src={pfp1} alt="" />
          <div>
          <h5>Jarrod Broughton</h5>
          <small>Product Manager</small>
          </div>
        </div>

        <ImUserPlus className="right-sidebar-icon" />
      </div>

      <div className="right-sidebar-component">
        <div className="r-name-and-img">
          <img src={pfp2} alt="" />
          <div>
          <h5>Sarah-Jane Day</h5>
          <small>Product Manager</small>
          </div>
        </div>

        <ImUserPlus className="right-sidebar-icon" />
      </div>

      <div className="right-sidebar-component">
        <div className="r-name-and-img">
          <img src={pfp3} alt="" />
          <div>
          <h5>Cherie Powers</h5>
          <small>Product Manager</small>
          </div>
        </div>

        <ImUserPlus className="right-sidebar-icon" />
      </div>

      <h3 className="show-more">Show More</h3>
      </div>
    </div>
    </div>

    <div className="right-sidebar-section">
    <div className="home-container">
      <h4 className="sh4">Popular Pages</h4>

      <div className="suggestions">
      <div className="right-sidebar-component">
        <div className="r-name-and-img">
          <img src={twitterLogo} alt="" />
          <div>
          <h4>Twitter</h4>
          <small>Social Media Platform</small>
          </div>
        </div>

        <HiOutlineLightningBolt className="right-sidebar-icon" />
      </div>

      <div className="right-sidebar-component">
        <div className="r-name-and-img">
          <img src={githubLogo} alt="" />
          <div>
          <h4>GitHub</h4>
          <small>Coding Platform</small>
          </div>
        </div>

        <HiOutlineLightningBolt className="right-sidebar-icon" />
      </div>

      <div className="right-sidebar-component">
        <div className="r-name-and-img">
          <img src={porgfolioLogo} alt="" />
          <div>
          <h5>Portfolio</h5>
          <small>The best portfolio</small>
          </div>
        </div>

        <HiOutlineLightningBolt className="right-sidebar-icon" />
      </div>

      <h3 className="show-more">Show More</h3>
      </div>
    </div>
    </div>
  </section>
  )
}

export default RightSidebar