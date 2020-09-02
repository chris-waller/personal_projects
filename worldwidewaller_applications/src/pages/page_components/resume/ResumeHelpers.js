// npm imports
import React from 'react';
import reactStringReplace from 'react-string-replace';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export function getHighlightedText(searchText, text) {
  let highlightedText = text;

  // sanitize the search string and split on comma-delited
  let sanitizedSearchString = searchText;
  if (sanitizedSearchString.substring(sanitizedSearchString.length) === ',') {
    sanitizedSearchString = sanitizedSearchString.substring(0, searchText.length - 1);
  }
  const searchTerms = sanitizedSearchString.split(',');

  searchTerms.forEach((searchTerm) => {
    if (searchTerm.trim() !== '') {
      highlightedText = reactStringReplace(highlightedText, searchTerm, (match) => (
        <span key={uuidv4()} style={{ background: 'red' }}>
          {match}
        </span>
      ));
    }
  });

  return highlightedText;
}
