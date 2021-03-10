import React from "react"

import "./faq-layout.scss"

export default function FaqLayout({ children }) {
  return (
    <div id="faq-layout" class="md-layout">
      <h1 id="page-title">Frequently Asked Questions</h1>
      {children}
    </div>
  )
}
