import React from 'react';
import styled from 'styled-components';
import { verticalScale, moderateScale } from 'react-native-size-matters'

// constants 
import { theme } from '../constants';
import { Icon } from 'native-base';
import Constants from 'expo-constants';

const { COLORS } = theme;
const statusBar = Constants.statusBarHeight

// components

const Wrap = styled.View`
    background-color: #fff;
    width: 100%;
`
const StatusWrap = styled.View`
    height: ${statusBar};
    width: 100%;
`
const Head = styled.View`
    width: 100%;
    padding-top: 0.5%;
    flex-direction: row;
    justify-content: space-between;
`
const LeftBtn = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`
const MenuIcon = styled(Icon)`
    color: ${COLORS.primary};
    font-size: ${moderateScale(24)};
`
const RightBtn = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`
const BellIcon = styled(Icon)`
    color: ${COLORS.primary};
    font-size: ${moderateScale(24)};
`
const NotificationBubble = styled.View`
    height: ${verticalScale(10)};
    width: ${verticalScale(10)};
    border-radius: 5;
    background-color: #FE8100;
    position: absolute;
    top: -1;
    left: 12;
    justify-content: center;
    align-items: center;
`


const Header = ({ modal, onPress }) => {
    return(
        <Wrap>
            { modal ? null : (<StatusWrap/>) }
           <Head>
              <LeftBtn onPress={onPress}>
                <MenuIcon
                  type={'Entypo'} 
                  name={'menu'}
                />
              </LeftBtn>
              {/* <RightBtn>
                <BellIcon 
                  type={'FontAwesome'}
                  name={'bell-o'}
                />
                <NotificationBubble></NotificationBubble>
              </RightBtn> */}
           </Head>
        </Wrap>
    )
}


export default Header;
