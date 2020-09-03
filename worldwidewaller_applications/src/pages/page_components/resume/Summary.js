// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';

// custom components
import Collapsible from '~/components/Collapsible';
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
  li3: 'Full & constant SDLC exposure throughout a 9+ year career',
};

// eslint-disable-next-line react/prefer-stateless-function
class Summary extends Component {
  constructor() {
    super();
    this.state = {
      highligtedText: null,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const { searchText } = nextProps;
    const text = cloneDeep(pageText);

    Object.keys(text).forEach((key) => {
      const result = getHighlightedText(searchText, text[key]);
      const highligtedText = result.highlightedText;
      text[key] = highligtedText;
    });
    return {
      highligtedText: text,
    };
  }

  render() {
    const { highligtedText } = this.state;
    const { isOpen, sectionName, handleTriggerClick } = this.props;
    return (
      <Collapsible
        key="Summary Section"
        trigger="Career Summary"
        isOpen={isOpen}
        sectionName={sectionName}
        handleTriggerClick={handleTriggerClick}
      >
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
      </Collapsible>
    );
  }
}

export default Summary;

Summary.propTypes = {
  searchText: PropTypes.string,
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};

Summary.defaultProps = {
  searchText: '',
};
