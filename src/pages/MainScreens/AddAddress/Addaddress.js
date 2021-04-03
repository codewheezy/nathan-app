import React, {} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyleSheet } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

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
const AddCardForm = styled.View`
    padding-top: 12%;
    flex-direction: column;
`
const ButtonWrapper = styled.View`
    flex-direction: row;
    padding-top: 25%;
    padding-bottom: 11px;
`

const AddAddress = ({ navigation }) => {
    return(
        <Wrap>
        <Header onPress={() => navigation.toggleDrawer()} />
        <HeaderTitle back navigation={navigation} title={'Add Address'} />
            <Scroll
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}>
                    <ContentWrap>
                        <Block column>
                            <AddCardForm>
                                <Block 
                                flex={false}
                                row 
                                style={styles.inputWrap}
                                margin={[0,0,20,0]}>
                                    <NnatanInput 
                                     placeholder="Name"
                                     placeholderTextColor={'#000000'}
                                    />
                                </Block>
                                <Block 
                                flex={false}
                                row 
                                style={styles.inputWrap}
                                margin={[0,0,20,0]}>
                                    <NnatanInput 
                                     placeholder="Phone number"
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
                                     placeholder="City"
                                     placeholderTextColor={'#000000'}
                                    />
                                </Block>
                                <Block 
                                flex={false}
                                row 
                                style={styles.inputWrap}
                                margin={[0,0,20,0]}>
                                    <NnatanInput 
                                     placeholder="Address"
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

AddAddress.navigationOptions = {
    header: null
};

AddAddress.propTypes = {
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

export default AddAddress;
