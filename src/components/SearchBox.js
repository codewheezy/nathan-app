import React from 'react';
import styled from 'styled-components';
import { verticalScale, moderateScale } from 'react-native-size-matters'


// constants
import { theme } from '../constants';
import { Icon } from 'native-base';
const { SIZES, COLORS } = theme;

// components

const Wrap = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 10%;
`
const InputBox = styled.TextInput`
  height: ${verticalScale(42)};
  border-color: rgba(101, 101, 101, .2); 
  border-radius: 0;
  flex: 2;
  background-color: transparent;
  font-family: effra_regular;
  font-size: ${SIZES.xsmall};
  border-width: 1;
  padding-left: 15;
  padding-right: 15;
`
const SearchButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 7;
  width: ${verticalScale(43)};
  height: ${verticalScale(42)};
  background-color: ${COLORS.primary};
`
const SearchIcon = styled(Icon)`
  font-size: ${moderateScale(32)};
  color: ${COLORS.white};
`

const SearchBox = ({
  placeholder,
  onChangeText,
  value,
  blurOnSubmit

}) => {
    return(
      <Wrap>
        <InputBox 
          placeholder={placeholder}
          placeholderTextColor={'#656565'}
          onChangeText={text => onChangeText(text)}
          value={value}
          autoCompleteType="off"
          autoCorrect={false}
          autoCapitalize="none"
          blurOnSubmit={blurOnSubmit}
        />
       <SearchButton>
        <SearchIcon 
          name={'search'} 
          type={'EvilIcons'} 
        />
       </SearchButton>
      </Wrap>
    )
}


export default SearchBox;


