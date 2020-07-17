import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import NavigationBar from './NavigationBar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <NavigationBar />
    </header>
    <Container>
      {children}
    </Container>
    <hr />
    <Container>
      <footer>
        <span>I'm here to stay (Footer)</span>
      </footer>
    </Container>
  </div>
)

export default Layout;
