import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import CountryPicker from 'react-native-country-picker-modal';



//components 
import Bgjumbotron from '../../../components/BgJumbotron';
import Block from '../../../components/Block';
import NnatanText from  '../../../components/NnatanText';
import NnatanIcon from '../../../components/NnatanIcon';
import NnatanButton from '../../../components/NnatanButton';
import NnatanInput from '../../../components/NnatanInput';
import BackIconButton from '../../../components/BackIconButton';
import { Ionicons, Foundation, MaterialIcons, FontAwesome } from '@expo/vector-icons';

//constants
import { theme } from '../../../constants';
const { COLORS, SIZES } = theme;


// const validationSchema = Yup.object().shape({
//     firstname: Yup.string()
//       .max(10, 'please enter no more than 10 characters')
//       .required('please provide your first name'),
//     email: Yup.string()
//       .email('please provide a valid email')
//       .required('email cannot be empty'),
//     password: Yup.string()
//       .required('please provide your password')
//       .min(8, 'password must be atleast 8 characters'),
//     confirmpassword: Yup.string()
//       .when("password", {
//         is: val => (val && val.length > 0 ? true : false),
//         then: Yup.string().oneOf(
//           [Yup.ref("password")],
//           "Both password need to be the same"
//         )
//       })
//   });

const Signup = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState('NG');
    const [callingCode, setCallingCode] = useState('234');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [agree, setAgree] = useState(true);
    const [checkboxIcon, changeIconCheckbox] = useState('md-checkbox-outline')

    const toggleVisibility = () => {
        setAgree(!agree);
        changeIconCheckbox(agree ? 'md-square-outline' : 'md-checkbox-outline');
      };
    
    const handleChanges =  async val => {
        setCallingCode(val.callingCode[0]);
        setCountryCode(val.cca2);
      };

    return(
    // <Formik
    //     initialValues={{ 
    //     firstname: '', 
    //     email: '', 
    //     password: '', 
    //     confirmpassword: '' }}
    //     onSubmit={(values, { setSubmitting }) => {
    //         setTimeout(() => {
    //             alert(JSON.stringify(values, null, 2));
    //             setSubmitting(false);
    //           }, 400);
    //     }}
    //     validationSchema={validationSchema}
    //   >
    //    {({
    //     handleChange,
    //     handleSubmit,
    //     values,
    //     isSubmitting,
    //     errors,
    //     isValid,
    //     setErrors,
    //     handleBlur,
    //     touched
    //   }) => (
    //   <>
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
                            Sign Up
                        </NnatanText>
                        <View style={styles.signupForm}>
                            <Block 
                            flex={false}
                            row 
                            style={styles.inputWrap}
                            margin={[0,0,8,0]}>
                            <NnatanIcon>
                                <Ionicons 
                                    name="md-person"
                                    size={20}
                                    color={COLORS.primary}
                                    />
                            </NnatanIcon>  
                            <NnatanInput 
                                placeholder="Full Name"
                                value={firstname}
                                onChangeText={firstname => setFirstname({firstname})}
                                placeholderTextColor={'#58B681'}
                                // onFocus={() => {
                                //     setErrors({});
                                // }}
                                // onBlur={handleBlur('firstname')}
                                 />
                            </Block>
                            {/* {errors.firstname && touched.firstname ? <NnatanText error regular margin={[1, 0, 1, 0]}>{errors.firstname}</NnatanText> : null} */}
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
                            {/* {errors.email && touched.email ? <NnatanText error regular margin={[1, 0, 1, 0]}>{errors.email}</NnatanText> : null} */}
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
                                    value={password}
                                    onChangeText={password => setPassword({password})}
                                    placeholderTextColor={'#58B681'}
                                    // onBlur={handleBlur('password')}
                                     />
                            </Block>
                            {/* {errors.password && touched.password ? <NnatanText error regular margin={[1, 0, 1, 0]}>{errors.password}</NnatanText> : null} */}
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
                                    placeholder="Confirm Password"
                                    placeholderTextColor={'#58B681'}
                                    secureTextEntry={true}
                                    value={confirmpassword}
                                    onChangeText={confirmpassword => setConfirmpassword({confirmpassword})}
                                    // onBlur={handleBlur('confirmpassword')}
                                    />
                            </Block>
                            {/* {errors.confirmpassword && touched.confirmpassword ? <NnatanText error regular margin={[1, 0, 1, 0]}>{errors.confirmpassword}</NnatanText> : null} */}
                            <Block
                            flex={false}
                            row 
                            style={styles.inputWrap}
                            margin={[8,0,0,0]}>
                                <TouchableOpacity
                                    style={{
                                    width: '35%',
                                    paddingHorizontal: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                    }}
                                >
                                    <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        flexDirection: 'row'
                                    }}
                                    >
                                    <CountryPicker
                                        countryCode={countryCode}
                                        withAlphaFilter
                                        withFilter
                                        onSelect={handleChanges}
                                        withCallingCode
                                    />
                                    <View style={{ marginRight:4 }}>
                                        <NnatanText>{callingCode ? '+' + callingCode : null}</NnatanText>
                                    </View>
                                    <FontAwesome name="caret-down" size={15} color={COLORS.darkGray} />
                                    </View>
                                </TouchableOpacity>
                                <NnatanInput 
                                    placeholder="Phone Number" 
                                    value={phonenumber}
                                    onChangeText={phonenumber => setPhoneNumber({phonenumber})}
                                    placeholderTextColor={'#58B681'}
                                    />
                            </Block>
                            <View style={styles.conditionWrapper}>
                                <TouchableOpacity onPress={() => toggleVisibility()}>
                                    <Ionicons 
                                        name={checkboxIcon}
                                        size={22}
                                        color={COLORS.darkGray} />
                                </TouchableOpacity>
                                <View style={styles.underline}>
                                    <NnatanText 
                                        smallish 
                                        secondary>
                                        I accept the terms and conditions
                                    </NnatanText>
                                </View> 
                            </View>
                            <NnatanButton 
                                primary
                                style={styles.buttons}
                                margin={[55,0,90,0]}
                                onPress={() => navigation.navigate('Optconfirm')}
                                disabled={!agree}
                                // isLoading={isSubmitting}
                                >
                                <NnatanText
                                    white  
                                    bold
                                    medium>
                                    Submit
                                </NnatanText>
                            </NnatanButton>
                        </View>
                    </Block>
        </KeyboardAwareScrollView>
     </Block>
    //  </>
    //   )}
    // </Formik>
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
    signupForm: {
       paddingTop: '9%',
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
    conditionWrapper: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    underline: {
        borderBottomWidth: 1,
        marginLeft: 9,
        borderBottomColor: COLORS.darkGray
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 50,
        borderColor: '#E8F0F2',
        borderRadius: SIZES.radius,
        backgroundColor: '#EAF0F1',
        borderWidth: 2,
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    backButton: {
        position: 'absolute',
        top: '4.5%',
        // left: '2%'
    }
})

Signup.navigationOptions = {
    header: null
};

Signup.propTypes = {
    navigation: PropTypes.object
};

export default Signup;