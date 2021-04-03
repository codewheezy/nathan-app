import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';


//components 
import Bgjumbotron from '../../../components/BgJumbotron';
import Block from '../../../components/Block';
import NnatanText from  '../../../components/NnatanText';
import NnatanButton from '../../../components/NnatanButton';
import { Feather } from '@expo/vector-icons';


//constants
import { theme } from '../../../constants';
const { COLORS, SIZES } = theme;



const Emailconfirm = ({ navigation }) => {
    return(
        <Block>
            <Bgjumbotron />
            <View style={styles.card}>
                <View style={{flex: 1}}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                            <Block column>
                                <NnatanText 
                                    secondary
                                    xxxlarge
                                    light200>
                                    Congratulations!
                                </NnatanText>
                                <View style={styles.content}>
                                <NnatanText 
                                    secondary
                                    bold
                                    small>
                                    Account Created!
                                </NnatanText>
                                <NnatanText 
                                    secondary
                                    light200
                                    small>
                                    Happy to have you around
                                </NnatanText>
                                <View style={styles.circleCheckWrap}>
                                    <View style={styles.circle}>
                                        <Feather name="check" size={200}  color={COLORS.primary} />
                                    </View>
                                </View>
                                <NnatanButton 
                                    primary 
                                    margin={[0,0,40,0]}
                                    style={styles.buttons}
                                    // onPress={() => navigation.navigate('Optconfirm')}
                                    >
                                        <NnatanText
                                            white  
                                            bold
                                            medium>
                                            Continue
                                        </NnatanText>
                                </NnatanButton>
                                </View>
                            </Block>
                    </ScrollView>
                </View>
            </View>
        </Block>
    )
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
     circleCheckWrap: {
        width: '100%',
        paddingBottom: '30%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
     },
     circle: {
        marginTop: '35%',
        width: 234,
        height: 234,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 117,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
     },
     buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

Emailconfirm.navigationOptions = {
    header: null
};

Emailconfirm.propTypes = {
    navigation: PropTypes.object
};

export default Emailconfirm;