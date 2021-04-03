import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import onboardingScreens from './onboarding';
import mainScreens from './main';

const rootNavigation = createSwitchNavigator(
  { mainScreens, onboardingScreens },
  {
    initialRouteName: 'onboardingScreens'
  }
);
export default createAppContainer(rootNavigation);