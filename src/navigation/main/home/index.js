import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../../../pages/MainScreens/Home/Home';
import Shop from '../../../pages/MainScreens/Shop/Shop';
import Product from '../../../pages/MainScreens/Product/Product';
import Cart from '../../../pages/MainScreens/Cart/Cart';

import { Ionicons } from '@expo/vector-icons';

const HomeScreens = createStackNavigator(
    {
        Home,
        Shop,
        Product,
        Cart
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

export default HomeScreens;