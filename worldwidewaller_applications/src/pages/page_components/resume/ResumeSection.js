// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { cloneDeep } from 'lodash';

// custom components
import Collapsible from '~/components/Collapsible';
// import { getHighlightedText } from './ResumeHelpers';
import Summary from './Summary2';

// styles imports
// import styles from './styles/summary.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ResumeSection extends Component {
  pageText = Summary.pageText;

  constructor() {
    super();
    this.state = {
      // highligtedText: null,
    };
  }

  /*
  static getDerivedStateFromProps(props, state) {
    const { searchText } = props;
    const textToHighlight = cloneDeep(this.pageText);
    const results = getHighlightedText(searchText, textToHighlight);
    const highligtedText = results.highlightedText;
    const { wasTextUpdated } = results;

    let { isOpen } = props;
    if (wasTextUpdated) {
      isOpen = true;
    } else if (state.isOpen) {
      isOpen = true;
    }

    return {
      highligtedText,
      wasTextUpdated,
      isOpen,
    };
  }
  */

  render() {
    const {
      children,
      isOpen,
      sectionName,
      handleTriggerClick,
      trigger,
    } = this.props;

    return (
      <Collapsible
        key={`Section-${trigger}`}
        trigger={trigger}
        isOpen={isOpen}
        sectionName={sectionName}
        handleTriggerClick={handleTriggerClick}
      >
        { children }
      </Collapsible>
    );
  }
}

export default ResumeSection;

ResumeSection.propTypes = {
  trigger: PropTypes.string.isRequired,
  // searchText: PropTypes.string,
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};

ResumeSection.defaultProps = {
  // searchText: '',
};
