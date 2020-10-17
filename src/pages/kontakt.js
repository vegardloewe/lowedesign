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

          <form name="interest" method="POST" data-netlify="true" action="thank-you">
              <input type="hidden" name="interest" value="interest" />
                <p>
                  <label><input type="email" name="email" placeholder="Your email" class="input" /></label><button type="submit" class="send">I'm interested</button>
                </p>
          </form>

          <form name="Kontaktskjema" method="post" action="#" data-netlify='' data-netlify-honeypot='_gotcha'>
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
              <label>
                <input
                  type="text"
                  name="name"
                  id="demo-name"
                  placeholder="Navn"
                  required
                />
              </label>
              </div>
              <div className="col-6 col-12-xsmall">
              <label>
                <input
                  type="email"
                  name="email"
                  id="demo-email"
                  placeholder="E-post"
                  required
                />
              </label>
              </div>
              {/* Break */}
              <div className="col-12">
              <label>
                <select name="demo-category" id="demo-category">
                  <option value>- Type henvendelse -</option>
                  <option value={1}>Visuell identitet</option>
                  <option value={1}>Nettside</option>
                  <option value={1}>Annet</option>
                </select>
              </label>
              </div>
              {/* Break */}
              <div className="col-12">
              <label>
                <textarea
                  name="message"
                  id="demo-message"
                  placeholder="Beskrivelse"
                  rows={6}
                  defaultValue={""}
                />
              </label>
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <button
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
