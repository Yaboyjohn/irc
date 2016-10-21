import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Home extends Component {
  render () {
    return (
      <div className="page page--home">
        <Helmet
          title={config.siteTitle}
        />
        <h1 className="page__title">
          International Relations Council
        </h1>
        <h3 className="page--description">
          @ Berkeley
        </h3>
      </div>
    );
  }
}
