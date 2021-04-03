import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, View, ScrollView } from 'react-native';

// components
import Block from './Block';
import NnatanText from './NnatanText';

// constants
import { theme } from '../constants';
import { Icon } from 'native-base';
const { SIZES, COLORS } = theme;

const Wrap = styled.View`
  flex: 1;
`
const Content = styled.View`
  flex: 1;
  margin-top: 40%;
  margin-bottom: 45px;
`
const ProfileWrap = styled.View`
  flex-direction: column;
  align-items: center;
`
const ProfileImage = styled.Image`
  height: 81px;
  width: 81px;
  border-radius: 40.5;
`
const StarIcon = styled(Icon)`
  font-size: 20px;
  color: ${COLORS.accent};
`
const OrderWrap = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`
const DrawerLinks = styled.View`
  margin-top: 14%;
  padding-right: 16px;
`
const BorderBox = styled.TouchableOpacity`
  height: 67px;
  border-color: rgba(101,101,101,0.5);
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  padding-left: 20px;
  margin-top: ${props => props.StartTop ? '0px': '6px'};
`
const EditProfileIcon = styled(Icon)`
  font-size: 32px;
  margin-left: -5px;
  color: ${COLORS.black};
`
const CircleCheckIcon = styled(Icon)`
  font-size: 24px;
  color: ${COLORS.black};
`
const SettingsIcon = styled(Icon)`
  font-size: 28px;
  color: ${COLORS.black};
`
const AboutIcon = styled(Icon)`
  font-size: 24px;
  color: ${COLORS.black};
`

const ProfileDrawer = ({ navigation }) => {
  return (
    <Wrap>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Content>
          <ProfileWrap>
            <ProfileImage source={require('../../assets/images/profile.jpg')} />
            <NnatanText black bold large margin={[10,0,0,0]}>Omoshayo Johnson</NnatanText>
            <OrderWrap>
              <StarIcon type='FontAwesome' name='star' />
              <NnatanText black light200 large margin={[0,0,0,5]}>61 Orders</NnatanText>
            </OrderWrap>
          </ProfileWrap>
          <DrawerLinks>
            <BorderBox StartTop onPress={() => navigation.navigate('Account')}>
                <EditProfileIcon type='MaterialCommunityIcons' name='account-edit' />
                <NnatanText black light200 large margin={[0,0,0,10]}>Edit Profile</NnatanText>
            </BorderBox>
            <BorderBox>
                <CircleCheckIcon type='Feather' name='check-circle' />
                <NnatanText black light200 large margin={[0,0,0,15]}>Orders</NnatanText>
            </BorderBox>
            {/* <BorderBox>
                <SettingsIcon type='AntDesign' name='setting' />
                <NnatanText black light200 large margin={[0,0,0,10]}>Settings</NnatanText>
            </BorderBox> */}
            <BorderBox onPress={() => navigation.navigate('About')}>
                <AboutIcon type='AntDesign' name='exclamationcircleo' />
                <NnatanText black light200 large margin={[0,0,0,15]}>About Us</NnatanText>
            </BorderBox>
            <BorderBox>
                <AboutIcon type='Feather' name='log-out' />
                <NnatanText black light200 large margin={[0,0,0,15]}>Logout</NnatanText>
            </BorderBox>
          </DrawerLinks>
        </Content>
      </ScrollView>
    </Wrap>
  ); 
};

export default ProfileDrawer;
