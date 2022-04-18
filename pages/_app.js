// import type { AppProps } from 'next/app'
import SEO from '@bradgarropy/next-seo'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // console.log('node-env', )
  return (
    <Layout>
      <SEO
        title="Best Online Doctor Consultation in Kenya - Star Homecare Services"
        description="Offering online medical health services in kenya"
        icon="/favicon.ico"
        keywords={[
          'kenyan Doctor online',
          'best kenya doctor help',
          'telemedicine in kenya',
          'best consult doctor Kenya',
          'best online medical consultation kenya',
          'best online consultation kenya',
          'best home based nursing Care in kenya',
          'best homedoctors Services in kenya',
          'best nutritionist in kenya online',
          'best physiotherapy in kenya',
          'best home based antenatal care in kenya',
        ]}
        facebook={{
          image: 'https://www.starhomecareservices.com/favicon.jpg',
          url: 'https://www.starhomecareservices.com/',
          type: 'website',
        }}
        twitter={{
          image: 'https://www.starhomecareservices.com/favicon.jpg',
          site: 'https://www.starhomecareservices.com/',
          card: 'summary',
        }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
