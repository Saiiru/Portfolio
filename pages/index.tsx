import  Head  from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HomePage from './HomePage'
import Services from './Services'
import Works from './Works'

const  Home = () => (
  <div>
    <Head>
        <title>Sairu Dev</title>
      <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Navbar />
    <HomePage />
    <Services />
    <Works />
    <Footer />
  </div>
)

export default Home 
