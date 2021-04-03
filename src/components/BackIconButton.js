import React from 'react';
import { TouchableOpacity } from 'react-native';
import {  SIZES, COLORS } from '../constants/theme';
import { Ionicons as IonIcons } from '@expo/vector-icons';
import NnatanText from './NnatanText';


const BackIconButton = props => {
    const {
		navigation,
		size=25,
		color=COLORS.white,
		label
	} = props;
    return(
        <TouchableOpacity
		style={{
			width: label ? 100 : SIZES.screenWidth * 0.12,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row'
		}}
		onPress={() => navigation.goBack()}
	>
		<IonIcons name="ios-arrow-back" size={size} color={color} />
		{label ? <NnatanText padding={[0, 10]} lightGrey medium300>{label}</NnatanText> : null}
	</TouchableOpacity>
)};

export default BackIconButton;
