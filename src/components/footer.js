import React from "react"
import { Link } from "gatsby"

import "./footer.scss"
import indexData from "../json/index.json"

function Social({type, link}){
	var social_logo = "";
	var link_href = link;
	var link_type = ""
	switch(type){
		case "facebook":
			social_logo = "/assets/img/social/facebook-logo.png";
			link_type = "Facebook";
			break;
		case "twitter":
			social_logo="/assets/img/social/twitter-logo.png";
			link_type = "Twitter";
			break;
		default:
			social_logo="/placeholder-logo.png";
			link_href = "";
			return <></>;
			break;
	}
	return (
		<a class="social" href={link_href}>
			<img src={social_logo} />
			<span>{link_type}</span>
		</a>
	)
}

function Sponsor({logoSrc, link}) {
	return (
		<a class="sponsor" href={link}>
			<img src={logoSrc} />
		</a>
	)
}

export default function Footer() {
	return (
		<div class="footer incompressible">
			<div class="top">
				<div class="wrapper">
					<div class="socials section">
						<h2>Contact us</h2>
						{indexData.socials.map((social) => {
							return(
								<Social type={social.type} link={social.link} />
							)
						})}
					</div>
					<div class="other-links section">
						<h2>UPACM</h2>
						<a class="other-link" href="https://upacm.net">Website</a>
						<a class="other-link" href="https://upacm.net">Automaton</a>
						<a class="other-link" href="https://upacm.net">Privacy Policy</a>
					</div>
					<div class="sponsors section">
						<h2>Our Sponsors</h2>
						{indexData.sponsors.map((sponsor) => {
							return(
								<Sponsor link={sponsor.sponsorLink} logoSrc={sponsor.staticLogoSrcAlt} />
							)
						})}
					</div>
				</div>
			</div>
			<div class="bottom">
					<span class="copyright">© 2019 Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.</span>
			</div>
		</div>
	)
}
