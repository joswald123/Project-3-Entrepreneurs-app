import React, { Component } from 'react';
import { Col, Row, Container } from "../../Global/Grid";
import '../Home/css/style.css'

import data from "../../../Data/data";
import UserProfile from '../../UserProfile/UserProfile.';




class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0],
            LikesNumber: 0,
            ComentsNumber: 1,
            Comments: [{
                value: 'React is Awesome !!'
            }],

            savedFavandComm: []

        }
    }
    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    // Comments functions

    clickHeart = () => {
        const likes = this.state.LikesNumber
        this.setState({ LikesNumber: likes + 1 })
    }

    addComment = (newValue) => {
        const comments = this.state.ComentsNumber
        const arrayComments = this.state.Comments
        const newComment = {
            value: newValue
        }
        arrayComments.push(newComment)
        this.setState({ ComentsNumber: comments + 1 })
        this.setState({ Comments: arrayComments })
        this.setState({ valueText: '' })

    }
    
    changeText = (value) => {
        this.setState({ valueText: value })
    }

    render() {

        const { properties, property } = this.state;

        return (

            <div className="Home">

                <Container>
                    <div className="page">

                        <section>

                            <h2>Featured projects to work on</h2>

                        </section>

                        
                        <div className="border" className={`cards-slider active-slide-${property.index}`}>
                            <div className="cards-slider-wrapper" style={{
                                'transform': `translateX(-${property.index * (100 / properties.length)}%)`
                            }}>

                                {
                                    properties.map(property => 
                                    
                                    <UserProfile 
                                    key={property._id} property={property} 
                                    Likes={this.state.LikesNumber}
                                    Comments={this.state.ComentsNumber} 
                                    comments={this.state.Comments}
                                    addComment={this.addComment}
                                    changeText={this.changeText}
                                    valueText={this.state.valueText}
                                    clickHeart={this.clickHeart}/>)
                                }

                            </div>
                          
                        </div>

                        <button className="boton" onClick={() => this.prevProperty()}
                            disabled={property.index === 0}
                        >Prev</button>
                        <button className="boton" onClick={() => this.nextProperty()}
                            disabled={property.index === data.properties.length - 1}
                        >Next</button>

                       
                       
                    </div>


                </Container>


            </div>


        );
    }

}


export default Home;
