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
          <Link
            to={prefixLink('/')}
          >
            Home
          </Link>

          <Link
            to={prefixLink('/about/')}
          >
            About
          </Link>

          <Link
            to={prefixLink('/events/')}
          >
            Events
          </Link>

          <Link
            to={prefixLink('/review/')}
          >
            Review
          </Link>

          <Link
            to={prefixLink('/contact/')}
          >
            Contact
          </Link>
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

