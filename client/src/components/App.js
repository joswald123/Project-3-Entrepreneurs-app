import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fire from '../config/Fire';
import { Redirect } from 'react-router-dom';



// Components
import Header from '../components/Global/Header';
import Content from '../components/Global/Content';
import Footer from '../components/Global/Footer';

// Data
import items from '../Data/menu';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      redirect: false
    };
  
  }

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  componentWillMount() {
    fire.auth().onAuthStateChanged(users => {
        this.setState({ user: users })
        this.setRedirect();
        
    });
}

  componentDidMount() {
    this.authListener();
    
  }
  
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    } else {
      return <Redirect to='/' />
    }
  }



  authListener() {

    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        
        // history.pushState('/home')
        } else {
        this.setState({ user: null });
       
        // history.pushState('/')

      }
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="App">
      
        <Header
          title="Entrepreneurs App"
          items={items}
        />
        <Content body={children} />
        <Footer />      
      </div>
    );
  }

}

export default App;

