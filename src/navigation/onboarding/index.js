import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import Onboarding from '../../pages/OnboardingScreens/Onboarding/Onboarding';
import Signup from '../../pages/OnboardingScreens/SignUp/Signup';
import Emailconfirm from '../../pages/OnboardingScreens/EmailConfirm/Emailconfirm';
import Optconfirm from '../../pages/OnboardingScreens/OtpConfirm/Otpconfirm';
import Login from '../../pages/OnboardingScreens/Login/Login';
import Forgetpassword from '../../pages/OnboardingScreens/ForgetPassword/Forgetpassword';

//constants
// import { images } from '../../constants';

// const { icons } = images;

const onBoardingScreens = createStackNavigator(
    { Onboarding,
      Signup,
      Emailconfirm,
      Optconfirm,
      Login,
      Forgetpassword
     },
    {
        defaultNavigationOptions: {
          headerStyle: {},
          headerBackImage: <Ionicons name="ios-arrow-back" size={25} color={'#000000'} />,
          headerBackTitle: null,
          headerLeftContainerStyle: {},
          headerRightContainerStyle: {}
        }
      }
)

export default onBoardingScreens;