import React, { useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'

const ProfileUpdate = () => {

    const [image,setImge] = useState(false)

  return (
    <div className='profile'>
        <div className="profile-container">
            <form action="">
                <h3>Profile Details</h3>
                <label htmlFor="avatar">
                    <input onChange={(e)=>setImge(e.target.files[0])} type="file" id='avatar' accept='.jpg, .png, .jpeg' hidden/>
                    <img src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
                    Upload profile image
                </label>
                <input type="text" placeholder='Your name' />
                <textarea placeholder='Write profile bio' required></textarea>
                <button type='submit'>Save</button>
            </form>
            <img className='profile-pic' src={image ? URL.createObjectURL(image) : assets.logo_icon} alt="" />
        </div>
    </div>
  )
}

export default ProfileUpdate
