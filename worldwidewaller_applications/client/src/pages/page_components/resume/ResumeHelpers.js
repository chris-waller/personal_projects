// npm imports
import React from 'react';
import reactStringReplace from 'react-string-replace';
import { v4 as uuidv4 } from 'uuid';

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

function processStringNode(text, searchTerms) {
  let highlightedText = text;
  let anyTextHighlighted = false;
  searchTerms.forEach((searchTerm) => {
    if (searchTerm.trim() !== '') {
      highlightedText = reactStringReplace(highlightedText, searchTerm, (match) => {
        anyTextHighlighted = true;
        return (
          <span key={uuidv4()} className={styles.highlight}>
            {match}
          </span>
        );
      });
    }
  });
  return {
    data: highlightedText,
    wasObjectHighlighted: anyTextHighlighted,
  };
}

/**
 *
 */
function highlightText(node, searchTerms) {
  const nodeType = typeof (node);
  const nodeToSearch = node;

  if (nodeType === 'string') {
    let highlightedText = nodeToSearch;
    const results = processStringNode(nodeToSearch, searchTerms);
    // get the results of the string highlight
    highlightedText = results.data;
    const { wasObjectHighlighted } = results;
    return {
      data: highlightedText,
      wasObjectHighlighted,
    };
  }

  if (nodeType === 'object') {
    const nodeObject = nodeToSearch;
    let wasObjectHighlighted = false;
    Object.keys(nodeObject).forEach((key) => {
      const results = highlightText(nodeObject[key], searchTerms);
      const highlightedText = results.data;
      wasObjectHighlighted = wasObjectHighlighted || results.wasObjectHighlighted;
      nodeObject[key] = highlightedText;
    });

    return {
      data: nodeObject,
      wasObjectHighlighted,
    };
  }
  throw new Error('Error parsing resume data');
}

// eslint-disable-next-line import/prefer-default-export
export function getHighlightedText(searchText, text) {
  let textToHighlight = text;
  const searchTerms = getSearchTerms(searchText);

  const results = highlightText(textToHighlight, searchTerms);
  textToHighlight = results.data;
  const { wasObjectHighlighted } = results;

  return {
    highlightedText: textToHighlight,
    wasTextUpdated: wasObjectHighlighted,
  };
}
