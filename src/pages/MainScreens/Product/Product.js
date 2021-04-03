import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { verticalScale } from 'react-native-size-matters';
import ReadMore from 'react-native-read-more-text';
import { ScrollView, Animated, StyleSheet, Text } from 'react-native';

// constants 
import { theme, images } from '../../../constants'
import { Icon } from 'native-base';
const { COLORS, SIZES } = theme;
const { slideImages } = images;

// components 
import Header from '../../../components/Header';
import HeaderTitle from '../../../components/HeaderTitle' ;
import Block from '../../../components/Block';
import NnatanButton from '../../../components/NnatanButton'
import NnatanText from '../../../components/NnatanText';

const Wrap = styled.View`
    flex: 1;
`
const HeaderWrap = styled.View`
    padding-left: 16px;
    padding-right: 16px;
`
const ProductImageWrapper = styled.View`
    padding-top: 9%;
`
const ProductImage = styled.Image`
    width: 100%;
    height: ${verticalScale(293)};
`
const ContentWrapper = styled.View`
    padding-left: 16px;
    padding-right: 16px;
`
const DescriptionWrapper = styled .View`
    width: 100%;
    padding-top:6px;
`
const ButtonWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 11px;
`
const CountAndColorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`
const ColorWrapper = styled.View`
    height: 78px;
    justify-content: space-between;
    padding-left: ${props => props.Left ? '23%' : '0'};
`
const ToggleColorsWrap = styled.View`
  flex-direction: row;
`
const ColorButton = styled.TouchableOpacity``
const ColorBox1 = styled.View`
  height: 22px;
  width: 22px;
  border-radius: 11px;
  background-color: #783A1F;
`
const ColorBox2 = styled(ColorBox1)`
  background-color: #E39573;
`
const ColorBox3 = styled(ColorBox1)`
  background-color: #000000;
`
const ColorBoxBorder = styled.View`
  height: 35px;
  width: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 17.5px;
  background-color: whitesmoke;
  margin-right: 5px;
`
const WhiteBoxBorder = styled.View`
  height: 35px;
  width: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 17.5px;
  background-color: white;
  margin-right: 5px;
`
const ToggleCountWrap = styled.View`
  flex-direction: row;
`
const CountButton = styled.TouchableOpacity`
  height: 34px;
  width: 34px;
  align-items: center;
  border-width: 1px;
  border-color: #656565;
  justify-content: center;
  border-radius: 17.5px;
  background-color: white;
`
const PlusIcon = styled(Icon)`
  font-size: 25px;
  color: #656565;
`
const MinusIcon = styled(Icon)`
  font-size: 25px;
  color: #656565;
`
const CountText = styled.Text`
  font-size: 25px;
  fontFamily: 'effra_regular'
  margin-left: 10px;
  margin-right: 10px;
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
            <ProductImage
              source={item.img}
              resizeMode="cover"
            />
          </Block>
        ))}
      </ScrollView>
    );
  };

const Product = ({ navigation }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(1)
    const [count, setCount] = useState(1);
    const scrollX = new Animated.Value(0);

    useEffect(() => {
        scrollX.addListener(({ value }) => {
        setSlideIndex(Math.floor(value / SIZES.screenWidth));
        });
    }, [slideIndex]);
    
    const _renderTruncatedFooter = (handlePress) => {
      return (
        <Text style={{color: '#888'}} onPress={handlePress}>
          Read more
        </Text>
      );
    }
  
    const _renderRevealedFooter = (handlePress) => {
      return (
        <Text style={{color: '#888'}} onPress={handlePress}>
          Show less
        </Text>
      );
    }

    return(
      <Wrap>
        <HeaderWrap>
            <Header onPress={() => navigation.toggleDrawer()} />
            <HeaderTitle back navigation={navigation} title={'Product Profile'} />
        </HeaderWrap> 
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <ProductImageWrapper>
                <Block center middle>
                    {renderImages(scrollX)}
                </Block>
                {renderDots(scrollX)}
            </ProductImageWrapper>
            <ContentWrapper>
                <NnatanText black medium bold>Italian Horse</NnatanText>
                <NnatanText xxxxlarge light200 accent margin={[2,0,0,0]}>N25,000</NnatanText>
                <DescriptionWrapper>
                    <ReadMore
                        numberOfLines={3}
                        renderTruncatedFooter={() => <_renderTruncatedFooter /> }
                        renderRevealedFooter={() => <_renderRevealedFooter  /> }>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</Text>
                    </ReadMore>
                </DescriptionWrapper>
                <CountAndColorWrapper>
                  <ColorWrapper>
                    <NnatanText black bold medium margin={[12,0,0,0]}>Colour: </NnatanText>
                    <ToggleColorsWrap>
                      <ColorButton onPress={() => setSelectedColor(1)}>
                        {
                          selectedColor === 1 ?
                          (
                          <ColorBoxBorder>
                            <ColorBox1 />
                          </ColorBoxBorder>
                          ):(
                          <WhiteBoxBorder>
                            <ColorBox1 />
                          </WhiteBoxBorder>
                          )
                        }
                      </ColorButton>
                      <ColorButton onPress={() => setSelectedColor(2)}>
                        {
                          selectedColor === 2 ?
                          (
                          <ColorBoxBorder>
                            <ColorBox2 />
                          </ColorBoxBorder>
                          ):(
                          <WhiteBoxBorder>
                            <ColorBox2 />
                          </WhiteBoxBorder>
                          )
                        }
                      </ColorButton>
                      <ColorButton onPress={() => setSelectedColor(3)}>
                        {
                          selectedColor === 3 ?
                          (
                          <ColorBoxBorder>
                            <ColorBox3 />
                          </ColorBoxBorder>
                          ):(
                          <WhiteBoxBorder>
                            <ColorBox3 />
                          </WhiteBoxBorder>
                          )
                        }
                      </ColorButton>
                    </ToggleColorsWrap>
                  </ColorWrapper>
                  <ColorWrapper Left>
                    <NnatanText black bold medium margin={[12,0,0,0]}>Count: </NnatanText>
                    <ToggleCountWrap>
                      <CountButton onPress={() => setCount(count - 1)}>
                        <MinusIcon
                          name="minus"
                          type="Entypo"
                        />
                      </CountButton>
                      <CountText>{count}</CountText>
                      <CountButton onPress={() => setCount(count + 1)}>
                        <PlusIcon 
                          name="plus"
                          type="Entypo"
                        />
                      </CountButton>
                    </ToggleCountWrap>
                  </ColorWrapper>
                </CountAndColorWrapper>
                <ButtonWrapper>
                  <NnatanButton primary style={styles.proceedButton} onPress={() => navigation.navigate('Cart')}>
                    <NnatanText white smallish bold>Proceed to Cart</NnatanText>
                  </NnatanButton>
                  <NnatanButton outlined style={styles.outlineButton} onPress={() => navigation.navigate('Cart')}>
                    <NnatanText primary smallish bold>Add to Cart</NnatanText>
                  </NnatanButton>
                </ButtonWrapper>
            </ContentWrapper>
        </ScrollView>
      </Wrap>
    )
}

Product.navigationOptions = {
    header: null
};

Product.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    dot: { width: 9, height: 9 },
    proceedButton: {
      flex: 1
    },
    outlineButton: {
      width: 120,
    }
});

export default Product;