//Reusable component

import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
	return (
		<View style={styles.containerStyle}> 
			<Text style={styles.labelStyle}>{props.label}</Text>
			<TextInput
				//just passing secureTextEntry it automatically pass true
				secureTextEntry={props.secureTextEntry}
				placeholder={props.placeholder}
				//to prevent autocorrect spelling
				autoCorrect={false}
				style={styles.inputStyle}
				value={props.value}
				onChangeText={props.onChangeText}
			/>
		</View>
	);
};

const styles = {
	//the flex allocates the siblings of the parent view.  
	//total space 3, 2/3 will go to input 1/3 to label
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		//sets space between line of text
		lineHeight: 23,
		//we didnt need height or width since flex 2 sets the input space
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		//to make children in a row
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };

