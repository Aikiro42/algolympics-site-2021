import React from "react"

import Header from "../../2021/components/header.js"
import Footer from "../../2021/components/footer.js"
import BlankContentfiller from "../../2021/components/blank-content-filler.js"

import "../../2021/styles/global.scss"

export default function Test() {
  return (
    <>
      <Header isIndex={false} />
      <div class="content wrapper">
        <BlankContentfiller height="2000px" color="rgb(25,25,25)" />
      </div>
      <Footer />
    </>
  )
}
