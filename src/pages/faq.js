import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"
import FaqLayout from "../components/faq/faq-layout.js"

import "../styles/global.scss"

export default function Faq({ data }) {
  return (
    <>
      <Header isIndex={false} />
      <div class="content wrapper index">
        <FaqLayout>
          <div
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html,
            }}
          />
        </FaqLayout>
        <BlankContentfiller height="100px" color="none" />
      </div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "markdown/faq.md/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`
