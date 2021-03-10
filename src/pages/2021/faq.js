import React from "react"
import { graphql } from "gatsby"

import Header from "../../2021/components/header.js"
import Footer from "../../2021/components/footer.js"
import BlankContentfiller from "../../2021/components/blank-content-filler.js"

import "../../2021/styles/global.scss"
import "./faq.scss"

export default function Faq({ data }) {
  return (
    <>
      <Header isIndex={false} />
      <div className="content wrapper index">
        <div id="faq-layout" className="md-layout">
          <h1 id="page-title">Frequently Asked Questions</h1>
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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/faq.md/" } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`
