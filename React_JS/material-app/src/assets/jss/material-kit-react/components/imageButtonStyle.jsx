import { title } from 'assets/jss/material-kit-react.jsx';
import { primaryColor } from 'assets/jss/material-kit-react.jsx';
import imagesStyle from 'assets/jss/material-kit-react/imagesStyles.jsx'; 

const imageButtonStyle = {
	...imagesStyle,
	
	imageButton: { 
		padding: '0px',
	},

	image: {
		margin: '0px',

	},

	floatImage: {

	},

	floatIcon: {
		width: '50px',
		height: '50px',
		borderRadius: '25px',
		backgroundColor: primaryColor,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: '85px',
		left: '30px',

	},

	title: {
		position: 'absolute',
		left: '30px',
		bottom: '30px',
		fontFamily: 'Roboto',
		...title,
	},
};

export default imageButtonStyle;