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
		case "linkedin":
			social_logo="/assets/img/social/linkedin-logo.png";
			link_type = "LinkedIn";
			break;
		case "youtube":
			social_logo="/assets/img/social/youtube-logo.png";
			link_type = "Youtube";
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
		</a>
	)
}

function Contact({type, name, link}) {
	var contact_logo = "";
	var link_href = link;
	var link_type = ""
	switch(type){
		case "facebook":
			contact_logo = "/assets/img/social/facebook-logo.png";
			link_type = "Facebook";
			break;
		case "twitter":
			contact_logo="/assets/img/social/twitter-logo.png";
			link_type = "Twitter";
			break;
		case "email":
			contact_logo="/assets/img/social/email-logo.png";
			link_type = "Email";
			break;
		case "location":
			contact_logo="/assets/img/social/location-logo.png";
			link_type = "Location";
			break;
		case "mobile":
			contact_logo="/assets/img/social/mobile-logo.png";
			link_type = "Mobile";
			break;
		default:
			contact_logo="/placeholder-logo.png";
			link_href = "";
			return <></>;
			break;
	}
	if(link != "#"){
		return (
			<a class="contact" href={link}>
				<img src={contact_logo} />
				<span>{name}</span>
			</a>
		)
	}else{
		return (
			<div class="contact">
				<img src={contact_logo} />
				<span>{name}</span>
			</div>
		)
	}
}

export default function Footer() {
	let year = new Date();
	let year_str = year.getFullYear();
	return (
		<div class="footer incompressible">
			<div class="top">
				<div class="wrapper">
					<div class="other-links section">
						<h2>UPACM</h2>
						<a class="other-link" href="https://upacm.net">Website</a>
						<a class="other-link" href="https://upacm.github.io/acm-website/automaton/">Automaton</a>
						<a class="other-link" href="https://upacm.net/privacy-policy/">Privacy Policy</a>
					</div>
					<div class="contacts section">
						<h2>Contact Us</h2>
						{indexData.contacts.map((contact) => {
							return(
								<Contact link={contact.link} name={contact.name} type={contact.type} />
							)
						})}
					</div>
					<div class="socials section">
						<h2>Connect with us!</h2>
						<div class="social-links">
						{indexData.socials.map((social) => {
							return(
								<Social type={social.type} link={social.link} />
							)
						})}
						</div>
					</div>
				</div>
			</div>
			<div class="bottom">
					<span class="copyright">© {year_str} Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.</span>
			</div>
		</div>
	)
}
