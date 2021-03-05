import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./prizes.scss"
import indexData from "../../json/index.json"

import AOS from "aos"
import "aos/dist/aos.css"

function Banner({place, prize, winner}) {
	
	var prize_heading = "";
	var trophy_img_src = "";
	var aos_delay = "100";
	switch(place){
		case "first":
			prize_heading = "1st place";
			trophy_img_src = "/assets/img/trophy-gold.png";
			break;
		case "second":
			prize_heading = "2nd place";
			trophy_img_src = "/assets/img/trophy-silver.png";
			aos_delay="200";
			break;
		case "third":
			prize_heading = "3rd place";
			trophy_img_src = "/assets/img/trophy-bronze.png";
			aos_delay="300";
			break;
		default:
			break;
	}
	
	return (
		<div class="banner" id={place}
			data-aos="fade-up"
            data-aos-delay={aos_delay}
            data-aos-duration="650"
		>
			<img class="trophy-img" src={trophy_img_src} />
			<div class="banner-content">
				<div class="prize">
					<h2>{prize_heading}</h2>
					<p>{prize}</p>
				</div>
				<h3>2020 Winner</h3>
				<a class="winner" href={winner.link}>
					<img class="winner-profile" src={winner.profileSrc} />
					<img class="team-logo" src={winner.logoSrc} />
					<span class="team-name">{winner.name}</span>
					<span class="team-univ">{winner.university}</span>
				</a>
			</div>
		</div>
	)
}

export default function Prizes() {
	return (
		<div id="prizes-section" class="index-section">
			<Banner place="second" prize={indexData.prizes.second} winner={indexData.winners.second}/>
			<Banner place="first" prize={indexData.prizes.first} winner={indexData.winners.first}/>
			<Banner place="third" prize={indexData.prizes.third} winner={indexData.winners.third}/>
		</div>
	)
}
