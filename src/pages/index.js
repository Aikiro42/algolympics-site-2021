import React from "react"

import SpacedComponents from "../components/spaced-components.js"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import Landing from "../components/index/landing.js"
import AlgoIntro from "../components/index/algo-intro.js"
import Numbers from "../components/index/numbers.js"
import Prizes from "../components/index/prizes.js"
import Sponsors from "../components/index/sponsors.js"

import "../styles/global.scss"

export default function Home() {
  return (
    <>
      <Header isIndex={true} />
      <Landing />
      <div class="content wrapper incompressible">
        <SpacedComponents>
          <AlgoIntro />
          <Numbers />
          <Prizes />
          <Sponsors />
        </SpacedComponents>
      </div>
      <Footer />
    </>
  )
}
