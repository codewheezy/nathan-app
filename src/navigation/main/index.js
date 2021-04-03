import {
  SimpleLineIcons as IconSimple,
  AntDesign as IconAntDesign,
  EvilIcons as IconEvil
} from '@expo/vector-icons';
import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';


//Components and Screens
import Tab from '../../components/TabComponent';
import { COLORS, SIZES } from '../../constants/theme';
import Home from './home';
import Search from './search';
import Cart from './cart';
// import Favourite from './favourite';
import Account from './account';
import About from '../../pages/MainScreens/About/About';
import ProfileDrawer from '../../components/ProfileDrawer';


const WIDTH = Dimensions.get('window').width;
const mainScreens = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <Tab
              IconType={IconAntDesign}
              iconName="home"
              size={30}
              tintColor={tintColor}
              // hasNotification={true}
              // notificationCount={5}
            />
          );
        }
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <Tab
              IconType={IconEvil}
              iconName="search"
              size={39}
              tintColor={tintColor}
              // hasNotification={true}
              // notificationCount={5}
            />
          );
        }
      }
    },
    // Favourite: {
    //   screen: Favourite,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => {
    //       return (
    //         <Tab
    //           IconType={IconEvil}
    //           iconName="heart"
    //           size={39}
    //           tintColor={tintColor}
    //           // hasNotification={true}
    //           // notificationCount={5}
    //         />
    //       );
    //     }
    //   }
    // },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <Tab
              IconType={IconSimple}
              iconName="bag"
              size={25}
              tintColor={tintColor}
              // hasNotification={true}
              // notificationCount={5}
            />
          );
        }
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <Tab
              IconType={IconEvil}
              iconName="user"
              size={38}
              tintColor={tintColor}
              // hasNotification={true}
              // notificationCount={5}
            />
          );
        }
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.primary,
      inactiveTintColor: '#000000',
      labelStyle: {
        fontSize: 10,
        margin: 0,
        padding: 0,
      },
      style: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: 'rgba(112, 112, 112, 0.2)',
        height: 60,
        paddingTop: 9,
        paddingBottom: 5,
        // paddingLeft: 11,
        // paddingRight: 11
      }
    }
  }
);

const DrawerConfig = {
  drawer: SIZES.screenWidth * 0.85,
  contentComponent: ({ navigation }) => {
    return <ProfileDrawer navigation={navigation} />;
  }
};
const drawerNavigator = createDrawerNavigator(
  {
    profileNavigation: {
      screen: mainScreens,
      navigationOptions: {
        drawerLabel: 'Home'
      }
    }, 
    About: {
      screen: About
    }
  },
  DrawerConfig
);
export default drawerNavigator;