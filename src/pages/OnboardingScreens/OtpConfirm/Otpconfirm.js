import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';


//components 
import Bgjumbotron from '../../../components/BgJumbotron';
import Block from '../../../components/Block';
import NnatanText from  '../../../components/NnatanText';
import NnatanInput from '../../../components/NnatanInput';
import NnatanButton from '../../../components/NnatanButton';

//constants
import { theme } from '../../../constants';
const { COLORS, SIZES } = theme;


const Optconfirm = ({ navigation }) => {
    const [otp, setOtp] = useState('')
    return(
        <Block>
            <Bgjumbotron />
                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    showsVerticalScrollIndicator={false}
                    style={styles.card}>
                            <Block column>
                                <NnatanText 
                                    secondary
                                    xxxlarge
                                    light200>
                                    Almost there!
                                </NnatanText>
                                <View style={styles.content}>
                                    <NnatanText 
                                        secondary
                                        bold
                                        small>
                                        Verify your email address
                                    </NnatanText>
                                    <View style={styles.depression}>
                                        <NnatanText 
                                            secondary
                                            light200
                                            small>
                                            To very your email, we've sent a One Time Password (OTP) to your phone
                                        </NnatanText>
                                    </View>
                                    <View style={styles.otpform}>
                                    <NnatanInput
                                        withBorder 
                                        placeholder="Enter OTP"
                                        placeholderTextColor={'#58B681'}
                                        value={otp}
                                        onChangeText={otp => setOtp({otp})}
                                        // onBlur={handleBlur('email')} 
                                    />
                                    <View style={styles.resentWrapper}>
                                        <View style={styles.underline}>
                                            <NnatanText 
                                                smallish 
                                                secondary>
                                                Resent OTP
                                            </NnatanText>
                                        </View>
                                    </View>
                                    <View style={styles.space}>
                                        <NnatanButton 
                                            primary 
                                            margin={[0,0,90,0]}
                                            style={styles.buttons}
                                            onPress={() => navigation.navigate('Emailconfirm')}>
                                                <NnatanText
                                                    white  
                                                    bold
                                                    medium>
                                                    Submit
                                                </NnatanText>
                                        </NnatanButton>
                                    </View> 
                                    </View>
                                </View>
                            </Block>
                </KeyboardAwareScrollView>
        </Block>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white',
        top: '18%',
        right: 0,
        left: 0,
        bottom: 0,
        position: 'absolute',
        paddingTop: '12%',
        paddingHorizontal: SIZES.screenWidth * 0.10
    },
    content: {
        paddingTop: '9%',
        flexDirection: 'column'
    },
    depression: {
        width: '100%',
    },
    otpform: {
        marginTop: 35
    },
    resentWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    underline: {
        borderBottomWidth: 1,
        marginLeft: 9,
        borderBottomColor: COLORS.darkGray,
        marginTop: '30%'
    },
    space: {
        paddingTop: '55%'
    }
})

Optconfirm.navigationOptions = {
    header: null
};

Optconfirm.propTypes = {
    navigation: PropTypes.object
};

export default Optconfirm;