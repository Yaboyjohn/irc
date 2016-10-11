import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Events extends Component {
  render () {
    return (
      <div className="page page--events">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          Events
        </h1>
      </div>
    );
  }
}

