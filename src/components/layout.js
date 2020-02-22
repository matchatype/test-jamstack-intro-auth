import React from 'react'
import {Link} from 'gatsby'
import {IdentityContextProvider} from 'react-netlify-identity-widget'
import './layout.css'

const Layout = ({children}) => (
  <IdentityContextProvider url="https://frosty-raman-d8058c.netlify.com">
    <header>
      <Link to="/">JAM Stack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
)

export default Layout
