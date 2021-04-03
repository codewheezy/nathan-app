import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollView, Animated, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

// constants 
import { theme, images } from '../../../constants'
import { Icon } from 'native-base';
const { COLORS, SIZES } = theme;
const { slideImages } = images;

// components 
import SearchBox from '../../../components/SearchBox';
import Header from '../../../components/Header';
import HeaderTitle from '../../../components/HeaderTitle';
import NnatanText from '../../../components/NnatanText';
import Block from '../../../components/Block';


const Wrap = styled.View`
    flex: 1;
    padding-left: 16px;
    padding-right: 16px;
`
const SearchItemContent = styled.View`
    height: ${verticalScale(356)};
    width: 100%;
    flex-direction: column;
    padding-right: 15px;
    padding-left: 15px;
    border-color: rgba(101, 101, 101, .2); 
    border-width: 1; 
    margin-top: 12px;
`
const SearchItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 33px;
`
const ButtonArrow = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    height: 30px;
`
const ArrowIcon = styled(Icon)`
    font-size: ${moderateScale(16)};
    color: #707070;
`
const BottomWrapper = styled.View`
    margin-top: 15%;
    width: 100%;
`
const BackgroundImage = styled.Image`
    width: 100%;
    height: ${verticalScale(166)};
`

const slides = [
    {
      img: slideImages.banner1
    },
    {
      img: slideImages.banner2
    },
    {
      img: slideImages.banner3
    }
  ];

  const renderImages = scrollX => {
    return (
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
        {slides.map((item, index) => (
          <Block center bottom key={`img-${index}`} style={{ width: SIZES.screenWidth }}>
            <BackgroundImage
              source={item.img}
              resizeMode="cover"
            />
          </Block>
        ))}
      </ScrollView>
    );
  };

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
  


const Search = ({ navigation }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [ searchItem, setSearch ] = useState('')
    const scrollX = new Animated.Value(0);

    useEffect(() => {
        scrollX.addListener(({ value }) => {
        setSlideIndex(Math.floor(value / SIZES.screenWidth));
        });
    }, [slideIndex]);

    return(
        <Wrap>
            <Header onPress={() => navigation.toggleDrawer()} />
            <HeaderTitle title={'Search'} />
            <SearchBox 
                placeholder="Dresses" 
                onChangeText={searchItem => setSearch({searchItem})}
                value={searchItem}
            /> 
            {/* <ScrollView 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                >
                <SearchItemContent>
                    <SearchItem>
                        <NnatanText xsmall secondary regular>Dresses</NnatanText>
                        <ButtonArrow>
                            <ArrowIcon 
                                type={'MaterialCommunityIcons'} 
                                name={'arrow-top-left'} 
                            />
                        </ButtonArrow>
                    </SearchItem>
                    <SearchItem>
                        <NnatanText xsmall secondary regular>Skirts</NnatanText>
                    </SearchItem>
                    <SearchItem>
                        <NnatanText xsmall secondary regular>Jumpsuits</NnatanText>
                        <ButtonArrow>
                            <ArrowIcon 
                                type={'MaterialCommunityIcons'} 
                                name={'arrow-top-left'} 
                            />
                        </ButtonArrow>
                    </SearchItem>
                    <SearchItem>
                        <NnatanText xsmall secondary regular>Shirts & Blouses</NnatanText>
                        <ButtonArrow>
                            <ArrowIcon 
                                type={'MaterialCommunityIcons'} 
                                name={'arrow-top-left'} 
                            />
                        </ButtonArrow>
                    </SearchItem>
                    <SearchItem>
                        <NnatanText xsmall secondary regular>Sweatshirts & Knitwears</NnatanText>
                    </SearchItem>
                    <SearchItem>
                        <NnatanText xsmall secondary regular>T-Shirts</NnatanText>
                        <ButtonArrow>
                            <ArrowIcon 
                                type={'MaterialCommunityIcons'} 
                                name={'arrow-top-left'} 
                            />
                        </ButtonArrow>
                    </SearchItem>
                    <SearchItem>
                        <NnatanText xsmall secondary regular>Pants</NnatanText>
                        <ButtonArrow>
                            <ArrowIcon 
                                type={'MaterialCommunityIcons'} 
                                name={'arrow-top-left'} 
                            />
                        </ButtonArrow>
                    </SearchItem>
                    <SearchItem>
                        <NnatanText xsmall secondary regular>Outerwear</NnatanText>
                        <ButtonArrow>
                            <ArrowIcon 
                                type={'MaterialCommunityIcons'} 
                                name={'arrow-top-left'} 
                            />
                        </ButtonArrow>
                    </SearchItem>
                    <SearchItem>
                        <NnatanText xsmall secondary regular>Sportweat</NnatanText>
                        <ButtonArrow>
                            <ArrowIcon 
                                type={'MaterialCommunityIcons'} 
                                name={'arrow-top-left'} 
                            />
                        </ButtonArrow>
                    </SearchItem>
                </SearchItemContent>
                <BottomWrapper>
                <Block center middle>
                    {renderImages(scrollX)}
                </Block>
                {renderDots(scrollX)}
                </BottomWrapper>
            </ScrollView> */}
        </Wrap>
    )
}

Search.navigationOptions = {
    header: null
};

Search.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    dot: { width: 9, height: 9 }
});

export default Search;