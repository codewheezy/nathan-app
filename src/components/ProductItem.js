import React, { useState } from 'react';
import styled from 'styled-components';
import { verticalScale, moderateScale } from 'react-native-size-matters';

// constant 
import { Icon } from 'native-base';

// components
import NnatanText from './NnatanText';

const FeatureContent = styled.View`
   flex-direction: column;
   width: ${verticalScale(125)};
`
const FeatureImage = styled.Image`
   width: 100%;
   height: ${verticalScale(125)};
`
const FeatureBottom = styled.View`
  padding-top: 1%;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`
const HeartIcon = styled(Icon)`
  font-size: ${moderateScale(15)};
  color: red;
`
const BlackHeartIcon = styled(Icon)`
  font-size: ${moderateScale(15)};
  color: black;
`
const IconWrap = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`
const PriceAndIcon = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const ProductItem = ({ productImg, productTitle, productAmount, favourite }) => {

    return(
        <FeatureContent>
            <FeatureImage 
                source={productImg} />
                <FeatureBottom>
                    <NnatanText base bold>{productTitle}</NnatanText>
                    <PriceAndIcon>
                        <NnatanText accent light200 small>{productAmount}</NnatanText>
                        <IconWrap>
                            {favourite ?
                            (<HeartIcon
                                    type={'AntDesign'}
                                    name={'heart'}
                            />)
                            :(<BlackHeartIcon 
                                type={'AntDesign'}
                                name={'hearto'}
                              />)
                            }
                        </IconWrap>
                    </PriceAndIcon>
                </FeatureBottom>
        </FeatureContent>
    )
}

export default ProductItem;