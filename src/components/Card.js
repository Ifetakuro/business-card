import React from 'react'
import Button from './Button'
import Interests from './Interests'
import Profile from './Profile'
import About from './About'
import Footer from './Footer'
import { MdEmail } from 'react-icons/md';
import {FaLinkedin} from 'react-icons/fa';


export default function Card() {
  const contact = {
    social: ['Email', 'LinkedIn'],
    link: ['mailto:oluwafisayotakuro@gmail.com', 'https://www.linkedin.com/in/oluwafisayo-takuro'],
    logo: [<MdEmail />, <FaLinkedin />],
    class: ['email', 'linkedin']

  }
  return (
    <div className='main-div'>
      <main>
        <section>
          <Profile />
          <div className='btn-div'>
            <Button name={contact.social[0]} logo={contact.logo[0]} class={contact.class[0]} link={contact.link[0]}/>
            <Button name={contact.social[1]} logo={contact.logo[1]}  class={contact.class[1]} link={contact.link[1]}/>
          </div>
        </section>
        <section className='info-sec'>
          <About />
          <Interests />
        </section>
      </main>
      <Footer />
    </div>
  )
}