import React from 'react';
import PropTypes from 'prop-types';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components';

// constants 
import { theme } from '../../../constants';
import { Icon } from 'native-base';
const { COLORS, SIZES } = theme;

// components
import Header from '../../../components/Header';
import HeaderTitle from '../../../components/HeaderTitle';
import Block from '../../../components/Block';
import NnatanText from '../../../components/NnatanText';
import NnatanInput from '../../../components/NnatanInput';
import NnatanButton from '../../../components/NnatanButton';


const Wrap = styled.View`
    flex: 1;
    padding-left: 16px;
    padding-right: 16px;
`
const Scroll = styled(KeyboardAwareScrollView)``
const ContentWrap = styled.View`
    padding-top: 15px;
`
const DebitCard = styled.View`
    height: 96px;
    width: 238px;
    background-color: #FE8100;
    border-radius: 9px;
`
const SmallCircle = styled.View`
    height: 43px;
    width: 43px;
    border-radius: 21.5px;
    background-color: #FFFFFF;
    opacity: 0.3;
    position: absolute;
    top: 16;
    left: 24;
`
const LargeCircle = styled.View`
    height: 79px;
    width: 79px;
    background-color: #FFFFFF;
    opacity: 0.3;
    border-radius: 39.5px;
    position: absolute;
    top: 5;
    left: 49;
`
const CardNumberWrap = styled.View`
    flex-direction: row;
    position: absolute;
    left: 20;
    bottom: 45;
`
const CardNumber = styled.Text`
    font-size: 11px;
    font-family: effra_regular;
    color: ${COLORS.white};
    margin-right: 2px;
`
const ExpireDate = styled.View`
    height: 27px;
    width: 100px;
    position: absolute;
    left: 20;
    justify-content: space-between;
    bottom: 10;
`
const ExpireText = styled.Text`
    color: ${COLORS.white};
    font-size: 11px;
    font-family: effra_regular;
`
const DateText = styled.Text`
    color: ${COLORS.white};
    font-size: 9px;
    font-family: effra_regular;
`
const CvcNumber = styled.View`
    height: 27px;
    position: absolute;
    right: 55;
    bottom: 10;
`
const DocWrap = styled.View`
    flex-direction: row;
    margin-left: 2px;
    margin-top: 8px;
`
const DotText = styled.View`
    width: 3px;
    height: 3px;
    margin-right: 5.5px;
    background-color: ${COLORS.white};
`
const AddCardForm = styled.View`
    padding-top: 12%;
    flex-direction: column;
`
const ButtonWrapper = styled.View`
    flex-direction: row;
    padding-top: 25%;
    padding-bottom: 11px;
`


const AddCard = ({ navigation }) => {
    return(
      <Wrap>
        <Header onPress={() => navigation.toggleDrawer()} />
        <HeaderTitle back navigation={navigation} title={'Add Card'} />
            <Scroll
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}>
                    <ContentWrap>
                        <Block column>
                            <DebitCard>
                                <SmallCircle />
                                <LargeCircle />
                                <CardNumberWrap>
                                    <CardNumber White>XXXX</CardNumber>
                                    <CardNumber White>XXXX</CardNumber>
                                    <CardNumber White>XXXX</CardNumber>
                                    <CardNumber White>2356</CardNumber>
                                </CardNumberWrap>
                                <ExpireDate>
                                    <ExpireText>EXPIRE DATE</ExpireText>
                                    <DateText>01/21</DateText>
                                </ExpireDate>
                                <CvcNumber>
                                    <ExpireText>CVC</ExpireText>
                                    <DocWrap>
                                        <DotText />
                                        <DotText />
                                        <DotText />
                                    </DocWrap>
                                </CvcNumber>
                            </DebitCard>
                            <AddCardForm>
                                <Block 
                                flex={false}
                                row 
                                style={styles.inputWrap}
                                margin={[0,0,20,0]}>
                                    <NnatanInput 
                                     placeholder="Card Number"
                                     placeholderTextColor={'#000000'}
                                     keyboardType="number-pad"
                                    />
                                </Block>
                                <Block 
                                flex={false}
                                row 
                                style={styles.inputWrap}
                                margin={[0,0,20,0]}>
                                    <NnatanInput 
                                     placeholder="Card holder name"
                                     placeholderTextColor={'#000000'}
                                    />
                                </Block>
                                <Block 
                                flex={false}
                                row 
                                style={styles.inputWrap}
                                margin={[0,0,20,0]}>
                                    <NnatanInput 
                                     placeholder="01/23"
                                     placeholderTextColor={'#000000'}
                                    />
                                </Block>
                                <Block 
                                flex={false}
                                row 
                                style={styles.inputWrap}
                                margin={[0,0,20,0]}>
                                    <NnatanInput 
                                     placeholder="..."
                                     secureTextEntry={true}
                                     placeholderTextColor={'#000000'}
                                    />
                                </Block>
                            </AddCardForm>
                        </Block>
                <ButtonWrapper>
                    <NnatanButton 
                        primary 
                        style={styles.proceedButton}>
                        <NnatanText white smallish bold>Save</NnatanText>
                    </NnatanButton>
                    <NnatanButton outlined style={styles.outlineButton}>
                        <NnatanText primary smallish bold>Cancel</NnatanText>
                    </NnatanButton>
                </ButtonWrapper>
            </ContentWrap>
        </Scroll>
      </Wrap>
    )
}

AddCard.navigationOptions = {
    header: null
};

AddCard.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    inputWrap: {
        width: '100%',
        borderRadius: 0,
        backgroundColor: 'transparent',
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(101,101,101,0.5)',
        paddingLeft: 15,
        paddingLeft: 15

    },
    proceedButton: {
        flex: 1
      },
      outlineButton: {
        width: 120,
      }
})

export default AddCard;

