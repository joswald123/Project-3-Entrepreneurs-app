import React, { Component } from 'react';
import '../Contact/style.css';
import { Col, Row } from "../../Global/Grid";



class Contact extends Component {
    render() {

        return (
            
            <div className="contactUs">

                <Row >
                    
                    <Col size="md-12">
                        <h1 className="mt-5 mb-5 text-center">Contact Us!</h1>
                    </Col>
                    
                </Row>

                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-3">
                        
                            <br></br>
                            <br></br>
                            <div className="box border-0">
                                <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                                <div className='details'>
                                    <h3>USA - San Leandro, CA</h3>
                                </div>
                            </div>

                        

                    </Col>

                    <Col size="md-3">
                        
                            <br></br>
                            <br></br>
                            <div className="box">
                                <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                                <div className='details'>
                                    <h3>+1 510 561 8326</h3>
                                </div>
                            </div>

                        

                    </Col>
                    <Col size="md-3">
                        
                            <br></br>
                            <br></br>
                            <div className="box">
                                <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                <div className='details'>
                                    <h3> info@gmail.com</h3>
                                </div>
                            </div>

                        

                    </Col>
                    <Col size="md-1"></Col>

                </Row>
            </div>

        )
    }
}

export default Contact;