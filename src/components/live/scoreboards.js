import React from "react"

import "./scoreboards.scss";

import elimsData from "../../data/elims-scoreboard.json";

function Scoreboard({title, problems, scores}){
    return (
        <>
        <h1 class="table-title">{title}</h1>
        <table class="scoreboard">
            <tr class="headers">
                <th>Rank</th>
                <th>CodeForces Name</th>
                <th>Score</th>
                {problems.map((problem) => {
                    return (
                        <th class="item-score">{problem}</th>
                    );
                })}
            </tr>
            {scores.map((scoreEntry) => {
                return (
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
                        {problems.map((problem) => {
                            return (
                                <td class="item-score">
                                    {scoreEntry[problem]}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </table>
        </>
    )
}

export default function Scoreboards(){
    return(
        <div id="scoreboards-section">
            <Scoreboard title="Eliminations Scoreboard" problems={elimsData.problems} scores={elimsData.scoreboard} />
        </div>
    )
}