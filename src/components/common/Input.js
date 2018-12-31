import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles/InputStyles';

const Input = ({ label, value, onChangeText, placeHolder }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				autoCorrect={false}
				placeholder={placeHolder}
				autoCapitalize="none"
			/>
		</View>
	);
};

export { Input };
