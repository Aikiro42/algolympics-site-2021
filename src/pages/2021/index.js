import React from "react"

import SpacedComponents from "../../2021/components/spaced-components.js"

import Header from "../../2021/components/header.js"
import Footer from "../../2021/components/footer.js"

import Landing from "../../2021/components/index/landing.js"
import AlgoIntro from "../../2021/components/index/algo-intro.js"
import Numbers from "../../2021/components/index/numbers.js"
import Prizes from "../../2021/components/index/prizes.js"
import Sponsors from "../../2021/components/index/sponsors.js"

import "../../2021/styles/global.scss"

export default function Home() {
  return (
    <>
      <Header isIndex={true} />
      <Landing />
      <div className="content wrapper incompressible">
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
