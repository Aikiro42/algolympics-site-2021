import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./parallax-background.scss"

export default function ParallaxBackground({parallaxSrc}) {
	const [opaque, setOpaque] = useState(false);

	useEffect(() => {
		var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
			document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
		
		const handleScroll = () => {
			var percent = window.scrollY * 100 / limit;
			percent = String(percent) + "%"
			document.getElementById("parallax-background").style.objectPosition = "center " + percent;
		}

		document.addEventListener('scroll', handleScroll);
		return () => {document.removeEventListener('scroll', handleScroll);}
	});

	return (
		<img id="parallax-background" src={parallaxSrc} />
	)
}
