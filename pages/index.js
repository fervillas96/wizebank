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

import { useAccountProvider } from '@providers/Account/Account.provider'

const Home = () => {
  const { state } = useAccountProvider()
  return (
    <MobileAppContainer>
      <NavBar />
      <BodyContainer>
        <SectionsContainer>
          <SpentSection totalIncome={state.totalIncome} spent={state.totalSpent} />
        </SectionsContainer>
        <SectionsContainer>
          <IconIndicatorSection descriptionLabel="Income" quantity={state.totalIncome} />
          <IconIndicatorSection descriptionLabel="Outcome" quantity={state.totalSpent} />
        </SectionsContainer>
        <SectionsContainer>
          <CategoriesSection categories={state.categories} totalSpent={state.totalSpent} />
        </SectionsContainer>
        <SectionsContainer>
          <CategoriesBudgetSection categories={state.categories} />
        </SectionsContainer>
        <SectionsContainer>
          <InvestmentBotSection />
        </SectionsContainer>
      </BodyContainer>
      <NavigationButtons />
    </MobileAppContainer>

  )
}

export default Home
