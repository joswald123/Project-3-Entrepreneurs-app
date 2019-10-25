// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fire from '../../config/Fire';

// Assets
import './css/Header.css';


class Header extends Component {
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };
    
    handleLogout() {
        fire.auth().signOut()
            .then(result => console.log(` Ha Salido`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    render() {

        const { title, items } = this.props;

        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        const styles = {
            fontSize: 20
        }

            if (hours < 12) {
                timeOfDay = "morning"
                styles.color = "#04756F"

            } else if (hours >= 12 && hours < 17){
                timeOfDay = "afternoon"
                styles.color = "#8914A3"

            } else {
                timeOfDay = "night"
                styles.color = "#D90000"
            }

        return (

            <div className="Header topnav fixed-top">

                <h1>{title}</h1>

                <ul className="Menu">
                    {
                        items && items.map(
                            (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)
                            
                    }
                    
                </ul>

                <h3 style={styles}>Good {timeOfDay}!</h3>

                <Link className="logoutbtn mt-2" onClick={this.handleLogout}>Logout</Link>
                
            </div>

             
        );
    }
}

export default Header;