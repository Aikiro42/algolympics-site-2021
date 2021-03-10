import React from "react"

import "./scoreboards.scss";

import elimsData from "../../json/2021-elims-scoreboard.json";

function Scoreboard({title, scoresArray}){
    return (
        <>
        <h1 class="table-title">{title}</h1>
        <table class="scoreboard">
            <tr class="headers">
                <th>Rank</th>
                <th>CodeForces Name</th>
                <th>Score</th>
                <th class="item-score">A</th>
                <th class="item-score">B</th>
                <th class="item-score">C</th>
                <th class="item-score">D</th>
                <th class="item-score">E</th>
                <th class="item-score">F</th>
                <th class="item-score">G</th>
                <th class="item-score">H</th>
                <th class="item-score">I</th>
                <th class="item-score">J</th>
                <th class="item-score">K</th>
                <th class="item-score">L</th>
                <th class="item-score">M</th>
                <th class="item-score">N</th>
                <th class="item-score">O</th>
                <th class="item-score">P</th>
                <th class="item-score">Q</th>
                <th class="item-score">R</th>
            </tr>
            {scoresArray.map((scoreEntry) => {
                return(
                    <tr class="score-entry">
                        <td class="rank">{scoreEntry.Rank}</td>
                        <td class="name">
                            <p class="cf-name">{scoreEntry["CF Name"]}</p>
                            <p class="school">{scoreEntry.School}</p>
                        </td>
                        <td class="score">
                            <p class="total-score">{scoreEntry.Score}</p>
                            <p class="penalty">{scoreEntry.Penalty}</p>
                        </td>
                        <td class="item-score">
                            {scoreEntry.A}
                        </td>
                        <td class="item-score">
                            {scoreEntry.B}
                        </td>
                        <td class="item-score">
                            {scoreEntry.C}
                        </td>
                        <td class="item-score">
                            {scoreEntry.D}
                        </td>
                        <td class="item-score">
                            {scoreEntry.E}
                        </td>
                        <td class="item-score">
                            {scoreEntry.F}
                        </td>
                        <td class="item-score">
                            {scoreEntry.G}
                        </td>
                        <td class="item-score">
                            {scoreEntry.H}
                        </td>
                        <td class="item-score">
                            {scoreEntry.I}
                        </td>
                        <td class="item-score">
                            {scoreEntry.J}
                        </td>
                        <td class="item-score">
                            {scoreEntry.K}
                        </td>
                        <td class="item-score">
                            {scoreEntry.L}
                        </td>
                        <td class="item-score">
                            {scoreEntry.M}
                        </td>
                        <td class="item-score">
                            {scoreEntry.N}
                        </td>
                        <td class="item-score">
                            {scoreEntry.O}
                        </td>
                        <td class="item-score">
                            {scoreEntry.P}
                        </td>
                        <td class="item-score">
                            {scoreEntry.Q}
                        </td>
                        <td class="item-score">
                            {scoreEntry.R}
                        </td>
                        
                    </tr>
                )
            })}
        </table>
        </>
    )
}

export default function Scoreboards(){
    return(
        <div id="scoreboards-section">
            <Scoreboard title="Eliminations Scoreboard" scoresArray={elimsData} />
        </div>
    )
}