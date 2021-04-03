import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

//components 
import Block from '../components/Block';

import { theme } from '../constants';
import { COLORS, SIZES } from '../constants/theme';


const NnatanInput = ({
    placeholder,
    secureTextEntry,
    value,
    onChangeText,
    onFocus,
    withBorder,
    placeholderTextColor,
    keyboardType,
    ...otherProps
}) => {
    return(
        <Block>
            {
             withBorder ?
             (
                <TextInput
                style={styles.phoneNext}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={text => onChangeText(text)}
                value={value}
                autoCompleteType="off"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType={keyboardType}
                onFocus={onFocus}
                {...otherProps}
                />
            )
            :
            (<Block row>
                <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
                onChangeText={text => onChangeText(text)}
                value={value}
                autoCorrect={false}
                autoCompleteType="off"
                autoCapitalize="none"
                onFocus={onFocus}
                {...otherProps}
                />
            </Block>)}
        </Block>
    )
}

const styles = StyleSheet.create({
    phoneNext: {
      height: 50,
      borderColor: COLORS.primary,
      borderRadius: 0,
      width: '100%',
      backgroundColor: 'transparent',
      fontFamily: 'effra_regular',
      fontSize: SIZES.medium,
      borderWidth: 1,
      paddingHorizontal: 20
    },
    textInput: {
        fontFamily: 'effra_regular',
        fontSize: SIZES.medium,
        height: 50,
        width: '80%'
    }
  });

export default NnatanInput;
