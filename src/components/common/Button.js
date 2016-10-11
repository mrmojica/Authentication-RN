//Reusable Button Component

import React from 'react';
//import touchableopacity to create a button
import { Text, TouchableOpacity } from 'react-native';


//you want to wrap TouchableOpacity around what you want to be clicked on
const Button = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
			<Text style={styles.textStyle}>
			{props.children}
			</Text>
		</TouchableOpacity> 
	);
};

const styles = {
	buttonStyle: {
		//expand content to max limit
		flex: 1,
		//position the element itself to stretch the limits of the container
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

export default Button;

