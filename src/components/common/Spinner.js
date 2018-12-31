import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles/SpinnerStyles';

const Spinner = ({ size }) => {
	const { spinnerStyle } = styles;
	return (
		<View style={spinnerStyle}>
			<ActivityIndicator size={size || 'large'} />
		</View>
	);
};

export { Spinner };
