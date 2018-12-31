import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = { email: '', password: '' };
	}
	render() {
		const { email, password } = this.state;
		return (
			<Card>
				<CardSection>
					<Input
						label={'Email'}
						onChangeText={email => this.setState({ email })}
						value={email}
						placeHolder={'user@email.com'}
					/>
				</CardSection>
				<CardSection>
					<Input
						label={'Password'}
						onChangeText={password => this.setState({ password })}
						value={password}
						placeHolder={'password'}
						secureTextEntry
					/>
				</CardSection>
				<CardSection>
					<Button>{'Log in'}</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
