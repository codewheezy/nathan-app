import React from 'react';
import styled from 'styled-components';
import { moderateScale } from 'react-native-size-matters';

// constants
import { theme } from '../constants';
import { Icon } from 'native-base';

const { COLORS } = theme;

// components
import NnatanText from './NnatanText';

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

const HeaderTitle = ({ title, navigation, back }) => {
    return(
        <TitleWrap>
            { back ?
            (<BackButton onPress={() => navigation.goBack()}>
                <BackIcon name="ios-arrow-back" />
            </BackButton>) : (<EmptySpace />)
            }
            <NnatanText 
                black 
                xxxlarge 
                light200>
                {title}
            </NnatanText>
            <EmptySpace />
        </TitleWrap>
    )
}

export default HeaderTitle;