// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// custom components
import Collapsible from '~/components/Collapsible';

// style imports
import styles from './styles/management_skills.scss';

class ManagementSkills extends Component {
  static pageText = {
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

  render() {
    const highlightedText = this.props.pageText;
    const { isOpen, sectionName, handleTriggerClick } = this.props;
    return (
      <Collapsible
        key="Management Skills Section"
        trigger="Management Skills"
        isOpen={isOpen}
        sectionName={sectionName}
        handleTriggerClick={handleTriggerClick}
      >
        <div className={styles.managementContainer}>
          <ul>
            <span>People Management:</span>
            <li>{highlightedText.li1}</li>
            <li>{highlightedText.li2}</li>
            <li>{highlightedText.li3}</li>
          </ul>
          <ul>
            <span>Project Management:</span>
            <li>{highlightedText.li4}</li>
            <li>{highlightedText.li5}</li>
            <li>{highlightedText.li6}</li>
            <li>{highlightedText.li7}</li>
            <li>{highlightedText.li8}</li>
          </ul>
        </div>
      </Collapsible>
    );
  }
}

export default ManagementSkills;

ManagementSkills.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageText: PropTypes.object.isRequired,
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};
