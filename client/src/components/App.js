import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Components
import Header from '../components/Global/Header';
import Content from '../components/Global/Content';
import Footer from '../components/Global/Footer';

// Data
import items from '../Data/menu';


class App extends Component {


  static propTypes = {
    children: PropTypes.object.isRequired
  };



  render() {
    const { children } = this.props;

    return (
      <div className="App">
      
        <Header
          title="Entrepreneurs App"
          items={items}
          user={this.props.user}
        />
        <Content body={children}/>
        <Footer />      
      </div>
    );
  }

}

export default App;

