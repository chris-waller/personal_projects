// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { traceLifecycle } from 'react-lifecycle-visualizer';

/* eslint-disable2 */

// custom components
import { getHighlightedText } from './ResumeHelpers';

// styles imports
import styles from './styles/summary.scss';

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
  p3: `Requirements gathering, stakeholder demos, acceptance-test preparation,
   commissioning, troubleshooting`,
  li3: 'Full & constant SDLC expsosure througout a 9+ year career',
};

// eslint-disable-next-line react/prefer-stateless-function
class Summary extends Component {
  /**
   * Constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      highligtedText: pageText,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.updateSection) {
      const { searchText } = nextProps;
      const text = pageText;

      console.log('starting');

      Object.keys(text).forEach((key) => {
        const highligtedText = getHighlightedText(searchText, text[key]);
        text[key] = highligtedText;
      });
      return {
        highligtedText: text,
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps) {
    console.log('Summary should update?', nextProps.updateSection);
    return nextProps.updateSection;
  }

  render() {
    console.log('Rendering Summary');
    const { highligtedText } = this.state;
    return (
      <div className={styles.section}>
        <p>
          {highligtedText.overview}
        </p>
        <ul className={styles.list}>
          <li>
            <p className={styles.header}>{highligtedText.p1}</p>
            <ul>
              <li>{highligtedText.li1}</li>
            </ul>
          </li>
          <li>
            <p className={styles.header}>{highligtedText.p2}</p>
            <ul>
              <li>{highligtedText.li2}</li>
            </ul>
          </li>
          <li>
            <p className={styles.header}>{highligtedText.p3}</p>
            <ul>
              <li>{highligtedText.li3}</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default traceLifecycle(Summary);

Summary.propTypes = {
  searchText: PropTypes.string,
  updateSection: PropTypes.bool.isRequired,
};

Summary.defaultProps = {
  searchText: '',
};
