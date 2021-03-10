import React from "react"

import "./social.scss"
import contestDetails from "../../data/details.json"

function SocialItem({ type, link }) {
  var social_logo = ""
  var link_href = link
  switch (type) {
    case "facebook":
      social_logo = "/assets/img/social/facebook-logo.png"
      break
    case "twitter":
      social_logo = "/assets/img/social/twitter-logo.png"
      break
    default:
      social_logo = "/placeholder-logo.png"
      link_href = "mailto:" + link + "?subject=Algolympics 2021"
      break
  }
  return (
    <a class="social-item" href={link_href}>
      <img src={social_logo} alt="Social Logo" />
      <span>{link}</span>
    </a>
  )
}

export default function Social() {
  return (
    <div id="contact-social-section">
      <h1>Socials</h1>
      <div id="social-list">
        {contestDetails.socials.map(social => {
          return <SocialItem type={social.type} link={social.link} />
        })}
      </div>
    </div>
  )
}
