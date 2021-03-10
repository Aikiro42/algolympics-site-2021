import React from "react"

import "./footer.scss"
import contestDetails from "../data/details.json"

function Social({ type, link }) {
  var social_logo = ""
  switch (type) {
    case "facebook":
      social_logo = "/assets/img/social/facebook-logo.png"
      break
    case "twitter":
      social_logo = "/assets/img/social/twitter-logo.png"
      break
    case "linkedin":
      social_logo = "/assets/img/social/linkedin-logo.png"
      break
    case "youtube":
      social_logo = "/assets/img/social/youtube-logo.png"
      break
    default:
      social_logo = "/placeholder-logo.png"
      break
  }
  return (
    <a class="social" href={link}>
      <img src={social_logo} alt="Social Logo" />
    </a>
  )
}

function Contact({ type, name, link }) {
  var contact_logo = ""
  switch (type) {
    case "facebook":
      contact_logo = "/assets/img/social/facebook-logo.png"
      break
    case "twitter":
      contact_logo = "/assets/img/social/twitter-logo.png"
      break
    case "email":
      contact_logo = "/assets/img/social/email-logo.png"
      break
    case "location":
      contact_logo = "/assets/img/social/location-logo.png"
      break
    case "mobile":
      contact_logo = "/assets/img/social/mobile-logo.png"
      break
    default:
      contact_logo = "/placeholder-logo.png"
      break
  }
  if (link !== "#") {
    return (
      <a class="contact" href={link}>
        <img src={contact_logo} alt="Contact Logo" />
        <span>{name}</span>
      </a>
    )
  } else {
    return (
      <div class="contact">
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
    <div class="footer incompressible">
      <div class="top">
        <div class="wrapper">
          <div class="other-links section">
            <h2>UPACM</h2>
            <a class="other-link" href="https://upacm.net">
              Website
            </a>
            <a
              class="other-link"
              href="https://upacm.github.io/acm-website/automaton/"
            >
              Automaton
            </a>
            <a class="other-link" href="https://upacm.net/privacy-policy/">
              Privacy Policy
            </a>
          </div>
          <div class="contacts section">
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
          <div class="socials section">
            <h2>Connect with us!</h2>
            <div class="social-links">
              {contestDetails.socials.map(social => {
                return <Social type={social.type} link={social.link} />
              })}
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span class="copyright">
          © {year_str} Association for Computing Machinery - University of the
          Philippines Diliman Student Chapter, Inc.
        </span>
      </div>
    </div>
  )
}
