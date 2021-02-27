import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./countdown.scss"
import indexData from "../../json/index.json";

const calculateTimeLeft = () => {
	const difference = +new Date(`${indexData.eventDeadline}`) - +new Date();
	let timeLeft = {};
	if(difference > 0){
		let formatted_seconds = String(Math.floor((difference / 1000) % 60));
		if(formatted_seconds.length < 2){
			formatted_seconds = "0" + formatted_seconds;
		}
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: formatted_seconds
		};
	}
	return timeLeft;
}

export default function Countdown() {

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => {clearTimeout(timer)}
	});

	return (
		<div id="countdown-section">
			<h1 id="label">Algolympics Finals Deadline</h1>
			<h1 id="timer">
				<span id="days" class="red">{timeLeft.days}<span class="label">D</span></span>
				<span id="days" class="yellow">{timeLeft.hours}<span class="label">H</span></span>
				<span id="minutes" class="green">{timeLeft.minutes}<span class="label">M</span></span>
				<span id="seconds" class="blue">{timeLeft.seconds}<span class="label">S</span></span>
			</h1>
		</div>
	)
}
