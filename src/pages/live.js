import React from "react"

import SpacedComponents from "../components/spaced-components.js"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import Countdown from "../components/live/countdown.js"
import Scoreboards from "../components/live/scoreboards.js"

import "../styles/global.scss"

export default function Live() {
  return (
    <>
      <Header isIndex={false} />
      <div class="content wrapper incompressible">
        <SpacedComponents>
          <Countdown />
          <Scoreboards />
        </SpacedComponents>
      </div>
      <Footer />
    </>
  )
}
