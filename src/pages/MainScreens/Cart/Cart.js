import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { ScrollView, StyleSheet } from 'react-native';

// constants
import { theme } from '../../../constants';
import { Icon } from 'native-base';
const { COLORS } = theme;

// components 
import Header from '../../../components/Header';
import HeaderTitle from '../../../components/HeaderTitle';
import CartItem from '../../../components/CartItem';
import NnatanText from '../../../components/NnatanText';
import NnatanButton from '../../../components/NnatanButton';

const Wrap = styled.View`
    flex: 1;
`
const HeaderWrap = styled.View`
    padding-left: 16px;
    padding-right: 16px;
`
const TitleWrap = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 13px;
    align-items: center;
`
const BackButton = styled.TouchableOpacity``
const BackIcon = styled(Icon)`
    padding-left: 1%;
    font-size: ${moderateScale(24)};
    color: ${COLORS.darkGray};
`
const EmptySpace = styled.View``
const ContentWrap = styled.View`
    padding-top: 9%;
    border-color: #EAEAEA;
    border-bottom-width: 1px;
`
const FooterWrapper = styled.View`
    padding-top: 14px;
`
const TotalWrapper = styled.View`
    height: 43px;
    width: 100%;
    background-color: #E4F3EB;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    justify-content: space-between;
`
const ButtonWrapper = styled.View`
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 25%;
    padding-bottom: 11px;
`

const Cart = ({ navigation }) => {
    return(
        <Wrap>
            <HeaderWrap>
                <Header onPress={() => navigation.toggleDrawer()} />
                <TitleWrap>
                    <BackButton onPress={() => navigation.navigate('Product')}>
                        <BackIcon name="ios-arrow-back" />
                    </BackButton>
                    <NnatanText 
                        black 
                        xxxlarge 
                        light200>
                        Cart
                    </NnatanText>
                    <EmptySpace />
                </TitleWrap>
            </HeaderWrap>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <ContentWrap>
                    <CartItem 
                        source={require('../../../../assets/images/slide1.jpg')} 
                        productTitle={'Italian Horse'}
                        productPrice={'N1290'}
                        numberOfCount={'2'}
                        Color={'#783A1F'}
                        />
                    <CartItem 
                        source={require('../../../../assets/images/slide2.jpg')} 
                        productTitle={'Italian Horse'}
                        productPrice={'N120,090'}
                        numberOfCount={'1'}
                        Color={'#C4C4C4'}
                        />
                    <CartItem 
                        source={require('../../../../assets/images/slide3.jpg')} 
                        productTitle={'Italian Horse'}
                        productPrice={'N19,999'}
                        numberOfCount={'4'}
                        Color={'#fff'}
                        />
                </ContentWrap>
                <FooterWrapper>
                    <TotalWrapper>
                        <NnatanText black bold medium>Total Payable Amount</NnatanText>
                        <NnatanText black bold medium>N222,000</NnatanText>
                    </TotalWrapper>
                    <ButtonWrapper>
                        <NnatanButton 
                            primary 
                            style={styles.proceedButton} 
                            onPress={() => navigation.navigate('CheckOut')}>
                            <NnatanText white smallish bold>Proceed to Payment</NnatanText>
                        </NnatanButton>
                        <NnatanButton outlined style={styles.outlineButton}>
                            <NnatanText primary smallish bold>Cancel</NnatanText>
                        </NnatanButton>
                    </ButtonWrapper>
                </FooterWrapper>
            </ScrollView>
        </Wrap>
    )
}

Cart.navigationOptions = {
    header: null
};

Cart.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    proceedButton: {
      flex: 1
    },
    outlineButton: {
      width: 120,
    }
});

export default Cart;