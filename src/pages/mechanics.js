import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"

import "../styles/global.scss"
import "./mechanics.scss"

export default function Mechanics({ data }) {
  return (
    <>
      <Header isIndex={false} />
      <div class="content wrapper index">
        <div id="mechanics-layout" class="md-layout">
          <h1 id="page-title">Mechanics</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html,
            }}
          />
        </div>
        <BlankContentfiller height="100px" color="none" />
      </div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/mechanics.md/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`
