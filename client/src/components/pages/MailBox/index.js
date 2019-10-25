import React, { Component } from 'react';
import Jumbotron from '../../Global/Jumbotron';
import { Col, Row, Container } from "../../Global/Grid";

class MailBoxPage extends Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <Jumbotron>
                                <div className="FavoritePage mt-5">
                                    <h1>MailBox</h1>
                                </div>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default MailBoxPage;