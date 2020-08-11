import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"

import "../styles/main.sass"

const linkStyle = css({ float: `right` })

export default ({ children, data }) =>
    <g.Div>
      <div className='headtastic'>
        <div className='portal'>
          <Link to={`/`}>
            <g.H3 marginBottom={rhythm(2)} display={`inline-block`}>
              {data.site.siteMetadata.title}
            </g.H3>
          </Link>
          <Link className={linkStyle} to={`/contact/`}>
            Contact
          </Link>
          <Link className={linkStyle} to={`/about/`}>
            About
            |&nbsp;
          </Link>
          <Link className={linkStyle} to={`/chart/`}>
            Chart
            |&nbsp;
          </Link>
        </div>
      </div>
      <div className='portal'>
        {children()}
      </div>
    </g.Div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

