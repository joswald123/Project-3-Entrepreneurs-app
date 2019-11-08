import React, { Component } from 'react';
import Api from '../../utils/Api';
import { Col, Row, Container } from "../../Global/Grid";
import { MdDelete, MdEdit, MdSend } from 'react-icons/md';
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
        .then(res => {
            this.getSavedProjects();
        })
        alert("Your response has been saved!");

    }

    componentDidMount() {
        this.getSavedProjects();
    }

    getSavedProjects = () => {
        Api.getAllProjects()
            .then(res => {
                if (res.data.length > 0) {

                    this.setState({
                        savedProjects: res.data,
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

    handleDeleteButton = id => {

        Api.deleteProject(id)
            .then(res => this.componentDidMount())
            .then(res => this.getSavedProjects())
            .catch(err => console.log(err));

    }

    handleEditButton = id => {

        Api.updateProject(id)
            .then(res => {
                this.setState({

                    index: res.data.index,
                    picture: res.data.picture,
                    projectName: res.data.projectName,
                    ideatorName: res.data.ideatorName,
                    description: res.data.description,
                    Cost: res.data.Cost
                });
                console.log(res)
            })
            .then(res => this.getSavedProjects())
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
                        <Col size="md-12">
                            <div className="card">
                                <div className="card-content">
                                    <h1>Upload your new Project!</h1>
                                    <hr></hr>
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
                                            < MdSend /> Send
                                          </button>


                                    </form>
                                </div>
                            </div>

                        </Col>

                    </Row>
                    <hr></hr>

                    <Row>

                        <Col size="md-12">

                            <h1> My Projects </h1>
                            <hr></hr>

                            {this.state.savedProjects.map(project => (

                                <div className='UserProfileContainer card' id={`card-${project.index}`}>
                                    <div className='ImageContainer'>
                                        <img className='Img' src={project.picture} alt={project.projectName}></img>
                                    </div>
                                    <div className='InfoContainer details'>
                                        <span className="index">{project.index + 1}</span>

                                        <div className='Name'> {project.projectName} </div>
                                        <div className='Name'> {project.ideatorName} </div>
                                        <br></br>
                                        <p>{project.Cost.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                                            -  {project.description}</p>
                                        <br></br>
                                        <button className="btn btn-danger" id={project._id} onClick={() => this.handleDeleteButton(project._id)}><MdDelete />Delete</button>
                                        <button className="btn btn-success" id={project._id} onClick={() => this.handleEditButton(project._id)}><MdEdit />Edit</button>
                                    </div>

                                </div>

                            ))}


                        </Col>


                    </Row>

                </Container>
            </div>
        )
    }
}

export default MyProjectPage;