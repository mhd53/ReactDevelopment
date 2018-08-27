import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid, ToastAndroid } from 'react-native';

class AppBar extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  // Bind methods
	  this.onActionSelected = this.onActionSelected.bind(this);
	}

	onActionSelected(position) {
		switch (position) {
			case 0:
				ToastAndroid.show("Settings selected", ToastAndroid.SHORT);

			case 1:
				ToastAndroid.show("Heart selected", ToastAndroid.SHORT);

		}
	}
	
	render() {
    	return (
    		<ToolbarAndroid
    			style={styles.toolbarApp}
    			title="My App"
    			actions={[{title: 'Settings', show: 'always'}, {title: 'Heart', show: 'always'}]}
    			onActionSelected={this.onActionSelected} />
    	);
  	}
}

const styles = StyleSheet.create({
	toolbarApp: {
		marginTop: 24,
		backgroundColor: '#2196F3',
   		height: 56,
   		alignSelf: 'stretch',
	},

	toolbar: {
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'flex-start',
		backgroundColor: '#F5FCFF',

		height: 100,
	},

	appbar: {
		height: '100px',
	},

	header: {
		color: '#fff',
	},

	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
  	},
});

export default AppBar;