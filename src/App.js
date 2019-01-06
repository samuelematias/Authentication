import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import {
	Header,
	Button,
	Card,
	CardSection,
	Spinner,
	Input
} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { loggedIn: null, user: null };
	}

	componentDidMount() {
		this._onInitializeApp();
		this._handleOnAuthStateChanged();
	}

	_onInitializeApp = () => {
		return firebase.initializeApp({
			apiKey: 'AIzaSyD0U0ttY3u9oRFydBgFXJ_6ZlpLyYX0IRo',
			authDomain: 'authentication-b97b6.firebaseapp.com',
			databaseURL: 'https://authentication-b97b6.firebaseio.com',
			projectId: 'authentication-b97b6',
			storageBucket: 'authentication-b97b6.appspot.com',
			messagingSenderId: '220782362811'
		});
	};

	_handleOnAuthStateChanged = () => {
		return firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					loggedIn: true,
					user
				});
			} else {
				this.setState({
					loggedIn: false
				});
			}
		});
	};

	_onLogOut = () => {
		return firebase.auth().signOut();
	};

	_renderContent = () => {
		const { loggedIn, user } = this.state;

		switch (loggedIn) {
			case true:
				if (user) {
					const { email } = user;
					return (
						<Card>
							<CardSection>
								<Input
									label={'Email'}
									value={email}
									textStyle={{ color: '#ddd' }}
									editable={false}
								/>
							</CardSection>
							<CardSection>
								<Button onPress={() => this._onLogOut()}>{'Log Out'}</Button>
							</CardSection>
						</Card>
					);
				} else {
					return <Spinner />;
				}
			case false:
				return <LoginForm />;
			default:
				return <Spinner />;
		}
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header headerText={'Authentication'} />
				{this._renderContent()}
			</View>
		);
	}
}

export default App;
