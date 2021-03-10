import React from "react"

import Header from "../../2021/components/header.js"
import Footer from "../../2021/components/footer.js"

import "../../2021/styles/global.scss"
import "./contact.scss"
import ParallaxBackground from "../../2021/components/parallax-background.js"
import Map from "../../2021/components/contact/map.js"
import Social from "../../2021/components/contact/social.js"

export default function Contact() {
  return (
    <>
      <Header isIndex={false} />
      <div class="content wrapper incompressible" id="contact">
        <ParallaxBackground parallaxSrc="/2021/assets/img/background.png" />
        <Map />
        <Social />
      </div>
      <Footer />
    </>
  )
}
