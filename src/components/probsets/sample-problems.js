import React from "react"

import "./sample-problems.scss"

import indexData from "../../json/index.json"

function SampleProblem({ name, link, background }) {
  return (
    <a class="sample-problem" href={link}>
      <span>{name}</span>
    </a>
  )
}

export default function SampleProblems() {
  return (
    <div id="sample-problems-section" class="incompressible">
      <h1>Sample Problem Sets</h1>
      <div id="samples">
        {indexData.probsets.samples.map(sample => {
          return (
            <SampleProblem
              name={sample.name}
              link={sample.link}
              background={sample.background}
            />
          )
        })}
      </div>
    </div>
  )
}
