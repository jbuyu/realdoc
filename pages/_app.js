// import type { AppProps } from 'next/app'
import SEO from '@bradgarropy/next-seo'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // console.log('node-env', )
  return (
    <Layout>
      <SEO
        title="Star Homecare Services"
        description="Offering online medical health services in kenya"
        icon="/favicon.ico"
        keywords={[
          'Kenyan Doctor',
          'Kenya doctor help',
          'Consult doctor Kenya',
          'Online medical consultation',
          'Best online consultation kenya',
        ]}
        facebook={{
          image: "/favicon.png",
          url: "https://www.starhomecareservices.com/",
          type: "website",
      }}
      twitter={{
          image: "/twitter.png",
          site: "@bradgarropy",
          card: "summary",
      }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
