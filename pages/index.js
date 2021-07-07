import MobileAppContainer from '@components/MobileAppContainer'
import NavBar from '@components/NavBar'
import BodyContainer from '@components/BodyContainer'
import NavigationButtons from '@components/NavigationButtons'

import SpentSection from '@components/SpentSection'
import IconIndicatorSection from '@components/IconIndicatorSection'
import { SectionsContainer } from '@components/Styled/styled'
import CategoriesSection from '@components/CategoriesSection'
import InvestmentBotSection from '@components/InvestmentBotSection'
import CategoriesBudgetSection from '@components/CategoriesBudgetSection'


export default function Home() {
  return (  
    <MobileAppContainer>
      <NavBar />
      <BodyContainer>
        <SectionsContainer>
          <SpentSection>
          </SpentSection>
        </SectionsContainer>
        <SectionsContainer>
          <IconIndicatorSection>
          </IconIndicatorSection>
          <IconIndicatorSection>
          </IconIndicatorSection>
        </SectionsContainer>
        <SectionsContainer>
          <CategoriesSection/>
        </SectionsContainer>
        <SectionsContainer>
          <CategoriesBudgetSection/>
        </SectionsContainer>
        <SectionsContainer>
          <InvestmentBotSection/>
        </SectionsContainer>
      </BodyContainer>
      <NavigationButtons />
    </MobileAppContainer>
  
  )
}
