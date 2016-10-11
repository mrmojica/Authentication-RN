import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', error: '' };

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '' });

		//first step of authentication
		firebase.auth().signInWithEmailAndPassword(email, password)
			//if login fails run catch promise function
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				//if create user fails...send error message
					.catch(() => {
						this.setState({ error: 'Authentication Failed.' });
					});
			});
	}


	render() {
		return (
			<Card>
				<CardSection>
					<Input
					placeholder='user@gmail.com'
					label='Email'
					value={this.state.email}
					onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection> 
					<Input
					//just passing secureTextEntry it automatically pass true
						secureTextEntry
						placeholder='password'
						label='Password'
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};


export default LoginForm;

