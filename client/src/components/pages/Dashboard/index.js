import React from 'react';
import { Col, Row, Container } from "../../Global/Grid";
import { Link } from 'react-router-dom';


const DashboardPage = props => {

    const { history } = props;


    return (
        <div>
            <Container>
            <Row>
                <Col size="md-12">
                    <h1>Your Welcome ...!</h1>
              </Col>


            </Row>
            <Row >
                <Col size="md-1" ></Col>
                <Col size="md-11">
                    <Link onClick={() => history.push('/')}>Home</Link>
                    <Link onClick={() => history.push('/dashboard')}>    | Dashboard</Link>
                </Col>
            </Row>
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-4">
                    <img
                        style={{ width: 50, height: 200 }}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="First slide"
                    />

                    <Link to="/mailbox">
                        <h3>MailBox</h3>
                    </Link>

                </Col>
                <Col size="md-4">
                    <img
                        style={{ width: 5, height: 200 }}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/305530/pexels-photo-305530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Second slide"
                    />
                    <Link to="/favoritespage">
                        <h3>Favorites</h3>
                    </Link>

                </Col>
                <Col size="md-2"></Col>
            </Row>
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-4">
                    <img
                        style={{ width: 5, height: 200 }}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/63901/pexels-photo-63901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                    />
                    <Link to="/backerpage">
                        <h3>Saved</h3>
                    </Link>

                </Col>
                <Col size="md-4">
                    <img
                        style={{ width: 5, height: 200 }}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt="Fourth slide"
                    />
                    <Link to="/projectpage">
                        <h5>My Ideas / Upload your new idea</h5>
                    </Link>

                </Col>
                <Col size="md-2"></Col>
            </Row>
         
            </Container>
            


        </div >

    )

}

export default DashboardPage;