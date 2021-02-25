import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./social.scss"
import indexData from "../../json/index.json"

function SocialItem({type, link}) {
	var social_logo = "";
	var link_href = link;
	switch(type){
		case "facebook":
			social_logo = "/assets/img/social/facebook-logo.png";
			break;
		case "twitter":
			social_logo="/assets/img/social/twitter-logo.png";
			break;
		default:
			social_logo="/placeholder-logo.png";
			link_href = "mailto:" + link + "?subject=Algolympics 2021";
			break;
	}
	return (
		<a class="social-item" href={link_href}>
			<img src={social_logo} />
			<span>{link}</span>
		</a>
	)
}

export default function Social() {
	return (
		<div id="contact-social-section">
			<h1>Socials</h1>
			<div id="social-list">
				{
					indexData.socials.map((social) => {
						return(
							<SocialItem type={social.type} link={social.link} />
						)
					})
				}
			</div>
		</div>
	)
}
