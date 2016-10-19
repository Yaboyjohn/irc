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
        <div className="events__title">
          Events
        </div>

        <div className="events__content">
          <div className="content__section">
            <div className="events__col--1">Upcoming Events</div>
            <div className="events__col--2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid voluptate soluta dolorum dignissimos in nostrum eum recusandae similique, at facilis ad quaerat rerum magnam commodi obcaecati, voluptas magni culpa quidem.
            </div>
          </div>
          <div className="content__section">          
            <div className="events__col--1">Case Competitions</div>
            <div className="events__col--2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid voluptate soluta dolorum dignissimos in nostrum eum recusandae similique, at facilis ad quaerat rerum magnam commodi obcaecati, voluptas magni culpa quidem.
              </div>
          </div>
          <div className="content__section">
            <div className="events__col--1">Member Events</div>
            <div className="events__col--2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid voluptate soluta dolorum dignissimos in nostrum eum recusandae similique, at facilis ad quaerat rerum magnam commodi obcaecati, voluptas magni culpa quidem.
              </div>
          </div>

        </div>

      </div>
    );
  }
}

