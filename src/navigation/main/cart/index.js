import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Cart from '../../../pages/MainScreens/Cart/Cart';
import CheckOut from '../../../pages/MainScreens/Checkout/Checkout';
import AddCard from '../../../pages/MainScreens/Addcard/Addcard';
import AddAddress from '../../../pages/MainScreens/AddAddress/Addaddress';
import ConfirmOrder from '../../../pages/MainScreens/Confirmorder/Confirmorder';

import { Ionicons } from '@expo/vector-icons';

const CartScreens = createStackNavigator(
    {
        Cart,
        CheckOut,
        AddCard,
        AddAddress,
        ConfirmOrder
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

export default CartScreens;