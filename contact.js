import React from 'react'
import './Contact.css'
import clientImg1 from '../../assets/walmart.png'
import clientImg2 from '../../assets/microsoft.png'
import clientImg3 from '../../assets/adobe.png'
import clientImg4 from '../../assets/facebook.png'
import icon1 from '../../assets/facebook-icon.png'
import icon2 from '../../assets/youtube.png'
import icon3 from '../../assets/twitter.png'
import icon4 from '../../assets/instagram.png'
const Contact = () => {
  return (
    <section id="contactPage">
      <h1 className="contactPageTitle">My client</h1>
      <p className="contacDesc">
        I have had the oppertunity to work with a diverse group of companies.
        some of noteable comapany
      </p>
      y
      <div className="clientImgs">
        <img src={clientImg1} alt="Walmart" className="clientImg" />
        <img src={clientImg2} alt="Microsoft" className="clientImg" />
        <img src={clientImg3} alt="Adobe" className="clientImg" />
        <img src={clientImg4} alt="Facebook" className="clientImg" />
      </div>
      <div id="contactME">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="MeDesc">
          Please fill out form below to discuss any work oppertunit
        </p>
        <form className="contactForm">
          <input type="text" className="name" placeholder="your name" />
          <input type="email" className="email" placeholder="your Mail" />
          <textarea
            name="message"
            className="massage"
            row="5"
            placeholder="your message"
          />
          <button className="submitBtn">submit</button>
          <div className="links">
            <img src={icon1} alt="Facebook" className="link" />
            <img src={icon2} alt="youtube" className="link" />
            <img src={icon3} alt="twitter" className="link" />
            <img src={icon4} alt="Instragram" className="link" />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact
