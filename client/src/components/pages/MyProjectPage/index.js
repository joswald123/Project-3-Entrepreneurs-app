import React, { Component } from 'react';
import Api from '../../utils/Api';
import { Col, Row, Container } from "../../Global/Grid";
import '../MyProjectPage/style.css'


class MyProjectPage extends Component {

    constructor() {
        super();
        this.state = {
            index: '',
            picture: '',
            projectName: '',
            ideatorName: '',
            description: '',
            Cost: '',
            savedProjects: [],
            noResults: false
        }

    }

    handleSave = (event) => {
        event.preventDefault();
        Api.addProject(this.state)
        alert("Your response has been saved!")

    }

    componentDidMount() {
        this.getSavedProjects();
    }

    getSavedProjects = () => {
        Api.getAllProjects()
            .then(res => {
                if (res.data.length > 0) {

                    this.setState({
                        savedProjectss: res.data,
                        target: "_blank"
                    });

                } else {
                    this.setState({
                        noResults: true
                    });
                }

            })
            .catch(err => console.log(err));
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Col size="md-6">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.handleSave}>

                                        <div>
                                            <label htmlFor="index">Index Num:</label>
                                            <input type="number" name="index" onChange={this.handleChange}></input>
                                        </div>
                                        <div>
                                            <label htmlFor="picture">Project image:</label>
                                            <input type="url" name="picture" onChange={this.handleChange}></input>
                                        </div>

                                        <div>
                                            <label htmlFor="projectName">Project Name:</label>
                                            <input type="text" name="projectName" onChange={this.handleChange}></input>
                                        </div>

                                        <div>
                                            <label htmlFor="ideatorName">Ideator Name:</label>
                                            <input type="text" name="ideatorName" onChange={this.handleChange}></input>
                                        </div>

                                        <div>
                                            <label htmlFor="description">Description of the project:</label>
                                            <textarea type="number" name="description" onChange={this.handleChange}></textarea>
                                        </div>

                                        <div>
                                            <label htmlFor="Cost">Estimated Cost:</label>
                                            <input type="number" name="Cost" onChange={this.handleChange}></input>
                                        </div>

                                        <button type="submit" className="btn btn-primary">
                                            Send
                                          </button>


                                    </form>
                                </div>
                            </div>

                        </Col>

                        <Col size="md-6">
                            <table>
                                <div id={`card-${this.state.index}`} className="card">

                                <img src={this.state.picture} alt={this.state.projectName} />

                                <div className="details">


                                    <h2>{this.state.projectName}</h2>
                                    <h3>{this.state.ideatorName}</h3>
                                    <br></br>
                                    <p>{this.state.Cost.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                                        -  {this.state.description}</p>

                                        

                                </div>
                            </div>

                            </table>

                            

                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default MyProjectPage;