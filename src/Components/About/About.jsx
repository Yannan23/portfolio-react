import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_me from '../../assets/about_me.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_me} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a dedicated Junior Full Stack Developer with strong communication and teaching skills. I excel at problem-solving and have a passion for learning new technologies. My diverse background in education includes experience working with high-high-functioning as well as university students. At the university level, I developed and managed IT curriculum while teaching courses on topics such as e-commerce and software tools like Flash, Dreamweaver, and Fireworks. </p>
            <p>To embark on my journey as a Full Stack Developer, I completed an intensive Bootcamp where I gained hands-on experience with JavaScript, Ruby, and Ruby on Rails while building multiple applications. Currently, I’m focused on expanding my expertise in React. I am eager to contribute to innovative projects in a dynamic environment.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"65%"}} /></div>
            {/* <div className="about-skill"><p>Ruby</p><hr style={{width:"80%"}} /></div> */}
            <div className="about-skill"><p>Ruby On Rails</p><hr style={{width:"80%"}} /></div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
          <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF ACHIEVEMENT</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>2+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          {/* <hr /> */}
          {/* <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
          <hr /> */}
        </div>
    </div>
  )
}

export default About
