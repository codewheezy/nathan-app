import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { StyleSheet, ScrollView } from 'react-native'


// components 
import Header from '../../../components/Header';
import HeaderTitle from '../../../components/HeaderTitle';
import NnatanText from '../../../components/NnatanText';
import NnatanButton from '../../../components/NnatanButton';

// constants 
import { theme } from '../../../constants';
import { Icon } from 'native-base';
const { COLORS } = theme;

const Wrap = styled.View`
    flex: 1;
`
const HeaderWrap = styled.View`
    padding-left: 16px;
    padding-right: 16px;
`
const Content = styled.View`
    margin-top: 11%;
`
const ProfileWrap = styled.View`
    align-items: center;
`
const ProfileBackgroundWrap = styled.TouchableOpacity`
    width: 185px;
    height: 185px;
    border-radius: 92.5px;
`
const ProfileImage = styled.Image`
    width: 185px;
    height: 185px;
    border-radius: 92.5px;
`
const EditWrap = styled.View`
    padding-top: 12%;
`
const BorderBox = styled.TouchableOpacity`
  height: 67px;
  border-color: rgba(101,101,101,0.5);
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
  margin-top: ${props => props.StartTop ? '0px': '6px'};
`
const ButtonWrapper = styled.View`
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 25%;
    padding-bottom: 11px;
`


const Account = ({ navigation }) => {
    const [ image, setImage ] = useState(null)

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
    }

    useEffect(() => {
        getPermissionAsync();
        console.log('hi');
    })
      
    const _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
    });
    
        console.log(result);
    
        if (!result.cancelled) {
            setImage(result.uri);
        }
      };

        return (
            <Wrap>
                <HeaderWrap>
                    <Header onPress={() => navigation.toggleDrawer()} />
                </HeaderWrap>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <Content>
                        <ProfileWrap>
                            <ProfileBackgroundWrap onPress={() => _pickImage()}>
                                {image == null ?
                                    (
                                        <ProfileImage source={require('../../../../assets/images/profile.jpg')} />
                                    ):
                                    (<ProfileImage source={{ uri: image }} />)}
                            </ProfileBackgroundWrap>
                            <NnatanText black  bold large margin={[37,0,0,0]}>Omoshayo Johnson</NnatanText>
                            <NnatanText accent light200 large margin={[2,0,0,0]}>Edit Profile</NnatanText>
                        </ProfileWrap>
                        <EditWrap>
                            <BorderBox StartTop>
                                <NnatanText black  light200 large>omoshayojohnson32@gmail.com</NnatanText>
                                <NnatanText accent light200 large margin={[4,0,0,0]}>Update E-mail</NnatanText>
                            </BorderBox>
                            <BorderBox>
                                <NnatanText black  light200 large>+234 567 897 8888</NnatanText>
                                <NnatanText accent light200 large margin={[4,0,0,0]}>Update Number</NnatanText>
                            </BorderBox>
                            <BorderBox>
                                <NnatanText black  light200 large>xxxxxxxxx</NnatanText>
                                <NnatanText accent light200 large margin={[4,0,0,0]}>Change Password</NnatanText>
                            </BorderBox>
                        </EditWrap>
                        <ButtonWrapper>
                            <NnatanButton 
                                primary 
                                style={styles.proceedButton} 
                                // onPress={() => navigation.navigate('CheckOut')}
                                >
                                <NnatanText white smallish bold>Save</NnatanText>
                            </NnatanButton>
                        </ButtonWrapper>
                    </Content>
                </ScrollView>
            </Wrap>
        )
}

Account.navigationOptions = {
    header: null
};

Account.propTypes = {
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

export default Account;