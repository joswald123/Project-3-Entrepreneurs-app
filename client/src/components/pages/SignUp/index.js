import React, { useCallback } from 'react';
import { withRouter } from "react-router"
import fire from '../../../config/Fire';
import { Col, Row } from "../../Global/Grid";





const Signup = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await fire
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);

        }

    }, [history]);

    return (

        <div>
            <br></br>
            <br></br>

            <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">

                        <div className="signupForm mt-5">
                            <form onSubmit={handleSignUp}>

                                <h1>New User?</h1>
                                <p> * Get a FREE account in less than 2 minutes</p>
                                <p> * Access a personalized that allows to upload your projects or be a backer on a great idea!</p>
                                <h1>Join Now!</h1>

                                <label>
                                    First Name
                                        <input type="firstname" name="firstname" placeholder="" />
                                </label>
                                <hr></hr>
                                <label>
                                    Last Name
                                        <input type="LastName" name="LastName" placeholder="" />
                                </label>
                                <hr></hr>
                                <label>
                                    Email
                                        <input type="email" name="email" placeholder="" />
                                </label>
                                <hr></hr>
                                <label>
                                    Password
                                        <input type="password" name="password" placeholder="" />
                                </label>
                                <hr></hr>
                                <button type="submit" style={{ marginTop: '25px', marginLeft: '10px' }} className="btn btn-success">Signup</button>

                            </form>
                        </div>

               

                </Col>

                <Col size="md-2"></Col>
            </Row>

        </div >



    );

}

export default withRouter (Signup);