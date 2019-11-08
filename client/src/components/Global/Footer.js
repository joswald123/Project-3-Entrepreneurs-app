// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';


class Footer extends Component {

    static propTypes = {
        copyright: PropTypes.string
    };

    render() {
        const { copyright = "&copy; Entreperneurs App, React 2019" } = this.props;

        return (
            <div>
                
                <div className="Footer sticky-footer">
                    <p dangerouslySetInnerHTML={{ __html: copyright }} />

                </div>

            </div>

        );
    }
}

export default Footer;