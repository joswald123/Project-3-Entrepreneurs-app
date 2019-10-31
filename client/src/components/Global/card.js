import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Grid';


const Card = ({ property }) => {

    const { index, picture, projectName, ideatorName, description, Cost } = property;

    return (

        <Container >

            <div id={`card-${index}`} className="card">

                <img src={picture} alt={projectName} />

                <div className="details">

                    <span className="index">{index + 1}</span>

                    
                        <h2>{projectName}</h2>
                        <h3>{ideatorName}</h3>
                        <br></br>
                        <p>{Cost.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                        -  {description}</p>
    
                </div>
            </div>

        </Container>

    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;