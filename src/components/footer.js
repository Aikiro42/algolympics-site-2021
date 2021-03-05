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
				{name}
			</a>
		)
	}else{
		return (
			<div class="contact">
				<img src={contact_logo} />
				{name}
			</div>
		)
	}
}

export default function Footer() {
	return (
		<div class="footer incompressible">
			<div class="top">
				<div class="wrapper">
					<div class="other-links section">
						<h2>UPACM</h2>
						<a class="other-link" href="https://upacm.net">Website</a>
						<a class="other-link" href="https://upacm.net">Automaton</a>
						<a class="other-link" href="https://upacm.net">Privacy Policy</a>
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
						{indexData.socials.map((social) => {
							return(
								<Social type={social.type} link={social.link} />
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
