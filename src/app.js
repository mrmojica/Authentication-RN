import React, { Component } from 'react';
import { View } from 'react-native';
//to load data from firebase
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	//life cycle method that is automatically invoked in our component
	componentWillMount() {
		//config letting app know there is already data wanted to load
firebase.initializeApp({
    apiKey: 'AIzaSyDGqVy4x-qsoYv0B6-Y6FnM1vyeMBx4wnQ',
    authDomain: 'auth-ae782.firebaseapp.com',
    databaseURL: 'https://auth-ae782.firebaseio.com',
    storageBucket: 'auth-ae782.appspot.com',
    messagingSenderId: '173148477944'
  });
}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;

