import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ScrollView, StyleSheet } from 'react-native';

// constants
import { theme } from '../../../constants';
import { Feather } from '@expo/vector-icons';
const { COLORS, SIZES } = theme;

// components 
import Header from '../../../components/Header';
import HeaderTitle from '../../../components/HeaderTitle';
import Block from '../../../components/Block';
import NnatanText from  '../../../components/NnatanText';
import NnatanButton from '../../../components/NnatanButton';

const Wrap = styled.View`
    flex: 1;
    padding-left: 16px;
    padding-right: 16px;
`
const Content = styled.View`
    padding-top: 9%;
`
const CircleCheckWrap = styled.View`
    width: 100%;
    padding-bottom: 10%;
    flex: 1;
    align-items: center;
    justify-content: center;
`
const Circle = styled.View`
    margin-top: 35%;
    width: 234px;
    height: 234px;
    border-color: ${COLORS.primary};
    border-width: 1px;
    border-radius: 117px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const TextDetailWrap = styled.View`
    padding-left: 2%;
    flex: 1;
`

const ConfirmOrder = ({ navigation }) => {
    return(
        <Wrap>
            <Header onPress={() => navigation.toggleDrawer()} />
            <HeaderTitle title={'Order Confirmed'} />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                    <Block column>
                        <Content>
                            <CircleCheckWrap>
                                <Circle>
                                    <Feather name="check" size={200}  color={COLORS.primary} />
                                </Circle>
                            </CircleCheckWrap>
                            <TextDetailWrap>
                                <NnatanText
                                secondary
                                bold
                                small>Order Completed</NnatanText>
                                <NnatanText 
                                    secondary
                                    light200
                                    small
                                    margin={[1,0,0,0]}>
                                    Thank you for order, We received your order and will begin processing soon. Cheers
                                </NnatanText>
                            </TextDetailWrap>
                            <NnatanButton 
                                primary 
                                margin={[100,0,0,0]}
                                style={styles.buttons}
                                // onPress={() => navigation.navigate('Optconfirm')}
                                    >
                                    <NnatanText
                                        white  
                                        bold
                                        medium>
                                        Back to Store 
                                    </NnatanText>
                                </NnatanButton>
                        </Content>
                    </Block>
            </ScrollView>
        </Wrap>
    )
}


ConfirmOrder.navigationOptions = {
    header: null
};

ConfirmOrder.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ConfirmOrder;