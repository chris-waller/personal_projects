// npm imports
import React from 'react';
import reactStringReplace from 'react-string-replace';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line
export function getHighlightedText(searchText, text) {  
  let highlightedText = text;
  const sanitizedSearchString = searchText.substring(0, searchText.length - 1);
  const searchTerms = sanitizedSearchString.split(',');

  searchTerms.forEach((searchTerm) => {
    highlightedText = reactStringReplace(highlightedText, searchTerm, (match) => (
      <span key={uuidv4()} style={{ background: 'red' }}>
        {match}
      </span>
    ));
  });

  return highlightedText;
}
