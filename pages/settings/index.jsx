import MobileAppContainer from '@components/MobileAppContainer';
import NavBar from '@components/NavBar';
import BodyContainer from '@components/BodyContainer';
import NavigationButtons from '@components/NavigationButtons';

const Settings = () => {
  return (  
    <MobileAppContainer>
      <NavBar />
      <BodyContainer>
        HELLO WORLD FROM SETTINGS 
      </BodyContainer> 
      <NavigationButtons />
    </MobileAppContainer>
  
  )
}

export default Settings;