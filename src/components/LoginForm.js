import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = { text: '' };
	}
	render() {
		const { text } = this.state;
		return (
			<Card>
				<CardSection>
					<TextInput
						style={{
							height: 20,
							flex: 1,
							width: null
						}}
						onChangeText={text => this.setState({ text })}
						value={text}
					/>
				</CardSection>
				<CardSection />
				<CardSection>
					<Button>{'Log in'}</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
