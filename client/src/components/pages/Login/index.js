import React, { Component } from 'react';
import fire from '../../../config/Fire';
import { Col, Row } from "../../Global/Grid";
import Jumbotron from "../../Global/Jumbotron";



class Login extends Component {
   
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleAuthWithGoogle = this.handleAuthWithGoogle.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.signup = this.signup.bind(this);


        this.state = {
            email: '',
            password: '',
            firtsName: '',
            lastName: '',
            newUser: ' ',
            newPassword: ''
        }
    }

    signup(e) {
        e.preventDefault();

        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(result => 

                this.setState({ email: result.user.newUser, newPassword: result.user.password})
            )
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));

            console.log(this.state.newUser, this.state.newPassword)
            
        // 

        const { history } = this.props;

        this.setState({ error: false })

        if (!( this.state.newUser=== this.state.email && this.state.newPassword)) {
            return this.setState ({ error: true });
        }

        // StorageEvent.set('loggedIn', true );
        history.push('/home')
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(result => console.log(`${result.user.email} Ha iniciado sesion`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
        
    }

   


    handleAuthWithGoogle() {
        const provider = new fire.auth.GoogleAuthProvider();

        fire.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} Ha iniciado sesion`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    handleChangeEmail(e) {
        this.setState({ email: e.target.value });
        console.log(e.target.value)
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.email);
        event.preventDefault();
      }

    render() {
        return (

            <div>
               <br></br>
               <br></br>

                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-4">

                        <Jumbotron>
                        <div className="signupForm mt-5">
                            <form>
                                <div className="form-group">
                                    <h1>New User?</h1>
                                    <p> * Get a FREE account in less than 2 minutes</p>
                                    <p> * Access a personalized that allows to upload your projects or be a backer on a great idea!</p>
                                    <h1>Join Now!</h1>
                                    <label htmlFor="exampleInputFirstName">Firts Name</label>
                                    <input value={this.state.firtsName} onChange={this.handleChange} type="firtsName"
                                        name="firtsName" className="form-control" id="exampleInputFirstName" placeholder="" />
                                </div>
                                <div>
                                    <label htmlFor="exampleInputLastName">Last Name</label>
                                    <input value={this.state.LastName} onChange={this.handleChange} type="LastName"
                                        name="LastName" className="form-control" id="exampleInputLastName" placeholder="" />
                                </div>
                                <div>
                                    <label htmlFor="exampleInputEmail">Email Address</label>
                                    <input value={this.state.email} onChange={this.handleChangeEmail} type="email" name="email"
                                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder="" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                            anyone else</small>
                                </div>
                                <div>
                                    <label htmlFor="exampleInputPassword">Select Password</label>
                                    <input value={this.state.password} onChange={this.handleChange} type="password"
                                        name="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                                </div>
                                <button onClick={this.handleSubmit} style={{ marginTop: '25px', marginLeft: '10px' }} className="btn btn-success">Signup</button>

                            </form>
                        </div>

                        </Jumbotron>

                    </Col>

                    <Col size="md-4">

                        <Jumbotron >
                        <div className="loginForm mt-5">
                            <form>
                                <div className="form-group">
                                    <h1>Current User?</h1>
                                    <label htmlFor="exampleInputEmail">Email Address</label>
                                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                                        className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                        anyone else
                                    </small>
                                </div>
                                <div>
                                    <label htmlFor="exampleInputPassword">Password</label>
                                    <input value={this.state.password} onChange={this.handleChange} type="password"
                                        name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <br></br>
                                <small id="emailHelp" className="form-text text-muted">Forgot your Password?</small>
                                <button type="submit" onClick={this.login} style={{ marginTop: '25px', marginRight: '10px' }} className="btn btn-primary">Login</button>
                                <button type="submit" onClick={this.handleAuthWithGoogle} style={{ marginTop: '25px', marginRight: '10px' }} className="btn btn-danger">Login with Google</button>


                            </form>
                        </div>

                      </Jumbotron>       

                    </Col>
                    <Col size="md-2"></Col>
                </Row>

            </div>



        );
    }
}

export default Login;
