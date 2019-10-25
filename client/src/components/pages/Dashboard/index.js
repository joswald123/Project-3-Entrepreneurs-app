import React from 'react';
import { Col, Row } from "../../Global/Grid";
import { Link } from 'react-router-dom';

const DashboardPage = props => {

    const { history } = props;


    return (
        <div>
            <Row>
                <Col size="md-12">

                    <img
                        style={{ width: 700, height: 500 }}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/936575/pexels-photo-936575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="First slide"

                    />
                    <h1>Your Welcome ...!</h1>

                </Col>


            </Row>
            <Row>
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
                        style={{ width: 5, height: 200 }}
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
                        alt="Third slide"
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
                        alt="Third slide"
                    />
                     <Link to="/projectpage">
                        <h3>My Ideas</h3>
                    </Link>

                </Col>
                <Col size="md-2"></Col>
            </Row>
            <Row>
                <Col size="md-4"></Col>
                <Col size="md-4">
                    <img
                        style={{ width: 5, height: 200 }}
                        className="d-block w-100"
                        src="https://365psd.com/wp-content/uploads/2011/05/cloud-upload-2.jpg"
                        alt="Third slide"

                    />

                    <h3>Upload your new idea</h3>

                </Col>

                <Col size="md-4"></Col>
            </Row>




        </div >

    )

}

export default DashboardPage;