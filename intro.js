import React from 'react'
import './intro.css'
import bg from '../../../assets/image.png'
import btnImg from '../../../assets/hireme.png'
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          {' '}
          I am <span className="introName">Munna</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am skilled Web designer with experiance creating <br />
          visulally appeling and user friendly Website
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  )
}
export default Intro
