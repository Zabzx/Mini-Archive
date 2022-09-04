import React, { useContext, useState, useEffect } from 'react'
import './profile.css'
import TempPFP from '../../assets/temp-pfp.jpg'
import {UserContext} from '../../context/User'
import { Link } from 'react-router-dom'
import placeholderPFP from '../../assets/placeholder-pfp.png'
// Framer motion
import { motion, AnimatePresence } from 'framer-motion'
// Icons
import { ImCross } from 'react-icons/im'

const Profile = () => {
    const [user, setUser] = useContext(UserContext);
    const [userImage, setUserImage] = useState('');
    const [loadedUserImage, setLoadedUserImage] = useState('');
    const [confirmImg, setConfirmImg] = useState(false);
    const [pfpAlert, setPfpAlert] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editAlert, setEditAlert] = useState(false);
    const [newUserInfo, setNewUserInfo] = useState({
        username: '',
        email: ''
    });

    useEffect(() => {
        if (userImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLoadedUserImage(reader.result)
            }
            reader.readAsDataURL(userImage)
        } else {
            setLoadedUserImage(null)
        }
    }, [userImage])

    // Alerts
    useEffect(() => {
        setTimeout(() => {
            setPfpAlert(false);
        }, 2000);
    }, [pfpAlert]);

    useEffect(() => {
        setTimeout(() => {
            setEditAlert(false);
        }, 2000);
    }, [editAlert]);

    const setPfp = () => {
        setUser({...user, pfp: loadedUserImage})
        setPfpAlert(true);
    }

    const openEditPopup = () => {
        setShowEditPopup(true);
    }

    const closeEditPopup = () => {
        setShowEditPopup(false);
    }

    const editUserInfo = (e) => {
        e.preventDefault();
        setUser({...user, username: newUserInfo.username, email: newUserInfo.email});
        setEditAlert(true);
    }

  return (
    <>
    <section className="profile">
        <h2 className="back-to-home">Back to <Link to="/">Home</Link></h2>
        <div className="profile-flex">
        <div className="profile-img">
            <img className="edit-pfp" src={ loadedUserImage ? loadedUserImage : placeholderPFP} alt="" />
            <br />
            <input className='pfp-input' type="file" onChange={(e) => {
        const file = e.target.files[0];
        setUserImage(file);
        setConfirmImg(true)
        }}/>
        <br />
        { confirmImg ? <button className="btn pfp-confirm" onClick={setPfp}>Confirm</button> : ""}

        </div>

        <div className="profile-info">
            <h2>Email: <span className="primary-blue">{user.email}</span></h2>
            <h2>Username: <span className="primary-blue">{user.username}</span></h2>

            <button className='btn' onClick={openEditPopup}>Edit</button>
        </div>
        </div>

        { pfpAlert ? <h2 className="pfp-alert">New profile picture has been set!</h2> : ""}
    </section>

    <AnimatePresence>
    { showEditPopup ? <motion.form initial={{opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity: 0}} onSubmit={editUserInfo} className="edit-popup">
        <div className="profile-container">
        <div className="edit-popup-header">
            <h2>Edit Profile</h2>
            <ImCross onClick={closeEditPopup} className="cross-btn" />
        </div>
        <div className="edit-input-items">
        <input type="text" placeholder='Username' onChange={(e) => setNewUserInfo({...newUserInfo, username: e.currentTarget.value})}/>
        <input type="text" placeholder='Email' onChange={(e) => setNewUserInfo({...newUserInfo, email: e.currentTarget.value})}/>
        </div>

        <button className="edit-btn btn-full">Submit</button>
        </div>

        { editAlert ? <h2 className="edit-alert">New user info changed!</h2> : ""}
    </motion.form> : ""}
    </AnimatePresence>
    </>
  )
}

export default Profile