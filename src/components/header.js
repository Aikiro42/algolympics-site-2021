import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import hamburgerImg from "../assets/images/hamburger-icon.png"
import headerImg from "../assets/images/header-icon.png"

import AlgoYear from "./algo-year.js"

import "./header.scss"

function Navlink({linkName, href}) {
	if(linkName == "LIVE"){
		return(
			<Link to={href} id="live">
				<span class="navlink" id="live">
					LIVE
				</span>
			</Link>
		)
	}
	if(linkName == "UP ACM"){
		return(
			<a href={href}>
				<span class="navlink">
					{linkName}
				</span>
			</a>
		)
	}
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
						<h1><span class="red">ALGO</span><span class="yellow">LYM</span><span class="green">PICS</span> <span class="blue">2021</span></h1>
					</div>
					</Link>
					<div class="navbar">
						<img class="hamburger-icon" src={hamburgerImg} onClick={() => setNavbarVisible(!navbarVisible)}/>
						<div class={navbarVisible ? "navlinks visible" : "navlinks"}>
							<Navlink linkName="LIVE" href="/live/" />
							<Navlink linkName="Mechanics" href="/mechanics/" />
							<Navlink linkName="Probsets" href="/probsets/" />
							<Navlink linkName="FAQ" href="/faq/" />
							<Navlink linkName="UP ACM" href="http://upacm.net" />
						</div>
					</div>
				</div>
			</div>
			{!isIndex ? <div id="header-spacer"></div> : null}
		</>
	)
}
