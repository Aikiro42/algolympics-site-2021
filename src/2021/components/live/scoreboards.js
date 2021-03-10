import React from "react"

import "./scoreboards.scss"

import elimsData from "../../data/elims-scoreboard.json"

function Scoreboard({ title, problems, scores }) {
  return (
    <>
      <h1 className="table-title">{title}</h1>
      <table className="scoreboard">
        <tr className="headers">
          <th>Rank</th>
          <th>CodeForces Name</th>
          <th>Score</th>
          {problems.map(problem => {
            return <th className="item-score">{problem}</th>
          })}
        </tr>
        {scores.map(scoreEntry => {
          return (
            <tr className="score-entry">
              <td className="rank">{scoreEntry.Rank}</td>
              <td className="name">
                <p className="cf-name">{scoreEntry["CF Name"]}</p>
                <p className="school">{scoreEntry.School}</p>
              </td>
              <td className="score">
                <p className="total-score">{scoreEntry.Score}</p>
                <p className="penalty">{scoreEntry.Penalty}</p>
              </td>
              {problems.map(problem => {
                return <td className="item-score">{scoreEntry[problem]}</td>
              })}
            </tr>
          )
        })}
      </table>
    </>
  )
}

export default function Scoreboards() {
  return (
    <div id="scoreboards-section">
      <Scoreboard
        title="Eliminations Scoreboard"
        problems={elimsData.problems}
        scores={elimsData.scoreboard}
      />
    </div>
  )
}
