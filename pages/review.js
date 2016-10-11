import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Review extends Component {
  render () {
    return (
      <div className="page page--review">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          Review
        </h1>
      </div>
    );
  }
}

