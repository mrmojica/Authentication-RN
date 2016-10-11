//Reusable component

import React from 'react';
//activityIndicator built in spinner (can take two properties size = large or small)
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={props.size || 'large'} />
		</View>
	);
};

const styles = {
	spinnerStyle: {
		//flex 1 to take full width of screen
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}

};

export { Spinner };

