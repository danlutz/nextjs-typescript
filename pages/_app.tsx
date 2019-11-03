import React from 'react'
import App /*, { AppContext }*/ from 'next/app'

import Layout from '../components/Layout'

import '../styles/global.scss'

class CustomApp extends App {
  //   public static async getInitialProps({ Component, ctx }: AppContext) {
  //     let pageProps: any = {}

  //     if (Component.getInitialProps) {
  //       pageProps = await Component.getInitialProps(ctx)
  //     }

  //     return {
  //       pageProps: {
  //         ...pageProps,
  //         bar: 'foo',
  //       },
  //     }
  //   }

  public render() {
    const { Component /*pageProps*/ } = this.props as Props

    return (
      <Layout>
        <Component /*{...pageProps}*/ />
      </Layout>
    )
  }
}

// If you need to use getInitialProps in _app.tsx, the props below will be available in every page
// export interface AppProps {
//   bar: 'foo'
// }

interface Props {
  Component: any
  // pageProps: AppProps
}

export default CustomApp
