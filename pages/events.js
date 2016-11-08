import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class Events extends Component {
  constructor(props) {
    super(props);
  }

  scroll (target) {
    scroller.scrollTo(target, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -20
    })
  }

  render () {
    return (
      <div className="page page--events">
        <Helmet
          title={config.siteTitle}
        />
        <div className="page__title">
          Events
        </div>

        <div className="page__nav">
          <span className="page__nav--link" onClick={this.scroll.bind(this, "upcoming")}>Upcoming</span>
          <span className="page__nav--pipe"> | </span>
          <span className="page__nav--link" onClick={this.scroll.bind(this, "case")}>Case Competitions</span>
          <span className="page__nav--pipe"> | </span>
          <span className="page__nav--link" onClick={this.scroll.bind(this, "member")}>For Members</span>
        </div>
        <div className="page__content">
            <Element name="upcoming"></Element>
            <div className="col col--1">Upcoming Events</div>
            <div className="col col--2">
              <div className="col--2__title">November 13th - Submission deadline for the International Relations Review of Berkeley.</div>
              <div className="col--2__section">Click <a href={ prefixLink(/review/) }>here</a> for more information about the submission process.
              </div>
            </div>
            <Element name="case"></Element>
            <div className="col col--1">Case Competitions</div>
            <div className="col col--2">
              <div className="col--2__title">November 6th - IRC Case Competition</div>
              <div className="col--2__section">The IRC will be hosting its first case competition on November 6th, from 11AM-4PM.
              </div>
              <div className="col--2__section">The case competition offers interdisciplinary teams of Berkeley students to develop innovative solutions to the most pressing and significant problems in international relations and developmental politics. The case competition will engage UC Berkeley students on their creativity and analytical skills in a format not commonly found in international relations while also providing increased professional exposure for Berkeley’s international relations programs and the type of skills imparted on their students in an untraditional geographic location for international relations and development politics.
              </div>
            </div>
            <Element name="member"></Element>
            <div className="col col--1 member">Member Events</div>
            <div className="col col--2">
              <div className="col--2__title">November 20th - BayMUN</div>
              <div className="col--2__section">BayMUN is a one day MUN conference hosted by UC Berkeley Model United Nations, and is open all members of the Berkeley campus community! Learn more about BayMUN <a href="http://club.ucbmun.org/baymun.php">here</a>.
              </div>
              <div className="col--2__title">March 2-5th - UC Berkeley Model United Nations Conference</div>
              <div className="col--2__section">UCBMUN will be hosting the twenty-first session of its collegiate conference from March 2-5th, 2017 at the Hilton Financial District, San Francisco, featuring 500 delegates from universities across the world. Learn more about the conference <a href="https://ucbmun.herokuapp.com/">here</a>.
              </div>
              <div className="col--2__title">March 3-5th - Berkeley Model United Nations Conference</div>
              <div className="col--2__section">BMUN will be hosting the sixty-fifth session of its high school conference from March 3-5th, 2017 on the Berkeley campus, hosting over 1,600 students from across the world. Learn more about the conference <a href="http://www.bmun.org/">here</a>.
              </div>
            </div>
        </div>

      </div>
    );
  }
}
