import React from "react"

import "./numbers.scss"
import contestDetails from "../../data/details.json"

import "aos/dist/aos.css"

function Number({ value, desc, iconSrc, isSpecial }) {
  if (isSpecial) {
    return (
      <div class="number special">
        <div
          class="val-container"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="650"
        >
          <img class="icon" src={iconSrc} alt="Icon" />
          <h1 class="value">{value}</h1>
        </div>
        <p
          class="description"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="650"
        >
          {desc}
        </p>
      </div>
    )
  }

  return (
    <div
      class="number"
      data-aos="fade-up"
      data-aos-delay="80"
      data-aos-duration="650"
    >
      <div class="val-container">
        <img class="icon" src={iconSrc} alt="Icon" />
        <h1 class="value">{value}</h1>
      </div>
      <p class="description">{desc}</p>
    </div>
  )
}

export default function Numbers() {
  return (
    <div id="numbers-section" class="index-section">
      {contestDetails.numbers.map(number => (
        <Number
          iconSrc={number.staticIconSrc}
          value={number.value}
          desc={number.description}
        />
      ))}
      <Number
        isSpecial={true}
        iconSrc="/assets/img/algolympics-logo-white.png"
        value="One goal"
        desc="Be the best team to win the competition."
      />
    </div>
  )
}
