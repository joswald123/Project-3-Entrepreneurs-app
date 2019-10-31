import React, { Component } from 'react';
import { Col, Row } from "../../Global/Grid";
import '../Home/css/style.css'
import Card from "../../Global/card.js";
import data from "../../../Data/data";




class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0]
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

    render() {

        const { properties, property } = this.state;
        return (

            <div className="Home">
                               
                 <Row>
                     
                    <Col size="md-12">

                        <img
                         style={{ width: 700, height: 500 }}
                         className="d-block w-100"
                         src="https://images.pexels.com/photos/936575/pexels-photo-936575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                         alt="First slide"
                        
                        />  
                        
                    </Col>
                    
                </Row>
                <Row>
                    <Col size="md-4"></Col>
                    <Col size="md-4">
                    <h1>Best Projects to work on together</h1>
                    </Col>
                    <Col size="md-4"></Col>
                </Row>

                <div className="page">
                    <section>
                        
                        <h1>Featured projects to work on</h1>

                    </section>

                    <div className="border" className={`cards-slider active-slide-${property.index}`}>
                        <div className="cards-slider-wrapper" style={{
                            'transform': `translateX(-${property.index * (100 / properties.length)}%)`
                        }}>

                            {
                                properties.map(property => <Card key={property._id} property={property} />)
                            }
                        </div>
                    </div>
                    <button  className="boton" onClick={() => this.prevProperty()}
                        disabled={property.index === 0}
                    >Prev</button>
                     <button className="boton" onClick={() => this.nextProperty()}
                        disabled={property.index === data.properties.length - 1}
                    >Next</button>
                </div>
            </div>


        );
    }

}


export default Home;
