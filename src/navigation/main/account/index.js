import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Account from '../../../pages/MainScreens/Account/Account';

import { Ionicons } from '@expo/vector-icons';

const AccountScreens = createStackNavigator(
    {
        Account
    },
    {
        defaultNavigationOptions: {
          headerStyle: {},
          headerBackImage: <Ionicons size={25} color={'#000000'} />,
          headerBackTitle: null,
          headerLeftContainerStyle: {},
          headerRightContainerStyle: {}
        }
      }
)

export default AccountScreens