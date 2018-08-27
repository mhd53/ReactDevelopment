import styled from 'styled-components';
import PropTypes from 'prop-types';

const GridItem = styled.view`
	flex: 1,
	flexDirection: ${props => props.direction /* define main axis */}; 
	position: 'relative';
	width: 100%;
	minHeight: 1;
	boxSizing: 'border-box';
	backgroundColor: '#fff';
	paddingRight: 15;
	paddingLeft: 15;
	flexBasis: 'auto';
	margin: 0;
	`;


GridItem.defaultProps = {
	direction: 'column';
}

GridItem.propTypes = {
	direction: PropTypes.string,
}


export default GridItem;