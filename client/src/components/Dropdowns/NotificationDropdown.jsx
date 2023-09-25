import { motion } from "framer-motion"
import pfp4 from '../../assets/pfp-4.jpg'
import TempPFP from '../../assets/temp-pfp.jpg'
import { BsThreeDots } from 'react-icons/bs'

const NotificationDropdown = () => {
    return (
        <motion.div initial={{ x: '100px' }} animate={{ x: '0px' }} exit={{ y: '100px', opacity: 0 }} className="notifications-dropdown">
            <div className="home-container">
            <div className="notif-dropdown-header">
              <h3>Notifications</h3>
              <h4>Read all</h4>
            </div>

            <small>New</small>

            <div className="notification-items">
              <div className="notification-item">
                <img src={pfp4} alt="" />

                <div>
                  <p>
                  Caspian Duffy added 4 new photos.
                  </p>
                  <small>14 min.</small>
                </div>

                <BsThreeDots />
              </div>
              
              <div className="notification-item">
                <img src={TempPFP} alt="" />

                <div>
                  <p>
                  Avni Farrell, uploaded 3 new posts.
                  </p>
                  <small>14 min.</small>
                </div>

                <BsThreeDots />
              </div>

              <div className="notification-item">
                <img src={pfp4} alt="" />

                <div>
                  <p>
                  Caspian Duffy, accepted your friend request.
                  </p>
                  <small>14 min.</small>
                </div>
              
              <BsThreeDots />
              </div>

              <div className="notification-item">
                <img src={TempPFP} alt="" />

                <div>
                  <p>
                  Avni Farrell, added 14 new photos.
                  </p>
                  <small>14 min.</small>
                </div>
              
              <BsThreeDots />
              </div>
            </div>

            <small>Previous</small>

            <div className="notification-item">
                <img src={TempPFP} alt="" />

                <div>
                  <p>
                  Avni Farrell, changed their profile picture.
                  </p>
                  <small>14 min.</small>
                </div>
              
              <BsThreeDots />
              </div>

              <div className="notification-item">
                <img src={TempPFP} alt="" />

                <div>
                  <p>
                  Avni Farrell, accepted your friend request.
                  </p>
                  <small>14 min.</small>
                </div>
              
              <BsThreeDots />
              </div>
              
          </div>
          </motion.div>
    )
}

export default NotificationDropdown