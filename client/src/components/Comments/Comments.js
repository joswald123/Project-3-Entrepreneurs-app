import React from 'react';
import PropTypes from 'prop-types';
import '../Comments/style.css';

const Comments = ({comments, addComment, changeText, valueText}) => {
	const handleChange = (event) => {
		changeText(event.target.value)
  }
	const handleClickComment = () => {
		addComment(valueText)
	}
	const CommentList = comments.map((element, index) => {
		return(
			<div className='Comments' key={index}>
				<div className='User'></div>
				<span className='Text'>{element.value}</span>
			</div>
		)
	})
	return (
		<div className='CommentsContainerBox'>
			<div className='CommentsContainer'>
				<input
					onChange={(e) => handleChange(e)}
				 	className='CommentsBox'
					type="text" placeholder='escriba un comentario'
					value={valueText}
				></input>
				<button className='CommentButton' onClick={()=> handleClickComment()}> > </button>
			</div>
			{CommentList}
		</div>
	)
}

Comment.defaultProps = {
	valueInput: ''
}

Comments.propTypes = {
	addComment: PropTypes.func.isRequired,
	comments: PropTypes.array.isRequired,
	changeText: PropTypes.func.isRequired
}


export default Comments;