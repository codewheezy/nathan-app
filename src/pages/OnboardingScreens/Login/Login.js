import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { NavigationActions, StackActions } from 'react-navigation';

//components 
import Bgjumbotron from '../../../components/BgJumbotron';
import Block from '../../../components/Block';
import NnatanText from  '../../../components/NnatanText';
import NnatanInput from '../../../components/NnatanInput';
import NnatanIcon from '../../../components/NnatanIcon';
import NnatanButton from '../../../components/NnatanButton';
import BackIconButton from '../../../components/BackIconButton';
import { Foundation, MaterialIcons } from '@expo/vector-icons';


//constants
import { theme } from '../../../constants';
const { COLORS, SIZES } = theme;

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
      <Block>
        <Bgjumbotron />
            <View style={styles.backButton}>
                <BackIconButton navigation={navigation} />
            </View>
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
                style={styles.card}>
                        <Block column>
                            <NnatanText 
                                secondary
                                xxxlarge
                                light200>
                                Login
                            </NnatanText>
                            <View style={styles.content}>
                                <Block
                                    flex={false}
                                    row 
                                    style={styles.inputWrap}
                                    margin={[8,0,8,0]}>
                                    <NnatanIcon>
                                    <Foundation 
                                        name="mail"
                                        size={20}
                                        color={COLORS.primary}
                                        />
                                    </NnatanIcon>
                                    <NnatanInput 
                                        placeholder="Email Address"
                                        value={email}
                                        onChangeText={email => setEmail({email})}
                                        placeholderTextColor={'#58B681'}
                                        // onBlur={handleBlur('email')} 
                                        />
                                </Block>
                                <Block
                                    flex={false}
                                    row 
                                    style={styles.inputWrap}
                                    margin={[8,0,8,0]}>
                                    <NnatanIcon>
                                    <MaterialIcons 
                                        name="lock"
                                        size={20}
                                        color={COLORS.primary}
                                        />
                                    </NnatanIcon>
                                    <NnatanInput 
                                        placeholder="Password"
                                        secureTextEntry={true}
                                        placeholderTextColor={'#58B681'}
                                        value={password}
                                        onChangeText={password => setPassword({password})}
                                        // onBlur={handleBlur('password')} 
                                        />
                                </Block>
                                <View style={styles.resentWrapper}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Forgetpassword')}>
                                        <View style={styles.underline}>
                                            <NnatanText 
                                                smallish 
                                                secondary>
                                                Forgot password
                                            </NnatanText>
                                        </View>
                                    </TouchableOpacity> 
                                </View>
                                <View style={styles.space}>
                                    <NnatanButton 
                                        primary 
                                        margin={[0,0,90,0]}
                                        style={styles.buttons}
                                        onPress={() => navigation.navigate('Home')}
                                        // onPress={() => navigation.navigate('mainScreens', {}, NavigationActions.navigate({ routeName: 'Home' }))}
                                        >
                                            <NnatanText
                                                white  
                                                bold
                                                medium>
                                                Sumbit
                                            </NnatanText>
                                    </NnatanButton>
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
        top: '40%',
        right: 0,
        left: 0,
        bottom: 0,
        position: 'absolute',
        paddingTop: '12%',
        paddingHorizontal: SIZES.screenWidth * 0.10
    },
    content: {
        paddingTop: '13%',
        flexDirection: 'column'
    },
    inputWrap: {
        width: '100%',
        borderRadius: 0,
        backgroundColor: 'transparent',
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.primary
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
        paddingTop: '16%'
    },
    backButton: {
        position: 'absolute',
        top: '4.5%',
        // left: '2%'
    }
})

Login.navigationOptions = {
    header: null
};

Login.propTypes = {
    navigation: PropTypes.object
};

export default Login;