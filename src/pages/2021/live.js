import React from "react"

import SpacedComponents from "../../2021/components/spaced-components.js"

import Header from "../../2021/components/header.js"
import Footer from "../../2021/components/footer.js"

import Countdown from "../../2021/components/live/countdown.js"
import Scoreboards from "../../2021/components/live/scoreboards.js"

import "../../2021/styles/global.scss"

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
