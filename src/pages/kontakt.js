import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Kontakt" keywords={[`kontakt`, `løwe`, `vegard løwe`, `design`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="forms">Kontakt meg</h2>
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  placeholder="Navn"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  placeholder="E-post"
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <select name="demo-category" id="demo-category">
                  <option value>- Type henvendelse -</option>
                  <option value={1}>Visuell identitet</option>
                  <option value={1}>Nettside</option>
                  <option value={1}>Annet</option>
                </select>
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Beskrivelse"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
