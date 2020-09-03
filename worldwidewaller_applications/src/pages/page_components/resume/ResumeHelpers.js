// npm imports
import React from 'react';
import reactStringReplace from 'react-string-replace';
import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash';

// style imports
import styles from './resume_helpers.scss';

function getSearchTerms(searchText) {
  // sanitize the search string and split on comma-delimited
  let textToSanitize = searchText;
  if (textToSanitize.substring(textToSanitize.length) === ',') {
    textToSanitize = textToSanitize.substring(0, textToSanitize.length - 1);
  }
  return textToSanitize.split(',');
}

/**
 * Highlight text node
 * @param {*} node
 * @param {*} searchTerm
 */
function highlightText(node, searchTerms) {
  const nodeType = typeof (node);
  const nodeToSearch = node;

  if (nodeType === 'string') {
    let highlightedText = nodeToSearch;
    searchTerms.forEach((searchTerm) => {
      if (searchTerm.trim() !== '') {
        highlightedText = reactStringReplace(highlightedText, searchTerm, (match) => (
          <span key={uuidv4()} className={styles.highlight}>
            {match}
          </span>
        ));
      }
    });

    return highlightedText;
  }

  if (nodeType === 'object' && nodeToSearch !== null) {
    const nodeObject = cloneDeep(nodeToSearch);
    Object.keys(nodeObject).forEach((key) => {
      const highligtedText = highlightText(nodeObject[key], searchTerms);
      nodeObject[key] = highligtedText;
    });
    return nodeObject;
  }

  if (Array.isArray(nodeToSearch)) {
    nodeToSearch.forEach((entry) => highlightText(entry, searchTerms));
    return nodeToSearch;
  }

  return nodeToSearch;
}

// eslint-disable-next-line import/prefer-default-export
export function getHighlightedText(searchText, text) {
  let textToHighlight = text;
  const searchTerms = getSearchTerms(searchText);

  textToHighlight = highlightText(textToHighlight, searchTerms);
  const textUpdated = true;

  return {
    highlightedText: textToHighlight,
    textUpdated,
  };
}
