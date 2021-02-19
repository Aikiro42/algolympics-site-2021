import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import hamburgerImg from "../assets/images/hamburger-icon.png"

import "./header.scss"

function Navlink({linkName, href}) {
	return (
		<Link to={href}>
			<span class="navlink">
				{linkName}
			</span>
		</Link>
	)
}

export default function Header({isIndex}) {
	const [scrolled, setScrolled] = useState(false);
	const [navbarVisible, setNavbarVisible] = useState(false);
	
	useEffect(() => {
	const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2;
	const handleScroll = () => {
		const isScrolled = window.scrollY > vh;
		if (isScrolled !== scrolled) {
			setScrolled(!scrolled);
		}
	}
	document.addEventListener('scroll', handleScroll);
	});
	
	return (
		<>
			<div class={scrolled || !isIndex ? "header" : "header top"}>
				<div class="wrapper">
					<Link to="/">
					<div class="title">
						<img />
						<h1>Algolympics <span class="algo-year">2021</span></h1>
					</div>
					</Link>
					<div class="navbar">
						<img class="hamburger-icon" src={hamburgerImg} onClick={() => setNavbarVisible(!navbarVisible)}/>
						<div class={navbarVisible ? "navlinks visible" : "navlinks"}>
							<Navlink linkName="Mechanics" href="/" />
							<Navlink linkName="Live" href="/" />
							<Navlink linkName="Prizes" href="/" />
							<Navlink linkName="Sponsors" href="/" />
							<Navlink linkName="Winners" href="/" />
							<Navlink linkName="Probsets" href="/" />
							<Navlink linkName="FAQ" href="/" />
							<Navlink linkName="Contact" href="/" />
							<Navlink linkName="test_link" href="/test/" />
						</div>
					</div>
				</div>
			</div>
			{!isIndex ? <div id="header-spacer"></div> : null}
		</>
	)
}
