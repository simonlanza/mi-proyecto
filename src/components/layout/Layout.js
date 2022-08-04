import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import { LayoutC } from '../../styles/extras'

const Layout = ({ children }) => {
  return (
    <LayoutC>
      {<Header />}
      {children}
      {<Footer />}
    </LayoutC>
  )
}

export default Layout;
