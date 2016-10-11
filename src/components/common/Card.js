import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>

	);
};

const styles = {
	containerStyle: {
		//put a border of 1 around the component
		borderWidth: 1,
		// gives a curve on the corners
		borderRadius: 2,
		borderColor: '#ddd',
		//dont give a border at the bottom (because we adding carditem components)
		borderBottomWidth: 0,
		//shadow will give more pop
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		//shadowradius around corners
		shadowRadius: 2,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
};

export default Card;
