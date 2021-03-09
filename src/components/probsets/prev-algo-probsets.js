import React, {useState, useEffect} from "react"
import { Link, useStaticQuery } from "gatsby"

import "./prev-algo-probsets.scss"

import indexData from "../../json/index.json"

function Probset({year, problems, solutionSketches, solutions, codeSolutions}) {
	var fileDir = "/probsets/" + year + "/";
	var problems_dir = fileDir + problems;
	var no_problems = ""
	var solutions_dir = fileDir + solutions;
	var no_solutions = ""
	var solutionSketches_dir = fileDir + solutionSketches;
	var no_solutionSketches = ""
	var codeSolutions_dir = fileDir + codeSolutions;
	var no_codeSolutions = ""
	if(problems == ""){
		problems_dir = ""
		no_problems = "unavailable"
	}
	if(solutions == ""){
		solutions_dir = ""
		no_solutions = "unavailable"
	}
	if(solutionSketches == ""){
		solutionSketches_dir = ""
		no_solutionSketches = "unavailable"
	}
	if(codeSolutions == ""){
		codeSolutions_dir = ""
		no_codeSolutions = "unavailable"
	}

	return (
		<div class="probset">
			<h2>Algolympics {year}</h2>
			<a href={problems_dir} class={"problems " + no_problems}>Problems</a>
			<a href={solutionSketches_dir} class={"solution-sketches " + no_solutionSketches}>Solution Sketches</a>
			<a href={solutions_dir} class={"solutions " + no_solutions}>Solutions</a>
			<a href={codeSolutions_dir} class={"code-solutions " + no_codeSolutions}>Code Solutions</a>
		</div>
	)
}

export default function PrevAlgoProbsets() {

	let prev_probsets = [...indexData.probsets.previous];
	prev_probsets.sort(
		(a, b) => {
			if(a.year < b.year){
				return 1;
			}else if(a.year > b.year){
				return -1;
			}else{
				return 0;
			}
		}
	);
	console.log(prev_probsets);
	
	return (
		<div id="prev-algo-probsets-section" class="incompressible">
			<h1>Previous Problems</h1>
			<div id="probsets">
				{prev_probsets.map((probset) => {
					return (
						<Probset year={probset.year}
							problems={probset.problems}
							solutionSketches={probset.solutionSketches}
							solutions={probset.solutions}
							codeSolutions={probset.codeSolutions} />
					)
				})}
			</div>
		</div>
	);
}
