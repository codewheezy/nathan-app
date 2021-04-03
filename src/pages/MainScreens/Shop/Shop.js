import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { verticalScale, moderateScale } from 'react-native-size-matters'
import styled from 'styled-components';

// constants
import { Icon } from 'native-base';
import { theme, images } from '../../../constants';
const { COLORS, SIZES } = theme;
const { slideImages } = images;

// components
import Header from '../../../components/Header';
import SearchBox from '../../../components/SearchBox';
import NnatanText from '../../../components/NnatanText';
import Block from '../../../components/Block';
import ProductItem from '../../../components/ProductItem';
import HeaderTitle from '../../../components/HeaderTitle';

const Wrap = styled.View`
    flex: 1;
    padding-left: 16px;
    padding-right: 16px;
`
const HomeBackground = styled.ImageBackground`
  width: 100%;
  height: ${verticalScale(166)};
  margin-top: 6.3%;
`
const ShopWrap = styled.View`
    flex: 1;
`
const HomeTitleWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${verticalScale(48)};
  width: 100%;
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
const FeatureWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const slides = [
    {
      img: slideImages.stepOne
    },
    {
      img: slideImages.stepTwo
    },
    {
      img: slideImages.stepThree
    },
    {
      img: slideImages.stepFour
    }
  ];


const renderDots = scrollX => {
    const dotPosition = Animated.divide(scrollX, SIZES.screenWidth);
    return (
      <Block row center middle margin={[SIZES.medium, 0]}>
        {slides.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });
  
          // const color = opacity.__getValue() === 1 ? COLORS.primary : '#C8D5D8';
          return (
            <Block
              primary
              animated
              flex={false}
              key={`dot-${index}`}
              radius={SIZES.small}
              margin={[0, SIZES.small / 2]}
              style={[styles.dot, { opacity }]}
            />
          );
        })}
      </Block>
    );
  };


const Shop = ({ navigation }) => {
    const { title } = navigation.state.params
    const [slideIndex, setSlideIndex] = useState(0);
    const [searchItem, setSearch] = useState('')
    const scrollX = new Animated.Value(0);

    useEffect(() => {
        scrollX.addListener(({ value }) => {
          setSlideIndex(Math.floor(value / SIZES.screenWidth));
        });
      }, [slideIndex]);
    
    return (
            <Wrap>
              <Header onPress={() => navigation.toggleDrawer()} />
              <HeaderTitle back navigation={navigation} title={title} />
              <SearchBox 
                placeholder="What are you looking for ?"
                onChangeText={searchItem => setSearch({searchItem})}
                value={searchItem}
                blurOnSubmit={false} />
              <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                    <ShopWrap>
                        <HomeBackground 
                            source={require('../../../../assets/images/banner2.jpg')} 
                        />
                        <HomeTitleWrap>
                            <NnatanText large black bold>Feature Products</NnatanText>
                            <SeeAllWrap>
                                <NnatanText small accent light200>See all deals</NnatanText>
                                    <SeeAllIcon 
                                        name={'chevron-small-right'}
                                        type={'Entypo'}
                                    />
                            </SeeAllWrap>
                        </HomeTitleWrap>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            scrollEnabled
                            decelerationRate={0}
                            scrollEventThrottle={0}
                            snapToAlignment="center"
                            showsHorizontalScrollIndicator={false}  
                            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
                        >
                            <FeatureWrap>
                                <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                                  <ProductItem 
                                    productImg={slideImages.stepOne} 
                                    productTitle={'Air Streak 2.0 Nike'}
                                    productAmount={'N5000'}
                                    favourite
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                                  <ProductItem 
                                    productImg={slideImages.stepTwo}
                                    productTitle={'Air Streak 2.0 Nike'}
                                    productAmount={'N3500'}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                                  <ProductItem 
                                    productImg={slideImages.stepThree}
                                    productTitle={'Air Streak 2.0 Nike'}
                                    productAmount={'N5000'}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                                  <ProductItem 
                                    productImg={slideImages.stepFour}
                                    productTitle={'Air Streak 2.0 Nike'}
                                    productAmount={'N12,000'}
                                  />
                                </TouchableOpacity>
                            </FeatureWrap>
                        </ScrollView>
                        {renderDots(scrollX)}
                        <HomeTitleWrap>
                            <NnatanText large black bold>Popular Deals</NnatanText>
                            <SeeAllWrap>
                                <NnatanText small accent light200>See more</NnatanText>
                                    <SeeAllIcon 
                                        name={'chevron-small-right'}
                                        type={'Entypo'}
                                    />
                            </SeeAllWrap>
                        </HomeTitleWrap>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            scrollEnabled
                            decelerationRate={0}
                            scrollEventThrottle={0}
                            snapToAlignment="center"
                            showsHorizontalScrollIndicator={false}  
                            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
                        >
                            <FeatureWrap>
                              <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                                <ProductItem 
                                  productImg={slideImages.stepOne} 
                                  productTitle={'Air Streak 2.0 Nike'}
                                  productAmount={'N5000'}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                                <ProductItem 
                                  productImg={slideImages.stepTwo}
                                  productTitle={'Air Streak 2.0 Nike'}
                                  productAmount={'N3500'}
                                  favourite
                                />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                                <ProductItem 
                                  productImg={slideImages.stepThree}
                                  productTitle={'Air Streak 2.0 Nike'}
                                  productAmount={'N5000'}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                                <ProductItem 
                                  productImg={slideImages.stepFour}
                                  productTitle={'Air Streak 2.0 Nike'}
                                  productAmount={'N12,000'}
                                />
                              </TouchableOpacity>
                            </FeatureWrap>
                        </ScrollView>
                        {renderDots(scrollX)}
                    </ShopWrap>
              </ScrollView>
            </Wrap>
        )
}

Shop.navigationOptions = {
    header: null
};

Shop.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    dot: { width: 9, height: 9 }
});

export default Shop;


