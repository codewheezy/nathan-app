import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

import { theme } from '../constants';
const { COLORS, SIZES, FONTS } = theme;

const NnatanText = ({
    //typography
    base, 
    xbase,
    xsmall,
    smallish,
    small,
    medium,
    large,
    xlarge,
    xxlarge,
    xxxlarge,
    xxxxlarge,
    size,
    //font-weight
    regular,
    bold,
    semibold,
    heavy,
    medium300,
    light200,
    //styling
    transform,
    align,
    weight,
    center,
    right,
    left,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    accent,
    primary,
    secondary,
    tertiary,
    black,
    white,
    midGrey,
    success,
    error,
    style,
    animated,
    children,
    margin,
    padding,
    lightGrey,
    darkerGrey,
    lighterGrey,
    ...otherProps }) => {
    
        const handleMargins = () => {
            if (typeof margin === 'number') {
              return {
                marginTop: margin,
                marginRight: margin,
                marginBottom: margin,
                marginLeft: margin
              };
            }
        
            if (typeof margin === 'object') {
              const marginSize = Object.keys(margin).length;
              switch (marginSize) {
                case 1:
                  return {
                    marginTop: margin[0],
                    marginRight: margin[0],
                    marginBottom: margin[0],
                    marginLeft: margin[0]
                  };
                case 2:
                  return {
                    marginTop: margin[0],
                    marginRight: margin[1],
                    marginBottom: margin[0],
                    marginLeft: margin[1]
                  };
                case 3:
                  return {
                    marginTop: margin[0],
                    marginRight: margin[1],
                    marginBottom: margin[2],
                    marginLeft: margin[1]
                  };
                default:
                  return {
                    marginTop: margin[0],
                    marginRight: margin[1],
                    marginBottom: margin[2],
                    marginLeft: margin[3]
                  };
              }
            }
          };
    
          const handlePaddings = () => {
            if (typeof padding === 'number') {
              return {
                paddingTop: padding,
                paddingRight: padding,
                paddingBottom: padding,
                paddingLeft: padding
              };
            }
        
            if (typeof padding === 'object') {
              const paddingSize = Object.keys(padding).length;
              switch (paddingSize) {
                case 1:
                  return {
                    paddingTop: padding[0],
                    paddingRight: padding[0],
                    paddingBottom: padding[0],
                    paddingLeft: padding[0]
                  };
                case 2:
                  return {
                    paddingTop: padding[0],
                    paddingRight: padding[1],
                    paddingBottom: padding[0],
                    paddingLeft: padding[1]
                  };
                case 3:
                  return {
                    paddingTop: padding[0],
                    paddingRight: padding[1],
                    paddingBottom: padding[2],
                    paddingLeft: padding[1]
                  };
                default:
                  return {
                    paddingTop: padding[0],
                    paddingRight: padding[1],
                    paddingBottom: padding[2],
                    paddingLeft: padding[3]
                  };
              }
            }
          };  
    
    const textStyles = [
        styles.text,
        base && styles.base,
        xbase && styles.xbase,
        xsmall && styles.xsmall,
        smallish && styles.smallish,
        small && styles.small,
        medium && styles.medium,
        large && styles.large,
        xlarge && styles.xlarge,
        xxlarge && styles.xxlarge,
        xxxlarge && styles.xxxlarge,
        xxxxlarge && styles.xxxxlarge,
        size && { fontSize: size },
        transform && { textTransform: transform },
        align && { textAlign: align },
        height && { lineHeight: height },
        spacing && { letterSpacing: spacing },
        weight && { fontWeight: weight },
        regular && styles.regular,
        bold && styles.bold,
        semibold && styles.semibold,
        heavy && styles.heavy,
        medium300 && styles.medium300,
        light200 && styles.light200,
        center && styles.center,
        right && styles.right,
        left && styles.left,
        color && styles[color],
        color && !styles[color] && { color },
        margin && { ...handleMargins() },
        padding && { ...handlePaddings() },
        // color shortcuts
        accent && styles.accent,
        primary && styles.primary,
        secondary && styles.secondary,
        tertiary && styles.tertiary,
        black && styles.black,
        white && styles.white,
        success && styles.success,
        error && styles.error,
        midGrey && styles.midGrey,
        lightGrey && styles.lightGrey,
        darkerGrey && styles.darkerGrey,
        lighterGrey && styles.lighterGrey,
        style // rewrite predefined styles
    ];

      if (animated) {
        return (
          <Animated.Text style={textStyles} {...otherProps}>
            {children}
          </Animated.Text>
        );
      }

      return (
        <Text style={textStyles} {...otherProps} allowFontScaling={false}>
          {children}
        </Text>
      );
}

const styles = StyleSheet.create({
    // default style
    text: {
      fontSize: SIZES.medium,
      color: COLORS.darkGray
    },
    // variations
    regular: {
      fontFamily: 'effra_regular'
    },
    bold: {
      fontFamily: 'effra_bold'
    },
    semibold: {
      fontFamily: 'effra_bold',
      fontWeight: '700'
    },
    heavy: {
      fontFamily: 'effra_heavy'
    },
    medium300: {
      fontFamily: 'effra_medium'
    },
    light200: {
      fontFamily: 'effra_light',
    },
    // position
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
    left: { textAlign: 'left' },
    // colors
    accent: { color: COLORS.accent },
    primary: { color: COLORS.primary },
    secondary: { color: COLORS.secondary },
    tertiary: { color: COLORS.tertiary },
    black: { color: COLORS.black },
    white: { color: COLORS.white },
    success: { color: COLORS.success },
    error: { color: COLORS.error },
    midGrey: { color: COLORS.midGrey },
    lightGrey: { color: COLORS.lightGrey },
    darkerGrey: { color: COLORS.darkerGrey },
    lighterGrey: { color: COLORS.lighterGrey },
    // fonts size
    xsmall: FONTS.xsmall,
    base: FONTS.base,
    xbase: FONTS.xbase,
    smallish: FONTS.smallish,
    small: FONTS.small,
    medium: FONTS.medium,
    large: FONTS.large,
    xlarge: FONTS.xlarge,
    xxlarge: FONTS.xxlarge,
    xxxlarge: FONTS.xxxlarge,
    xxxxlarge: FONTS.xxxxlarge
  });

export default NnatanText;