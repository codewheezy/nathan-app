import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, View } from 'react-native';

//components
import Bgjumbotron from '../../../components/BgJumbotron';
import NnatanText from '../../../components/NnatanText';
import NnatanButton from '../../../components/NnatanButton';

//constants 
import { theme } from '../../../constants';
const { SIZES } = theme;

const Onboarding = ({ navigation }) => {
    return(
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          >
            <View style={styles.container}>
                <Bgjumbotron>
                    <View style={styles.jumbotron}>
                        <NnatanText 
                            bold
                            white
                            xxlarge>
                            Welcome!
                        </NnatanText>
                        <NnatanText 
                            light200 
                            white 
                            xlarge>
                            How was you day!
                        </NnatanText>
                    </View>
                </Bgjumbotron>
                <View style={styles.card}>
                    <NnatanButton 
                        outlined
                        style={styles.buttons}
                        onPress={() => navigation.navigate('Signup')}>
                            <NnatanText 
                                primary 
                                bold
                                medium>
                                Create an account
                            </NnatanText>
                    </NnatanButton>
                    <NnatanButton 
                        primary
                        style={styles.buttons}
                        margin={[14,0,0,0]}
                        onPress={() => navigation.navigate('Login')}>
                            <NnatanText
                                white  
                                bold
                                medium>
                                Log in
                            </NnatanText>
                    </NnatanButton>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    jumbotron: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: '40%',
        paddingLeft: 59
    },
    card: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white',
        top: '65%',
        right: 0,
        left: 0,
        bottom: 0,
        position: 'absolute',
        paddingTop: '18%',
        paddingHorizontal: SIZES.screenWidth * 0.10
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

Onboarding.navigationOptions = {
    header: null
};

Onboarding.propTypes = {
   navigation: PropTypes.object
};

export default Onboarding;