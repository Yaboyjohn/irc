import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import classNames from 'classnames';

require('css/_index.scss');

const navbarHeight = 54;

export default class Template extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this._handleHamburger = this._handleHamburger.bind(this);
  }

  _handleHamburger(e) {
    this.setState({
      open: !this.state.open
    });
  }

  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            maxHeight: navbarHeight
          }}>
            <div className={classNames("navbar", {
              "navbar--open": this.state.open
            })}>
              <div
                className={classNames("navbar__hamburger", {
                  "navbar__hamburger--active": this.state.open
                })}
                onClick={this._handleHamburger}
              >
                <div className="hamburger__bar bar--1"></div>
                <div className="hamburger__bar bar--2"></div>
              </div>
              <div className="navbar__link--wrapper">
                <Link
                  to={prefixLink('/')}
                  className="navbar__link"
                  onClick={this._handleHamburger}
                >
                  Home
                </Link>
                <Link
                  to={prefixLink('/about/')}
                  className="navbar__link"
                  onClick={this._handleHamburger}
                >
                  About
                </Link>
                <Link
                  to={prefixLink('/events/')}
                  className="navbar__link"
                  onClick={this._handleHamburger}
                >
                  Events
                </Link>
                <Link
                  to={prefixLink('/review/')}
                  className="navbar__link"
                  onClick={this._handleHamburger}
                >
                  Review
                </Link>
                <Link
                  to={prefixLink('/contact/')}
                  className="navbar__link"
                  onClick={this._handleHamburger}
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
