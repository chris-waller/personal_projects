// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { traceLifecycle } from 'react-lifecycle-visualizer';

// custom components
import SearchTerm from './SearchTerm';

// sytle imports
// eslint-disable-next-line
import styles from './styles/search-term.scss';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchString: '',
      searchTerms: [],
    };

    this.searchBarChanged = this.searchBarChanged.bind(this);
    this.searchBoxKeyDown = this.searchBoxKeyDown.bind(this);
    this.searchTermClicked = this.searchTermClicked.bind(this);
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
      event.preventDefault();
      const { searchTerms } = this.state;
      const newSearchTerms = searchTerms.slice();
      const searchString = event.target.value;
      newSearchTerms.push(searchString);

      this.setState({
        searchString: '',
        searchTerms: newSearchTerms,
      }, () => {
        this.props.searchFilterChanged(`${searchString.trim()},`);
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
      this.props.searchFilterChanged(newSearchString);
    });
  }

  searchTermClicked(term) {
    const { searchTerms } = this.state;
    const newSearchTerms = searchTerms.slice();
    const index = newSearchTerms.indexOf(term);
    if (index > -1) {
      newSearchTerms.splice(index, 1);
    }
    this.setState({
      searchTerms: newSearchTerms,
    });
  }

  render() {
    // const { termClicked } = this.props;
    const { searchString, searchTerms } = this.state;
    return (
      <div>
        {
          Object.keys(searchTerms).length > 0
          // eslint-disable-next-line
          && searchTerms.map((searchItem) => {            
            return (
              <SearchTerm
                key={`search_term-${searchItem}`}
                name={searchItem}
                termClicked={this.searchTermClicked}
              />
            );
          })
        }
        <input
          type="text"
          // ref={this.searchBarRef}
          // className={styles.searchBox}
          placeholder="Search resume (use tab/enter to complete term)"
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
  // name: PropTypes.string.isRequired,
  // termClicked: PropTypes.func.isRequired,
};
