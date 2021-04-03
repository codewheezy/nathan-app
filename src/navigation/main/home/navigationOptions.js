/* eslint-disable react/display-name */
// import React from 'react'
import About from '../../../pages/MainScreens/About/About';
import {
    createDrawerNavigator,
    createAppContainer,
  } from 'react-navigation';

  const navigator = createDrawerNavigator({
    About}
  );
  export default createAppContainer(navigator);