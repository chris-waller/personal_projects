// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// sytle imports
import styles from './styles/search-term.scss';

class SearchTerm extends Component {
  render() {
    const { name/* , termClicked */ } = this.props;
    return (
      <div
        className={styles.searchTerm}
        // onClick={termClicked}
      >
        {name}
      </div>
    );
  }
}

export default SearchTerm;

SearchTerm.propTypes = {
  name: PropTypes.string.isRequired,
  // termClicked: PropTypes.func.isRequired,
};
