import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

//constants 
import { theme, images } from '../constants';
const { defaultBanner } = images;
const { COLORS } = theme;

const Bgjumbotron = ({ children }) => (
    <ImageBackground source={defaultBanner.overlay} style={{ height: '85%', width: '100%' }}>
        <View style={styles.overlay}>
            { children }
        </View>
    </ImageBackground>
)

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: COLORS.primary,
        opacity: 0.8
    }
})

export default Bgjumbotron;