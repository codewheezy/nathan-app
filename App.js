import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
// import * as Localization from 'expo-localization';
import { Root } from 'native-base';

//components
import Navigation from './src/navigation';

//constants 
const _loadResourcesAsync = async () => {
  await Font.loadAsync({
    'effra_medium': require('./assets/fonts/EffraMedium.ttf'),
    'effra_bold': require('./assets/fonts/EffraBold.ttf'),
    'effra_regular': require('./assets/fonts/EffraRegular.ttf'),
    'effra_heavy': require('./assets/fonts/EffraHeavy.ttf'),
    'effra_light': require('./assets/fonts/EffraLight.ttf')
  });
};

const _handleLoadingError = error => {
  console.warn(error);
};

//needed for screen & navigation optimization across the two platforms see here https://www.npmjs.com/package/react-native-screens
useScreens();

const NnatanApp = props => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  // const [currentLocale, setCurrentLocale] = useState(Localization.locale);

  _loadResourcesAsync().then(() => setIsLoadingComplete(true))

  // if(!isLoadingComplete && !props.skipLoadingScreen) {
  //   return(
  //     <AppLoading
  //       startAsync={() => _loadResourcesAsync()}
  //       onError={_handleLoadingError}
  //       // onFinish={() => setIsLoadingComplete(true)}
  //     />
  //   )
  // }
  return (
      <Root>
        {isLoadingComplete && (
          <Navigation 
          // screenProps={{
          //   locale: currentLocale,
          //   setLocale: setCurrentLocale
          // }}
        />
      )}
      </Root>
  );
}

NnatanApp.defaultProps = {
  skipLoadingScreen: false
};

NnatanApp.propTypes = {
  skipLoadingScreen: PropTypes.bool.isRequired
};

export default NnatanApp;

