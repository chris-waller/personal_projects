// npm imports
import React from 'react';
import reactStringReplace from 'react-string-replace';
import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash';

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
function highlightText(node, searchTerm) {
  console.log('\n\n');
  console.log('the search term', searchTerm);
  const nodeType = typeof (node);
  console.log('node type', nodeType);
  const nodeToSearch = node;
  console.log('The node', nodeToSearch);

  if (nodeType === 'symbol') {
    console.log('symbol found', nodeToSearch);
    return nodeToSearch;
  }

  if (nodeType === 'string') {
    return reactStringReplace(nodeToSearch, searchTerm, (match) => (
      <span key={uuidv4()} style={{ background: 'red' }}>
        {match}
      </span>
    ));
  }

  if (nodeType === 'object') {
    console.log('the object', nodeToSearch);
    const foo = cloneDeep(nodeToSearch);
    Object.keys(foo).forEach((key) => {
      const highligtedText = highlightText(foo[key], searchTerm);
      foo[key] = highligtedText;
    });
    return foo;
  }

  if (nodeType === 'symbol') {
    console.log('SYMBOL FOUND');
  }

  if (Array.isArray(nodeToSearch)) {
    nodeToSearch.forEach((entry) => highlightText(entry, searchTerm));
    return nodeToSearch;
  }

  console.log('*****************************ERRROR********************');
  console.log('The node type', nodeType);
  console.log('NEXT ITERATION', nodeToSearch);
  // return null;
  return nodeToSearch;
}

// eslint-disable-next-line import/prefer-default-export
export function getHighlightedText(searchText, text) {
  let textToHighlight = text;
  const searchTerms = getSearchTerms(searchText);

  searchTerms.forEach((searchTerm) => {
    if (searchTerm.trim() !== '') {
      textToHighlight = highlightText(textToHighlight, searchTerm);
      console.log('\n\n');
      console.log('The highlighted text', textToHighlight);
    }
  });

  return textToHighlight;
}
