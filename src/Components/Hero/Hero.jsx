import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className='hero-img'></div>
      {/* <img src={profile_img} alt="" /> */}
      <h1><span>I‘m Yannan Sun,</span> full stack developer based in Sydney.</h1>
      <p>I am a dedicated Junior Full Stack Developer with strong communication and teaching skills. I excel at problem-solving and have a passion for learning new technologies.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a
          href="../../../public/yannan_resume.pdf"
          download="yannan_resume.pdf"
          className="hero-resume-link"
        >
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
