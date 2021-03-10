import React from "react"

import "./algo-year.scss"
import contestDetails from "../../data/details.json"

export default function AlgoYear() {
  var year = contestDetails.landing.year
  return (
    <span class="algo-year">
      <span class="red">{year[0]}</span>
      <span class="yellow">{year[1]}</span>
      <span class="green">{year[2]}</span>
      <span class="blue">{year[3]}</span>
    </span>
  )
}
