import React from 'react';
import { Text } from 'react-native';

class HelloWorld extends React.Component {
	render() {
		return (
			<Text>Hello World, how are you {this.props.name}?</Text>
			);
	}
}

export default HelloWorld;
