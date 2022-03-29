// import type { AppProps } from 'next/app'
import SEO from '@bradgarropy/next-seo'
import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  // console.log('node-env', )
  return (
    <Layout>
      <SEO title="Star Homecare Services" description="A blog and portfolio" icon='/adonis.ico' />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
