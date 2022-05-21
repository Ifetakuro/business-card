import React from "react";
import Image from '../images/profile.jpg'

export default function Profile() {
  return (
    <div className="profile">
      <img src={Image} alt="Profile" className='profile-img'/>
      <h1>Oluwafisayo Takuro</h1>
      <p>Frontend Developer</p>
      <a href="https://fetakuro.github.io/my-website" className="link">Portfolio</a>
    </div>
  )
}