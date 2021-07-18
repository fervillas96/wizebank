import MobileAppContainer from '@components/MobileAppContainer'
import NavBar from '@components/NavBar'
import BodyContainer from '@components/BodyContainer'
import NavigationButtons from '@components/NavigationButtons'
import { SectionsContainer } from '@components/Styled/styled'

import WelcomeHeader from '@components/WelcomeHeader'
import CardsSection from '@components/CardsSection'
import BudgetSection from '@components/BudgetSection';

import { useAccountProvider } from '@providers/Account/Account.provider'

export default function BankAccount() {
  const { state } = useAccountProvider()

  return (
    <MobileAppContainer>
      <NavBar />
      <BodyContainer>
        <SectionsContainer>
          <WelcomeHeader user={state.name} totalBalance={state.totalBalance} />
        </SectionsContainer>
        <SectionsContainer>
          <CardsSection cards={state.cards} />
        </SectionsContainer>
        {state.categories.map((category) => {
          return (
            <SectionsContainer key={`category-${category.name}${Math.random()}`}>
              <BudgetSection category={category} />
            </SectionsContainer>
          )
        })}
      </BodyContainer>
      <NavigationButtons />
    </MobileAppContainer>

  )
}
