//Reusable Header Component

import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	//destructoring to reference our styling
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
		<Text style={textStyle}>{props.headerText}</Text>
		</View>
		);
};


const styles = {
	//defines the view styles
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		//setting a shadow color
		shadowColor: '#000',
		//no shadow on left and right, shadow on top/bottom
		shadowOffset: { width: 0, hieght: 2 },
		//0-1 lower the number the lighter, higher = darker
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	//text style
	textStyle: {
		fontSize: 20
	}

};


export default Header;
