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
        <div className="review__title">
          IRC Review
        </div>
        <div className="review__content">
          <div className="col col--1">Application Guidelines</div>
          <div className="col col--2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</div>
          <div className="col col--1">Archives</div>
          <div className="col col--2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</div>
        </div>
      </div>
    );
  }
}

