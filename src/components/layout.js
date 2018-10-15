import React from 'react'
import Helmet from 'react-helmet'

import dogeIcon from '../assets/doge-icon.png'

class Layout extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
        }}
      >
        <Helmet>
          <meta name="description" content={'My website'} />
          <meta name="author" content="Alberto Nicoletti" />
          <meta
            name="keywords"
            content="alberto, nicoletti, illbe, illbexyz, albyx, albyxyz, web, programmer, bologna, italy, javascript, typescript, reason, reasonml, computer science"
          />
          <meta name="twitter:site" content="https://illbe.xyz" />
          <meta name="twitter:creator" content="@illbexyz" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Alberto Nicoletti" />
          <meta name="twitter:description" content="My website" />
          <meta name="twitter:image" content={dogeIcon} />
          <meta name="og:type" content="article" />
          <meta name="og:title" content="Alberto Nicoletti" />
          <meta name="og:description" content="My website" />
          <html lang="en" />
          <style type="text/css">{`
            html, body, ___gatsby {
              height: 100%;
            }
        `}</style>
        </Helmet>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
