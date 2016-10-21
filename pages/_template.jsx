import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

require('css/_index.scss');
export default class Template extends Component {
  render () {
    return (
      <div>
        <Headroom>
          <div className="navbar">
            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/')} className="navbar__link"
              >
                Home
              </Link>
            </div>
            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/about/')} className="navbar__link"
              >
                About
              </Link>
            </div>
            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/events/')} className="navbar__link"
              >
                Events
              </Link>
            </div>
            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/review/')} className="navbar__link"
              >
                Review
              </Link>
            </div>
            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/contact/')} className="navbar__link"
              >
                Contact
              </Link>
            </div>
          </div>
        </Headroom>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.any
};
