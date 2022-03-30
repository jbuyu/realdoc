// import type { AppProps } from 'next/app'
import SEO from '@bradgarropy/next-seo'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // console.log('node-env', )
  return (
    <Layout>
      <SEO
        title="Star Home Health Services"
        description="Offering online medical home health services in kenya"
        icon="/adonis.ico"
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
