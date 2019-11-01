import React from 'react';
import PropTypes from 'prop-types';
import '../Heart/style.css';
import { GoHeart } from "react-icons/go";



const Heart = ({clickHeart}) => {
	const handleClick = () => {
		clickHeart()
	}
	return (
		<div className='HeartContainer'>
			<div className='glyphicon glyphicon-thumbs-up' onClick={()=> handleClick()}><GoHeart/>
			</div>
		</div>
	)
}

Heart.propTypes = {
	clickHeart: PropTypes.func.isRequired,
}

export default Heart;