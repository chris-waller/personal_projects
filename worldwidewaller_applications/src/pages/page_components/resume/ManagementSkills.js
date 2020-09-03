// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

// custom components
import Collapsible from '~/components/Collapsible';
import { getHighlightedText } from './ResumeHelpers';

// style imports
import styles from './styles/management_skills.scss';

const pageText = {
  li1: 'Onboard new team members (design docs, dev/build environment setups)',
  li2: 'Interviews for management, senior, intermediate, junior and co-op positions',
  li3: `Interface with individuals from a variety of different industries, with various degrees of
   technical background: UI/UX designers, testers, technical support, marketing, legal,
    customers, partners, end-users`,
  li4: 'Agile development as a preferred project methodology',
  li5: 'Scope management, including managing the dreaded scope-creep',
  li6: 'Project-based meeting organization (local or remote)',
  li7: 'Story creation, tracking & estimates using JIRA',
  li8: 'Code reviews, build checks, production deployment backup & installation',
};

// eslint-disable-next-line react/prefer-stateless-function
class ManagementSkills extends Component {
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
        key={uuidv4()}
        trigger="Management Skills"
        isOpen={isOpen}
        sectionName={sectionName}
        handleTriggerClick={handleTriggerClick}
      >
        <div className={styles.container}>
          <ul className={styles.list}>
            <p className={styles.header}>People Management:</p>
            <li>{highligtedText.li1}</li>
            <li>{highligtedText.li2}</li>
            <li>{highligtedText.li3}</li>
          </ul>
          <ul className={styles.list}>
            <p className={styles.header}>Project Management:</p>
            <li>{highligtedText.li4}</li>
            <li>{highligtedText.li5}</li>
            <li>{highligtedText.li6}</li>
            <li>{highligtedText.li7}</li>
            <li>{highligtedText.li8}</li>
          </ul>
        </div>
      </Collapsible>
    );
  }
}

export default ManagementSkills;

ManagementSkills.propTypes = {
  searchText: PropTypes.string,
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};

ManagementSkills.defaultProps = {
  searchText: '',
};
