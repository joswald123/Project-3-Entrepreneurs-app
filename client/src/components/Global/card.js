import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Grid';
import Jumbotron from '../../components/Global/Jumbotron';

const Card = ({ property }) => {
  
    const { index, picture, projectName, ideatorName, description, Cost } = property;
   
    return (

        <Container >
            
            <div id={`card-${index}`} className="card">
            
            <img src={picture} alt={projectName} />

            <div className="details">
                <span className="index">{index + 1}</span>

                <p className="details">
                    
                    {`Cost:  ${Cost}`}
                    <br></br>
                    {`Project Leader Name: ${ideatorName}`}
                    <br></br>
                    {`Project Description: ${description}`}
                    
                </p>
            </div>
        </div>

        </Container>
        
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;