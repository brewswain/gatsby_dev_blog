import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout.component"

import "./blog-post.styles.scss"
import "typeface-aleo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <div className="title-container">
          <h1 className="post-title">{post.frontmatter.title}</h1>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
