import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import FontAwesome from 'react-fontawesome';

export default class Contact extends Component {
  render () {
    return (
      <div className="page page--contact">
        <Helmet
          title={config.siteTitle}
        />
        <div className="contact--center">

          <div className="contact--title">
            Contact
          </div>

          <a href="#" target="_blank">
            <FontAwesome
              className="media--icon fb"
              name="facebook"
            /> 
          </a>

          <a href="#" target="_blank">
            <FontAwesome
              className="media--icon mail"
              name="envelope"
            /> 
          </a> 

        </div>   
      </div>
    );
  }
}

