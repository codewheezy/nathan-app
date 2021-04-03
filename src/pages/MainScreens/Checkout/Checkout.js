import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { verticalScale, moderateScale, s } from 'react-native-size-matters';
import { ScrollView, StyleSheet } from 'react-native';

// constants
import { theme } from '../../../constants';
import { Icon } from 'native-base';
const { COLORS } = theme;


// components 
import Header from '../../../components/Header';
import HeaderTitle from '../../../components/HeaderTitle';
import NnatanText from '../../../components/NnatanText';
import NnatanButton from '../../../components/NnatanButton';

const Wrap = styled.View`
    flex: 1;
`
const HeaderWrap = styled.View`
    padding-left: 16px;
    padding-right: 16px;
`
const ContentWrap = styled.View`
    padding-top: 9%;
`
const AddressTitleWrap = styled.View`
    flex-direction: row;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: space-between;
`
const PaymentTitleWrap = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const SeeAllWrap = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: ${verticalScale(22)}; 
`
const SeeAllIcon = styled(Icon)`
    color: ${COLORS.accent};
    font-size: ${moderateScale(22)};
    margin-right: -5px;
`
const AddressContentWrap = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: row;  
`
const RadioButtonWrap = styled.TouchableOpacity`
    padding-top: 3px;
    margin-right: 12px;
`
const RadioButton = styled(Icon)`
    color: black;
    font-size: ${moderateScale(12)};
`
const TextWrap = styled.View`
    width: 91%;
`
const DeliveryTimeWrap = styled.View`
    border-color: rgba(112, 112, 112, 0.5);
    border-top-width: 1px;
    margin-top: 13px;
    padding-top: 22px;
    padding-left: 16px;
    padding-right: 16px;
`
const DeliveryTimeContent = styled.View`
    flex-direction: row;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`
const DeliveryNowWrap = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
    flex: 1;
`
const CardScrollView = styled.ScrollView``
const DebitCardWrap = styled.View`
    flex-direction: row;
    padding-top: 25px;
    margin-bottom: 15px;
`
const DebitCard = styled.View`
    height: 96px;
    width: 238px;
    background-color: ${props => props.grapColor ? '#DEDEDE' : '#58B681'};
    border-radius: 9px;
    margin-right: ${props => props.rightMargin ? '13px' : '0px'};
`
const SmallCircle = styled.View`
    height: 43px;
    width: 43px;
    border-radius: 21.5;
    background-color: #FFFFFF;
    opacity: 0.3;
    position: absolute;
    top: 16;
    left: 20;
`
const LargeCircle = styled.View`
    height: 79px;
    width: 79px;
    background-color: #FFFFFF;
    opacity: 0.3;
    border-radius: 39.5;
    position: absolute;
    top: 5;
    left: 43;
`
const CardNumberWrap = styled.View`
    flex-direction: row;
    position: absolute;
    left: 20;
    bottom: 20;
`
const CardNumber = styled.Text`
    font-size: 11px;
    font-family: effra_regular;
    color: ${props => props.White ? COLORS.white : COLORS.secondary};
    margin-right: 2px;
`
const CardImage = styled.Image`
    width: 41px;
    height: 41px;
    position: absolute;
    right: 20;
    bottom: 10;
`
const ButtonWrapper = styled.View`
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 5%;
    padding-bottom: 11px;
`

const CheckOut = ({ navigation }) => {
    const [delivery, setDelivery] = useState(1);
    const [paymentType, setPaymentType] = useState(1)
    
    return(
       <Wrap>
           <HeaderWrap>
               <Header  onPress={() => navigation.toggleDrawer()} />
               <HeaderTitle back navigation={navigation}  title={'Check Out'} />
           </HeaderWrap>
           <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <ContentWrap>
                    <AddressTitleWrap>
                        <NnatanText black medium300 medium>Delivery Address</NnatanText>
                        <SeeAllWrap>
                            <NnatanText small accent light200 onPress={() => navigation.navigate('AddAddress')}>Add new address</NnatanText>
                            <SeeAllIcon 
                                name={'chevron-small-right'}
                                type={'Entypo'}
                            />
                        </SeeAllWrap>
                    </AddressTitleWrap>
                    <AddressContentWrap>
                        <RadioButtonWrap>
                            <RadioButton 
                                type={'MaterialCommunityIcons'} 
                                name={'adjust'}
                            />
                        </RadioButtonWrap>
                        <TextWrap>
                            <NnatanText black small light200>No 14, Oluwole Olanira Street, Off Allen Avenue, Ike, Lagos State</NnatanText>
                        </TextWrap>
                    </AddressContentWrap>
                    <AddressContentWrap>
                        <RadioButtonWrap>
                            <RadioButton 
                                type={'MaterialCommunityIcons'} 
                                name={'circle-outline'}
                            />
                        </RadioButtonWrap>
                        <TextWrap>
                            <NnatanText black small light200>125, Anthony Road, Off Road garage, along Egbeda Ikotun, Oniru-Agbo, Ado, Ado Ekiti</NnatanText>
                        </TextWrap>
                    </AddressContentWrap>
                    <DeliveryTimeWrap>
                        <NnatanText black medium medium300>Delivery Time</NnatanText>
                        <DeliveryTimeContent>
                            <DeliveryNowWrap>
                                <RadioButtonWrap onPress={() => setDelivery(1)}>
                                    <RadioButton 
                                        type={'MaterialCommunityIcons'} 
                                        name={delivery === 1 ? 'adjust' : 'circle-outline'}
                                    />
                                </RadioButtonWrap>
                                <NnatanText black small light200>Delivery Now</NnatanText>
                            </DeliveryNowWrap>
                            <DeliveryNowWrap>
                                <RadioButtonWrap onPress={() => setDelivery(2)}>
                                    <RadioButton 
                                        type={'MaterialCommunityIcons'} 
                                        name={delivery === 2 ? 'adjust' : 'circle-outline'}
                                    />
                                </RadioButtonWrap>
                                <NnatanText black small light200>Delivery Later</NnatanText>
                            </DeliveryNowWrap>
                        </DeliveryTimeContent>                
                    </DeliveryTimeWrap>
                    <DeliveryTimeWrap>
                    <PaymentTitleWrap>
                        <NnatanText black medium300 medium>Payment Type</NnatanText>
                        <SeeAllWrap onPress={() => navigation.navigate('AddCard')}>
                            <NnatanText small accent light200>Add new card</NnatanText>
                            <SeeAllIcon 
                                name={'chevron-small-right'}
                                type={'Entypo'}
                            />
                        </SeeAllWrap>
                    </PaymentTitleWrap>
                        <DeliveryNowWrap>
                            <RadioButtonWrap onPress={() => setPaymentType(1)}>
                                <RadioButton 
                                    type={'MaterialCommunityIcons'} 
                                    name={paymentType === 1 ? 'adjust' : 'circle-outline'}
                                />
                            </RadioButtonWrap>
                            <NnatanText margin={[0,0,0,0]} black small light200>Debit Card</NnatanText>
                        </DeliveryNowWrap> 
                        <CardScrollView
                            horizontal
                            scrollEnabled
                            snapToAlignment="center"
                            showsHorizontalScrollIndicator={false}>
                            <DebitCardWrap>
                                <DebitCard rightMargin>
                                    <SmallCircle />
                                    <LargeCircle />
                                    <CardNumberWrap>
                                        <CardNumber White>XXXX</CardNumber>
                                        <CardNumber White>XXXX</CardNumber>
                                        <CardNumber White>XXXX</CardNumber>
                                        <CardNumber White>2356</CardNumber>
                                    </CardNumberWrap>
                                    <CardImage source={require('../../../../assets/images/master-card.png')} />
                                </DebitCard>

                                <DebitCard grapColor>
                                    <SmallCircle />
                                    <LargeCircle />
                                    <CardNumberWrap>
                                        <CardNumber>XXXX</CardNumber>
                                        <CardNumber>XXXX</CardNumber>
                                        <CardNumber>XXXX</CardNumber>
                                        <CardNumber>2356</CardNumber>
                                    </CardNumberWrap>
                                    <CardImage source={require('../../../../assets/images/master-card.png')} />
                                </DebitCard>
                            </DebitCardWrap>
                        </CardScrollView>
                        <DeliveryNowWrap>
                            <RadioButtonWrap onPress={() => setPaymentType(2)}>
                                <RadioButton 
                                    type={'MaterialCommunityIcons'} 
                                    name={paymentType === 2 ? 'adjust' : 'circle-outline'}
                                />
                            </RadioButtonWrap>
                            <NnatanText margin={[0,0,0,12]} black small light200>Cash on Delivery</NnatanText>
                        </DeliveryNowWrap>
                    </DeliveryTimeWrap>
                    <ButtonWrapper>
                        <NnatanButton 
                            primary 
                            style={styles.proceedButton} onPress={() => navigation.navigate('ConfirmOrder')}>
                            <NnatanText white smallish bold>Pay</NnatanText>
                        </NnatanButton>
                        <NnatanButton outlined style={styles.outlineButton}>
                            <NnatanText primary smallish bold>Cancel</NnatanText>
                        </NnatanButton>
                    </ButtonWrapper>
                </ContentWrap>
           </ScrollView>
       </Wrap> 
    )
}

CheckOut.navigationOptions = {
    header: null
};

CheckOut.propTypes = {
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

export default CheckOut;