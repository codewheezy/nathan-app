import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Rating } from 'react-native-ratings'
import { moderateScale, s } from 'react-native-size-matters';
import { ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

// constant
import { theme } from '../../../constants'
import { Icon } from 'native-base';
const { COLORS } = theme;

// components
import SearchBox from '../../../components/SearchBox';
import Header from '../../../components/Header';
import HeaderTitle from '../../../components/HeaderTitle'
import NnatanText from '../../../components/NnatanText';


const Wrap = styled.View`
    flex: 1;
    padding-left: 16px;
    padding-right: 16px;
`
const Container = styled.View`
    padding-bottom: 10px;
`
const HomeTitleWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const Wrapper = styled.View`
    padding-top: 25px;
`
const ShopImage = styled.Image`
    width: 100%;
    height: 117px;
    border-radius: 8px; 
`
const BottomWrapper = styled.View`
    flex-direction: row;
    padding-top: 14px;
    align-items: center;
`
const ShopIcon = styled.Image`
    width: 52px;
    height: 52px;
`
const ShopTitleAndRating = styled.View`
    justify-content: space-between;
    flex-direction: column;
    padding-left: 7px;
    height: 40px;
`
const LocationAndReviews = styled.View`
    justify-content: space-between;
    flex-direction: column;
    padding-left: 7px;
    height: 40px;
`
const LocationWrap = styled.View`
    flex-direction: row;
    align-items: center;
`
const LocationIcon = styled(Icon)`
    font-size: ${moderateScale(17)};
    color: ${COLORS.secondary};
`



const Home = ({ navigation }) => { 
    const [searchItem, setSearch] = useState('')

    return(
        <Wrap>
            <Header onPress={() => navigation.toggleDrawer()} />
            <HeaderTitle title={'Stores'} />
            <SearchBox 
                placeholder="What are you looking for ?" 
                onChangeText={searchItem => setSearch({searchItem})}
                value={searchItem} />
            <ScrollView 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                >
                <Container>
                <HomeTitleWrap>
                    <NnatanText bold large black margin={[25,0,0,0]}>Popular Stores</NnatanText>
                </HomeTitleWrap>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Shop', { title: 'Shoprite'})}>
                    <Wrapper>
                        <ShopImage source={require('../../../../assets/images/banner2.jpg')} />
                        <BottomWrapper>
                            <ShopIcon source={require('../../../../assets/images/logo2.png')} />
                            <ShopTitleAndRating>
                                <NnatanText bold black medium margin={[0,0,3,0]}>Shoprite</NnatanText>
                                <Rating
                                    type='custom'
                                    ratingCount={5}
                                    startingValue={4}
                                    imageSize={15}
                                    readonly={true}
                                    ratingColor={COLORS.accent}
                                />
                            </ShopTitleAndRating>
                            <LocationAndReviews>
                                <LocationWrap>
                                    <LocationIcon name={'location-pin'} type={'Entypo'} />
                                    <NnatanText xbase light200>Egbeda, Ikoyi</NnatanText>
                                </LocationWrap>
                                <NnatanText medium black light200>(234 reviews)</NnatanText>
                            </LocationAndReviews>
                        </BottomWrapper>
                    </Wrapper>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Shop', { title: 'Jumia'})}>
                <Wrapper>
                    <ShopImage source={require('../../../../assets/images/banner1.jpg')} />
                    <BottomWrapper>
                        <ShopIcon source={require('../../../../assets/images/logo3.png')} />
                        <ShopTitleAndRating>
                            <NnatanText bold black medium margin={[0,0,3,0]}>Jumia</NnatanText>
                            <Rating
                                type='custom'
                                ratingCount={5}
                                startingValue={4}
                                imageSize={15}
                                ratingColor={COLORS.accent}
                                readonly={true}
                            />
                        </ShopTitleAndRating>
                        <LocationAndReviews>
                            <LocationWrap>
                                <LocationIcon name={'location-pin'} type={'Entypo'} />
                                <NnatanText xbase light200>Ikotun, Agege</NnatanText>
                            </LocationWrap>
                            <NnatanText medium black light200>(191 reviews)</NnatanText>
                        </LocationAndReviews>
                    </BottomWrapper>
                </Wrapper>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Shop', { title: 'Konga'})}>
                <Wrapper>
                    <ShopImage source={require('../../../../assets/images/banner3.jpg')} />
                    <BottomWrapper>
                        <ShopIcon source={require('../../../../assets/images/logo1.jpg')} />
                        <ShopTitleAndRating>
                            <NnatanText bold black medium margin={[0,0,3,0]}>Konga</NnatanText>
                            <Rating
                                type='custom'
                                ratingCount={5}
                                startingValue={4}
                                imageSize={15}
                                readonly={true}
                                ratingColor={COLORS.accent}
                            />
                        </ShopTitleAndRating>
                        <LocationAndReviews>
                            <LocationWrap>
                                <LocationIcon name={'location-pin'} type={'Entypo'} />
                                <NnatanText xbase light200>Ikotun, Agege</NnatanText>
                            </LocationWrap>
                            <NnatanText medium black light200>(191 reviews)</NnatanText>
                        </LocationAndReviews>
                    </BottomWrapper>
                </Wrapper>
                </TouchableWithoutFeedback>
                </Container>
            </ScrollView>
        </Wrap>
    )
}

Home.navigationOptions = {
    header: null
};

Home.propTypes = {
    navigation: PropTypes.object
};

export default Home;
