import React from "react"

import Header from "../../2021/components/header.js"
import Footer from "../../2021/components/footer.js"
import BlankContentfiller from "../../2021/components/blank-content-filler.js"

import PrevAlgoProbsets from "../../2021/components/problems/prev-algo-probsets.js"
import SampleProblems from "../../2021/components/problems/sample-problems.js"
import PracticeRecommendations from "../../2021/components/problems/practice-recommendations.js"

import "../../2021/styles/global.scss"

export default function problems() {
  return (
    <>
      <Header isIndex={false} />
      <div class="content wrapper">
        <BlankContentfiller height="100px" color="none" />
        <SampleProblems />
        <PrevAlgoProbsets />
        <PracticeRecommendations />
        <BlankContentfiller height="100px" color="none" />
      </div>
      <Footer />
    </>
  )
}
