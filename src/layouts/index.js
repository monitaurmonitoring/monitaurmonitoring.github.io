import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"
import stawkhead from "./stawkhead.jpg";

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
          <Link className={linkStyle} to={`/about/`}>
            About
          </Link>
        </div>
      </div>
      <div className='stawkhead'>
        <img src={stawkhead} height="442" alt="Stawkhead" className='stawk-center' />
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

