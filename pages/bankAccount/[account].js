import MobileAppContainer from '@components/MobileAppContainer'
import NavBar from '@components/NavBar'
import BodyContainer from '@components/BodyContainer'
import NavigationButtons from '@components/NavigationButtons'
import { SectionsContainer } from '@components/Styled/styled'

import WelcomeHeader from '@components/WelcomeHeader';

import { profile } from '../../mocks/bank-profile'

export default function BankAccount(props) {


  console.log({ props })
  return (  
    <MobileAppContainer>
      <NavBar />
      <BodyContainer>
        <SectionsContainer>
          <WelcomeHeader/>
        </SectionsContainer>
      </BodyContainer> 
      <NavigationButtons />
    </MobileAppContainer>
  
  )
}

export async function getStaticPaths() {
  return {
    paths: ['/bankAccount/1'],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      profile: profile
    }
  }
}
