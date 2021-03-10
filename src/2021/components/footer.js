import React from "react"

import "./footer.scss"
import contestDetails from "../data/details.json"

function Social({ type, link }) {
  var social_logo = ""
  switch (type) {
    case "facebook":
      social_logo = "/2021/assets/img/social/facebook-logo.png"
      break
    case "twitter":
      social_logo = "/2021/assets/img/social/twitter-logo.png"
      break
    case "linkedin":
      social_logo = "/2021/assets/img/social/linkedin-logo.png"
      break
    case "youtube":
      social_logo = "/2021/assets/img/social/youtube-logo.png"
      break
    default:
      social_logo = "/placeholder-logo.png"
      break
  }
  return (
    <a className="social" href={link}>
      <img src={social_logo} alt="Social Logo" />
    </a>
  )
}

function Contact({ type, name, link }) {
  var contact_logo = ""
  switch (type) {
    case "facebook":
      contact_logo = "/2021/assets/img/social/facebook-logo.png"
      break
    case "twitter":
      contact_logo = "/2021/assets/img/social/twitter-logo.png"
      break
    case "email":
      contact_logo = "/2021/assets/img/social/email-logo.png"
      break
    case "location":
      contact_logo = "/2021/assets/img/social/location-logo.png"
      break
    case "mobile":
      contact_logo = "/2021/assets/img/social/mobile-logo.png"
      break
    default:
      contact_logo = "/placeholder-logo.png"
      break
  }
  if (link !== "#") {
    return (
      <a className="contact" href={link}>
        <img src={contact_logo} alt="Contact Logo" />
        <span>{name}</span>
      </a>
    )
  } else {
    return (
      <div className="contact">
        <img src={contact_logo} alt="Contact Logo" />
        <span>{name}</span>
      </div>
    )
  }
}

export default function Footer() {
  let year = new Date()
  let year_str = year.getFullYear()
  return (
    <div className="footer incompressible">
      <div className="top">
        <div className="wrapper">
          <div className="other-links section">
            <h2>UPACM</h2>
            <a className="other-link" href="https://upacm.net">
              Website
            </a>
            <a
              className="other-link"
              href="https://upacm.github.io/acm-website/automaton/"
            >
              Automaton
            </a>
            <a className="other-link" href="https://upacm.net/privacy-policy/">
              Privacy Policy
            </a>
          </div>
          <div className="contacts section">
            <h2>Contact Us</h2>
            {contestDetails.contacts.map(contact => {
              return (
                <Contact
                  link={contact.link}
                  name={contact.name}
                  type={contact.type}
                />
              )
            })}
          </div>
          <div className="socials section">
            <h2>Connect with us!</h2>
            <div className="social-links">
              {contestDetails.socials.map(social => {
                return <Social type={social.type} link={social.link} />
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span className="copyright">
          © {year_str} Association for Computing Machinery - University of the
          Philippines Diliman Student Chapter, Inc.
        </span>
      </div>
    </div>
  )
}
