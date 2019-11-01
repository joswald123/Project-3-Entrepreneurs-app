// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fire from '../../config/Fire';
import { MdHome, MdDashboard, MdArrowDropDownCircle, MdStar, MdExtension, MdKeyboardArrowDown } from 'react-icons/md';
import { IoIosLogIn, IoIosContacts, IoIosCash, IoIosMail } from "react-icons/io";
import { GoProject, GoPencil, GoHeart } from "react-icons/go";
import {
    // UncontrolledTooltip,
    Collapse,
    Nav,
    Navbar,
    NavItem,
    NavLink as BSNavLink,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import bn from "../utils/bemnames";

// Assets
import './css/Header.css';


const navItems = [

    { to: '/login', name: 'Login', exact: false, Icon: IoIosLogIn },
    { to: '/signup', name: 'Sign Up', exact: false, Icon: GoPencil },
    { to: '/contact', name: 'Contact Us', exact: false, Icon: IoIosContacts },

];

const navComponents = [
    {
        to: '/dashboard',
        name: 'Dashboard',
        exact: false,
        Icon: MdDashboard
    },
    {
        to: '/projectpage',
        name: 'My Projects',
        exact: false,
        Icon: GoProject
    },
    {
        to: '/backerpage',
        name: 'Backer Page',
        exact: false,
        Icon: IoIosCash
    },
    {
        to: '/favoritespage',
        name: 'Favorites',
        exact: false,
        Icon: GoHeart
    },
    {
        to: '/mailbox',
        name: 'MailBox',
        exact: false,
        Icon: IoIosMail
    }
    

];


const bem = bn.create('sidebar');



class Header extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,

    };
    state = {
        isOpenComponents: false,
       
    };

    handleClick = name => () => {
        this.setState(prevState => {
            const isOpen = prevState[`isOpen${name}`];

            return {
                [`isOpen${name}`]: !isOpen,
            };
        });
    };


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

        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
            styles.color = "#8914A3"

        } else {
            timeOfDay = "night"
            styles.color = "#D90000"
        }

        return (

            <div className="Header topnav fixed-top">
                <Nav className="Nav">
                    
                    <h3 className="pl-5 pr-5">{title} </h3>


                    {navItems.map(({ to, name, exact, Icon }, index) => (
                        <NavItem key={index} className={bem.e('nav-item')}>
                            <BSNavLink
                                id={`navItem-${name}-${index}`}
                                className="text-uppercase"
                                tag={NavLink}
                                to={to}
                                activeClassName="active"
                                exact={exact}
                            >
                                <Icon className={bem.e('nav-item-icon')} />
                                <span className="">{name}</span>
                            </BSNavLink>
                        </NavItem>
                    ))}
                    <NavItem
                        className={bem.e('nav-item')}
                        onClick={this.handleClick('Components')}
                    >
                        <BSNavLink className={bem.e('nav-item-collapse')}>
                            <div className="float-right">
                                <MdExtension className={bem.e('nav-item-icon')} />
                                <span className="float-right text-uppercase">User Name</span>
                            </div>
                            <MdKeyboardArrowDown
                                className={bem.e('nav-item-icon')}
                                style={{
                                    padding: 3,
                                    transform: this.state.isOpenComponents
                                        ? 'rotate(0deg)'
                                        : 'rotate(-90deg)',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'transform',
                                }}
                            />
                        </BSNavLink>
                    </NavItem>
                    <Collapse className="Collapse" isOpen={this.state.isOpenComponents}>
                        {navComponents.map(({ to, name, exact, Icon }, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                                <BSNavLink 
                                    id={`navItem-${name}-${index}`}
                                    className="text-uppercase"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active"
                                    exact={exact}
                                >
                                    <Icon className={bem.e('nav-item-icon')} />
                                    <span className="">{name}</span>
                                </BSNavLink>
                            </NavItem>
                        ))}

                        <button className="logoutbtn" onClick={() => fire.auth().signOut()}>Sign Out</button>
                    </Collapse>

                

                </Nav>

            </div >


        );
    }
}

export default Header;