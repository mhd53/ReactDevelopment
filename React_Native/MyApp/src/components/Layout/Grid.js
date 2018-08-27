import { css } from 'styled-components';
import PropTypes from 'prop-types';

// Constant 
const GUTTERS = [0, 8, 16, 24, 32, 40]; // spacing options 
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // breakpoint options

const GridContainer = css`
	flex: 1,
	flexDirection: 'column'; 
	backgroundColor: '#fff';
	boxSizing: 'border-box';
	flexWrap: ${props => props.wrap};
	marginRight: -15;
	marginLeft: -15;
	width: 'auto';
	alignItems: ${props => props.alignItems};
	alignContent: ${props => props.alignContent};
	justifyContent: ${props => props.justify};
	minWidth: ${props => props.zeroMinWidth ? 0 : 'initial'};
	`;


GridContainer.defaultProps = {
	alignItems: 'flex-start',
	jusify: 'flex-start',
	wrap: 'auto',
}

GridContainer.propTypes = {
	alignItems: PropTypes.oneOf([
		'flex-start',
		'center',
		'flex-end',
		'stretch',
		'baseline',
		]),

	alignContent: PropTypes.oneOf([
		'stretch',
		'center',
		'flex-start',
		'flex-end',
		'space-between',
		'space-around',
		]),

	jusify: PropTypes.oneOf([
		'flex-start',
		'center',
		'flex-end',
		'space-between',
		'space-around',
		'space-evenly',
		]),

	minWidth: PropTypes.bool,
}

export default GridContainer;