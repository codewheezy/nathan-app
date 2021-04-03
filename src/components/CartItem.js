import React, { useState } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components';

// contants 
import { theme } from '../constants';
import { Icon } from 'native-base';
const { COLORS } = theme;

// components 
import NnatanText from '../components/NnatanText';


const BorderLine = styled.View`
    border-top-width: 1;
    border-color: #EAEAEA;
`
const RemoveWrap = styled.View`
    flex-direction: row;
    align-items: center;
    height: 114px;
    flex: 1;
`
const ImageWrapper = styled.View`
    padding-left: 16px;
`
const ProductImage = styled.Image`
    width: 84px;
    height: 84px;
`
const ProductDescription = styled.View`
    flex-direction: column;
    justifyContent: space-between;
    height: 84px;
`
const TitleWrap = styled.View`
    margin-left: 12px;
`
const RemoveButton = styled.TouchableOpacity`
    height: 114px;
    width: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.primary};
`
const RemoveIcon = styled(Icon)`
    font-size: ${moderateScale(20)};
    color: ${COLORS.white}
`
const FooterWrapper = styled.View`
    flex-direction: row;
    margin-left: 12px;
    width: 59%;
    justify-content: space-between;
`
const ColorWrap = styled.View`
    flex-direction: row;
`
const ColorBox = styled.View`
    background-color: ${props => props.Color}
    width: 18px;
    height: 18px;
    border-radius: 4;
`
const CountWrap = styled.View`
    flex-direction: row;
`
const CountNumber = styled.View`
    height: 18px;
    width: 18px;
    background-color: ${COLORS.primary};
    border-radius: 4;
    align-items: center;
    justify-content: center;
`


const CartItem = ({ source, productTitle, productPrice, numberOfCount, Color }) => {
    const RightActions = ({ onPress }) => {
        return(
           <RemoveButton onPress={onPress}>
               <RemoveIcon 
                    type={'AntDesign'}
                    name={'close'}
               />
           </RemoveButton>
        )
    }

   return(
    <BorderLine>
        <Swipeable 
            renderRightActions={() => <RightActions  />}>
            <RemoveWrap>
                <ImageWrapper>
                    <ProductImage source={source} />
                </ImageWrapper>
                <ProductDescription>
                    <TitleWrap>
                        <NnatanText medium black regular margin={[0,0,1,0]}>{productTitle}</NnatanText>
                        <NnatanText medium accent light200>{productPrice}</NnatanText>
                    </TitleWrap>
                    <FooterWrapper>
                        <ColorWrap>
                            <NnatanText medium black bold margin={[0,6,0,0]}>Colour:</NnatanText>
                            <ColorBox Color={Color}></ColorBox>
                        </ColorWrap>
                        <CountWrap>
                            <NnatanText medium black bold margin={[0,6,0,0]}>Count:</NnatanText>
                            <CountNumber>
                                <NnatanText medium white regular>{numberOfCount}</NnatanText>
                            </CountNumber>
                        </CountWrap>
                    </FooterWrapper>
                </ProductDescription>
            </RemoveWrap>
        </Swipeable>
    </BorderLine>
   ) 
}

export default CartItem;
