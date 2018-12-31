import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';
import styles from './styles/LoginFormStyles';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			error: '',
			loading: false,
			isEditable: true
		};
	}

	_onButtonPress() {
		const { email, password } = this.state;
		this.setState({
			isEditable: false,
			error: '',
			loading: true
		});
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(this._onLoginSuccess())
			.catch(() => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(this._onLoginSuccess())
					.catch(() => {
						this._onLoginFail();
					});
			});
	}

	_onLoginSuccess = () => {
		this.setState({
			error: ''
		});
	};

	_onLoginFail = () => {
		this.setState({
			error: 'Authentication Failed.',
			email: '',
			password: '',
			loading: false,
			isEditable: true
		});
	};

	_renderButton = () => {
		const { loading } = this.state;
		if (loading) {
			return <Spinner size={'small'} />;
		} else {
			return <Button onPress={() => this._onButtonPress()}>{'Log in'}</Button>;
		}
	};

	render() {
		const { email, password, error, isEditable } = this.state;
		const { errorTextStyle } = styles;
		return (
			<Card>
				<CardSection>
					<Input
						label={'Email'}
						onChangeText={email => this.setState({ email, error: '' })}
						value={email}
						placeHolder={'user@email.com'}
						editable={isEditable}
					/>
				</CardSection>

				<CardSection>
					<Input
						label={'Password'}
						onChangeText={password => this.setState({ password, error: '' })}
						value={password}
						placeHolder={'password min 6 chars'}
						secureTextEntry
						editable={isEditable}
					/>
				</CardSection>
				<Text style={errorTextStyle}>{error}</Text>
				<CardSection>{this._renderButton()}</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
