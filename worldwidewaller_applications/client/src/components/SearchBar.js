// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { traceLifecycle } from 'react-lifecycle-visualizer';

// custom components
import SearchTerm from './SearchTerm';

// sytle imports
import styles from './styles/search-bar.scss';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchString: null,
      searchTerms: null,
    };

    this.searchBarChanged = this.searchBarChanged.bind(this);
    this.searchBoxKeyDown = this.searchBoxKeyDown.bind(this);
    this.deleteSearchTerm = this.deleteSearchTerm.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // first time component loaded but data being passed in from redux via parent
    if (state.searchString === null && props.searchString != null) {
      let searchTerms = [];
      let newSearchString = props.searchString;
      const index = newSearchString.lastIndexOf(',');
      if (index !== -1) {
        const searchTermsString = newSearchString.substring(0, index);
        searchTerms = searchTermsString.split(',');
        newSearchString = newSearchString.substring(index + 1);
      }
      return {
        searchString: newSearchString,
        searchTerms,
      };
    }

    // first time comoponent being loaded and no search string update from redux
    if (state.searchString === null) {
      return {
        searchString: '',
        searchTerms: [],
      };
    }

    // just a regular state update from SearchBar
    return {
      ...state,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.searchString === this.state.searchString
      && nextState.searchTerms === this.state.searchTerms) return false;
    return true;
  }

  searchBoxKeyDown(event) {
    // we really only care about the tab, enter, comma or space keys
    if (
      event.keyCode !== 9 // tab key key
      && event.keyCode !== 13 // enter key
      && event.keyCode !== 188 // comma key
      && event.keyCode !== 32 // space key
    ) return;

    // don't auto complete for whitespace
    if (event.target.value.length === 0) {
      event.preventDefault();
      return;
    }

    // user has pressed the tab/enter/comma key so we need to complete the current search term
    if (event.keyCode === 9 || event.keyCode === 13 || event.keyCode === 188) {
      const { searchTerms } = this.state;
      const newSearchTerms = searchTerms.slice();
      const searchString = event.target.value;

      if (newSearchTerms.includes(searchString)) {
        event.preventDefault();
        return;
      }
      newSearchTerms.push(searchString);

      let newSearchString = '';
      if (searchTerms.length > 0) {
        newSearchString = `${searchTerms.join(',')},`;
      }
      newSearchString = `${newSearchString}${searchString.trim()},`;

      this.setState({
        searchString: '',
        searchTerms: newSearchTerms,
      }, () => {
        const isNewTerm = true;
        this.props.searchFilterChanged(newSearchString, isNewTerm);
      });

      event.preventDefault();
    }
  }

  /**
   * User has changed the value of the search box.
   */
  searchBarChanged(event) {
    const searchString = event.target.value;
    const { searchTerms } = this.state;
    this.setState({
      searchString,
    }, () => {
      let newSearchString = '';
      if (Object.keys(searchTerms).length > 0) {
        newSearchString = `${searchTerms.join(',')},`;
      }
      newSearchString += searchString;
      const isNewTerm = false;
      this.props.searchFilterChanged(newSearchString, isNewTerm);
    });
  }

  deleteSearchTerm(term) {
    const { searchTerms } = this.state;
    const newSearchTerms = searchTerms.slice();
    const index = newSearchTerms.indexOf(term);
    if (index > -1) {
      newSearchTerms.splice(index, 1);
    }

    const { searchString } = this.state;
    let newSearchString = searchString;
    if (newSearchTerms.length > 0) {
      newSearchString = `${newSearchTerms.join(',')},${searchString}`;
    }

    this.setState({
      searchTerms: newSearchTerms,
      searchString,
    }, () => {
      this.props.searchFilterChanged(newSearchString);
    });
  }

  render() {
    const { searchString, searchTerms } = this.state;
    return (
      <div className={styles.searchBar}>
        <div className={styles.searchBarItems}>
          {
            Object.keys(searchTerms).length > 0
            && searchTerms.map((searchItem) => {
              return (
                <SearchTerm
                  key={`search_term-${searchItem}`}
                  name={searchItem}
                  termClicked={this.deleteSearchTerm}
                />
              );
            })
          }
        </div>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search resume (use tab/enter to complete term)"
          maxLength={50}
          value={searchString}
          onChange={this.searchBarChanged}
          onKeyDown={this.searchBoxKeyDown}
        />
      </div>
    );
  }
}

export default traceLifecycle(SearchBar);

SearchBar.propTypes = {
  searchFilterChanged: PropTypes.func.isRequired,
  searchString: PropTypes.string,
};

SearchBar.defaultProps = {
  searchString: null,
};
