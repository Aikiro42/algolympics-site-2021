import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./prizes-winners.scss"
import indexData from "../../json/index.json"

import AOS from "aos"
import "aos/dist/aos.css"

function Winner({logoSrc, name, members, link}){
	return(
		<a class="winner-link" href={link}>
			<img src={logoSrc} />
		</a>
	)
}

function Banner({place, prize, winners}) {
	
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
				<div class="winner-list">
				<h3>Previous Winners</h3>
					{winners.map((winner) => {
						return <Winner logoSrc={winner.logoSrc} name={winner.name} members={winner.members} link={winner.link}/>
					})}
				</div>
			</div>
		</div>
	)
}

export default function Prizes() {
	return (
		<div id="prizes-section">
			<Banner place="second" prize={indexData.prizes.second} winners={indexData.winners.second.slice(0, 5)} />
			<Banner place="first" prize={indexData.prizes.first} winners={indexData.winners.first.slice(0, 5)} />
			<Banner place="third" prize={indexData.prizes.third} winners={indexData.winners.third.slice(0, 5)} />
		</div>
	)
}
