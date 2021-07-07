import MobileAppContainer from '@components/MobileAppContainer'
import NavBar from '@components/NavBar'
import BodyContainer from '@components/BodyContainer'
import NavigationButtons from '@components/NavigationButtons'
import { SectionsContainer } from '@components/Styled/styled'

import WelcomeHeader from '@components/WelcomeHeader';
import CardsSection from '@components/CardsSection'

import { profile } from '../../mocks/bank-profile'

export default function BankAccount(props) {
  const { profile } = props;
  return (  
    <MobileAppContainer>
      <NavBar />
      <BodyContainer>
        <SectionsContainer>
          <WelcomeHeader user={profile.name} totalBalance={profile.totalBalance}/>
        </SectionsContainer>
        <SectionsContainer>
          <CardsSection cards={profile.cards} />          
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
