import React from 'react';
import PropTypes from 'prop-types';
import '../UserProfile/style.css';
import { GoHeart } from "react-icons/go";

const UserProfile = ({ property, Likes, Comments, clickHeart, comments, addComment, changeText, valueText }) => {

    const { index, picture, projectName, ideatorName, description, Cost } = property;
    
    const handleClick = () => {
		clickHeart()
    }
    
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
        <div className='UserProfileContainer card'id={`card-${index}`}>
            <div className='ImageContainer'>
                <img className='Img' src={picture} alt={projectName}></img>
            </div>
            <div className='InfoContainer details'>
                <span className="index">{index + 1}</span>

                <div className='Name'> {projectName} </div>
                <div className='Name'> {ideatorName} </div>
                <br></br>
                <p>{Cost.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    -  {description}</p>
                <br></br>
                
                <div className='glyphicon glyphicon-thumbs-up' onClick={()=> handleClick()}><GoHeart/></div>
                
                <div className='LikesNumber'>Likes:  {Likes}  </div>
                <div className='CommentsNumbers'>Comments:  {Comments}  </div>

                
                <div className='CommentsContainerBox'>
                <div className='CommentsContainer'>
                <input
					onChange={(e) => handleChange(e)}
				 	className='CommentsBox'
					type="text" placeholder='What do you think about this project?'
					value={valueText}
				></input>
				<button className='CommentButton' onClick={()=> handleClickComment()}> > </button>
                </div>
                {CommentList}
                </div>
                
            </div>
        </div>

    
	)
}

UserProfile.propTypes = {

    property: PropTypes.object.isRequired,
    Likes: PropTypes.number.isRequired,
    Comments: PropTypes.number.isRequired,
    clickHeart: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
	comments: PropTypes.array.isRequired,
	changeText: PropTypes.func.isRequired,
}

export default UserProfile;