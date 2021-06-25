import Head from 'next/head'

import MobileAppContainer from '../components/MobileAppContainer';
import NavBar from '../components/NavBar';
import BodyContainer from '../components/BodyContainer';
import NavigationButtons from '../components/NavigationButtons';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WizeBank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <body>
        <MobileAppContainer>
          <NavBar />
          <BodyContainer />
          <NavigationButtons />
        </MobileAppContainer>
      </body>
    </div>
  )
}
