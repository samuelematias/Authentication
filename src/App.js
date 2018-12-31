import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
	componentDidMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyD0U0ttY3u9oRFydBgFXJ_6ZlpLyYX0IRo',
			authDomain: 'authentication-b97b6.firebaseapp.com',
			databaseURL: 'https://authentication-b97b6.firebaseio.com',
			projectId: 'authentication-b97b6',
			storageBucket: 'authentication-b97b6.appspot.com',
			messagingSenderId: '220782362811'
		});
	}

	render() {
		return (
			<View>
				<Header headerText={'Authentication'} />
				<Text>{'auth'}</Text>
			</View>
		);
	}
}

export default App;
