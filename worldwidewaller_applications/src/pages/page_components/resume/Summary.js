// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// styles imports
import styles from './styles/summary.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Summary extends Component {
  render() {
    const pageText = {
      overview: `8+ years experience designing, developing, delivering and maintaining
       dynamic, cross-platform web applications. 6+ years experience successfully working
       with both internal and external stakeholders to define project scope and deliverables.
       5+ years experience in tech lead roles with a proven track record of delivering results.
       5+ years experience deploying production-ready cloud-based web applications in AWS,
        Linux or Windows environments.`,
      p1: 'Scalable, cross-platform web design, development & deployment',
      li1: 'ReactJs, JavaScript, CSS, HTML5, Core Java expertise',
      p2: 'Database administration, configuration & development',
      li2: `SQL expertise including stored procedures, transactions, scheduled jobs,
       database backup & replication`,
      p3: `SQL expertise including stored procedures, transactions, scheduled jobs, database
       backup & replication`,
      li3: 'Full & constant SDLC expsosure througout a 9+ year career',
    };
    Object.keys(pageText).forEach((key) => {
      const highligtedText = this.props.getHighlightedText(pageText[key]);
      pageText[key] = highligtedText;
    });

    return (
      <div className={styles.section}>
        <p>
          {pageText.overview}
        </p>
        <ul className={styles.list}>
          <li>
            <p className={styles.header}>{pageText.p1}</p>
            <ul>
              <li>{pageText.li1}</li>
            </ul>
          </li>
          <li>
            <p className={styles.header}>{pageText.p2}</p>
            <ul>
              <li>{pageText.li2}</li>
            </ul>
          </li>
          <li>
            <p className={styles.header}>{pageText.p3}</p>
            <ul>
              <li>{pageText.li3}</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

Summary.propTypes = {
  getHighlightedText: PropTypes.func.isRequired,
};
