import MobileAppContainer from '../components/MobileAppContainer';
import NavBar from '../components/NavBar';
import BodyContainer from '../components/BodyContainer';
import NavigationButtons from '../components/NavigationButtons';

const Home = () => {
  return (  
    <MobileAppContainer>
      <NavBar />
      <BodyContainer />
      <NavigationButtons />
    </MobileAppContainer>
  
  )
}

export default Home;