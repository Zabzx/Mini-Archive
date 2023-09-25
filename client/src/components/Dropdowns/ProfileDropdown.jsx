import { CgProfile } from 'react-icons/cg'
import { TbRefreshAlert } from 'react-icons/tb'
import { VscFeedback } from 'react-icons/vsc'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const ProfileDropdown = () => {
    return (
        <motion.div initial={{ x: '-100px' }} animate={{ x: '0px' }} exit={{ y: '100px', opacity: 0}} className="dropped-profile">
          <div className="home-container">
          <h2>Profile</h2>

          <div className="dropdown-components">
            <Link to="/profile">
            <div className="dropdown-component">
              <CgProfile className="dropdown-icon" />
              <h4>My Profile</h4>
            </div>
            </Link>

            <div className="dropdown-component">
              <TbRefreshAlert className="dropdown-icon" />
              <h4>Change Account</h4>
            </div>

            <div className="dropdown-component">
              <FiSettings className="dropdown-icon" />
              <h4>Settings</h4>
            </div>

            <div className="dropdown-component">
              <AiOutlineQuestionCircle className="dropdown-icon" />
              <h4>Help</h4>
            </div>

            <div className="dropdown-component">
              <VscFeedback className="dropdown-icon" />
              <h4>Give Feedback</h4>
            </div>
          </div>
          </div>
        </motion.div>
    )
}

export default ProfileDropdown;