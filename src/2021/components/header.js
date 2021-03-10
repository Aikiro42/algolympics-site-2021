import React, { useState, useEffect, useCallback } from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

import hamburgerImg from "../assets/images/hamburger-icon.png"
import headerImg from "../assets/images/header-icon.png"

import "./header.scss"

import globalDetails from "../../data/details.json"

function NavDropdown({ name, links }) {
  const [visible, setVisible] = useState(false)

  const handleKeydown = useCallback(
    event => {
      if (event.key === "Enter") {
        setVisible(!visible)
      }
    },
    [visible]
  )

  return (
    <div class="nav-dropdown navlink-outer">
      <div
        role="button"
        class="nav-dropdown-button"
        tabIndex={0}
        onClick={() => setVisible(!visible)}
        onKeyDown={handleKeydown}
      >
        <span class="navlink">
          {name}&nbsp;
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>
      <div
        class={
          visible ? "nav-dropdown-content visible" : "nav-dropdown-content"
        }
      >
        {links.map(({ label, href, external }) => {
          if (external) {
            return (
              <a href={href} class="nav-dropdown-link">
                {label}
              </a>
            )
          } else {
            return (
              <Link
                to={href}
                class="nav-dropdown-link"
                activeClassName="nav-dropdown-link"
              >
                {label}
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}

export default function Header({ isIndex }) {
  const [scrolled, setScrolled] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(false)

  useEffect(() => {
    const vh =
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ) / 2
    const handleScroll = () => {
      const isScrolled = window.scrollY > vh
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener(`scroll`, handleScroll)
    }
  })

  const handleKeydown = useCallback(
    event => {
      if (event.key === "Enter") {
        setNavbarVisible(!navbarVisible)
      }
    },
    [navbarVisible]
  )

  return (
    <>
      <div class={scrolled || !isIndex ? "header" : "header top"}>
        <div class="wrapper">
          <Link to="/2021/">
            <div class="title">
              <img src={headerImg} alt="Header" />
              <h1>
                <span class="red">ALGO</span>
                <span class="yellow">LYM</span>
                <span class="green">PICS</span> <span class="blue">2021</span>
              </h1>
            </div>
          </Link>
          <div
            role="button"
            class="navigation-hamburger"
            tabIndex={0}
            onClick={() => setNavbarVisible(!navbarVisible)}
            onKeyDown={handleKeydown}
          >
            <img class="hamburger-icon" src={hamburgerImg} alt="Hamburger" />
          </div>
          <div class={navbarVisible ? "navbar visible" : "navbar"}>
            <nav class="navlinks">
              <Link
                class="navlink live"
                activeClassName="navlink live"
                to="/2021/live/"
              >
                LIVE
              </Link>
              <Link
                class="navlink"
                activeClassName="navlink"
                to="/2021/mechanics/"
              >
                Mechanics
              </Link>
              <Link
                class="navlink"
                activeClassName="navlink"
                to="/2021/problems/"
              >
                Problems
              </Link>
              <Link class="navlink" activeClassName="navlink" to="/2021/faq/">
                FAQ
              </Link>
              <NavDropdown
                name="Archive"
                links={globalDetails.yearsLinks.map(
                  ({ year, link, external }) => {
                    return {
                      label: `${year}`,
                      href: link,
                      external,
                    }
                  }
                )}
              />
              <a class="navlink" href="http://upacm.net">
                UP ACM
              </a>
            </nav>
          </div>
        </div>
      </div>
      {!isIndex ? <div class="header-spacer"></div> : null}
    </>
  )
}
