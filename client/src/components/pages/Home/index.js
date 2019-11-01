import React, { Component } from 'react';
import { Col, Row, Container } from "../../Global/Grid";
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




                </Container>
                
                
            </div>


        );
    }

}


export default Home;
