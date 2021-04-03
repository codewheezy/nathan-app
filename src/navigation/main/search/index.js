import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Search from '../../../pages/MainScreens/Search/Search';

import { Ionicons } from '@expo/vector-icons';

const SearchScreens = createStackNavigator(
    {
        Search
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

export default SearchScreens