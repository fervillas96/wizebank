import MobileAppContainer from '../../components/MobileAppContainer';
import NavBar from '../../components/NavBar';
import BodyContainer from '../../components/BodyContainer';
import NavigationButtons from '../../components/NavigationButtons';

const BankAccount = () => {
  return (  
    <MobileAppContainer>
      <NavBar />
      <BodyContainer>
        HELLO WORLD FROM BANK ACCOUNT
      </BodyContainer> 
      <NavigationButtons />
    </MobileAppContainer>
  
  )
}

export default BankAccount;