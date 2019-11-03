import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: Props) => {
  return (
    <>
      <main>
        <Header />
        {children}
      </main>
      <Footer />
    </>
  )
}

interface Props {
  children: React.ReactNode
}

export default Layout
