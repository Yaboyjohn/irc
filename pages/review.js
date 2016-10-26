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
        <div className="page__title">
          IRC Review
        </div>
        <div className="page__content">
          <div className="col col--1">Application Guidelines</div>
          <div className="col col--2">
            <div className="col--2__section">
              The International Relations Review of Berkeley, a journal created by the International Relations Council of Berkeley, seeks to foster and showcase student writing regarding global politics and issues, both contemporary and historical. The Review is published semesterly, and is currently accepting submissions for the Fall 2016 theme as well as other issues relevant to current affairs. 
            </div>
            <div className="col--2__title">
              Fall 2016 Call for Submissions
            </div>
            <div className="col--2__section">
              <p>The theme for the Fall 2016 edition is “Changing Landscapes.” Given prominent global events such as the rise of ISIS, environmental degradation, and the shifting demographics of nations around the world, it is imperative to explore and understand these issues in order to more effectively address them. How has the world’s landscape evolved in recent years? What are the implications of these changes? How should the international community approach the issue(s) you discuss?</p>
              <p>Please see below for submission guidelines, and reach out to the Review’s Editor-in-Chief, Aurora Ling, at auroraling@berkeley.edu with any questions or inquiries. All members of the Berkeley community are encouraged to apply, regardless of their affiliation with IRC member organizations. We look forward to reading your entries! </p>
            </div>
            <div className="col--2__title">
              Submission Rules
            </div>
            <div className="col--2__section">
              <ol>
                <li>Submit paper to ircofberkeley@gmail.com by Sunday, November 13th, 2016 at 8:00 p.m. PST.</li>
                <li>Articles must be original works.</li>
                <li>Articles must not have been previously published.</li>
                <li>Articles must be relevant to the field of international relations.</li>
                <li>Articles should pertain to the provided prompt. However, we welcome for review other issues relevant to current affairs.</li>
              </ol>
            </div>
            <div className="col--2__title">
              Submission Guidelines
            </div>
            <div className="col--2__section">
              <ol>
                <li>Articles must be between 2,000 and 5,000 words.</li>
                <li>Articles must have 1-inch margins, 12-point Times New Roman font, and be double-spaced.</li>
                <li>Articles must have a full bibliography and footnotes or endnotes according to the Chicago Manual of Style, 15th or 16th edition.</li>
                <li>Include a 150- to 200-word abstract, brief biography, and cover page (name, email, and title of the article).</li>
                <li>Submit in Microsoft Word .docx format.</li>
              </ol>
            </div>
          </div>
          
          <div className="col col--1">Archives</div>
          <div className="col col--2">
            <div className="col--2__section">
              Check back next semester to read archives of the International Relations Review.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

