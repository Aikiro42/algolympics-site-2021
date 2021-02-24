import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import hamburgerImg from "../assets/images/hamburger-icon.png"
import headerImg from "../assets/images/header-icon.png"

import AlgoYear from "./algo-year.js"

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
		return () => {document.removeEventListener(`scroll`, handleScroll);}
	});
	
	return (
		<>
			<div class={scrolled || !isIndex ? "header" : "header top"}>
				<div class="wrapper">
					<Link to="/">
					<div class="title">
						<img src={headerImg} />
						<h1>Algolympics <AlgoYear /></h1>
					</div>
					</Link>
					<div class="navbar">
						<img class="hamburger-icon" src={hamburgerImg} onClick={() => setNavbarVisible(!navbarVisible)}/>
						<div class={navbarVisible ? "navlinks visible" : "navlinks"}>
							<Navlink linkName="Mechanics" href="/mechanics/" />
							<Navlink linkName="Live" href="/" />
							<Navlink linkName="Prizes" href="/#prizes-section" />
							<Navlink linkName="Winners" href="/" />
							<Navlink linkName="Sponsors" href="/#sponsors-section" />
							<Navlink linkName="Probsets" href="/" />
							<Navlink linkName="FAQ" href="/faq/" />
							<Navlink linkName="Contact" href="/contact/" />
						</div>
					</div>
				</div>
			</div>
			{!isIndex ? <div id="header-spacer"></div> : null}
		</>
	)
}
