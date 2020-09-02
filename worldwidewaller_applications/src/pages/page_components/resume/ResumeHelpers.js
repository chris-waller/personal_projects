// npm imports
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import reactStringReplace from 'react-string-replace';

// eslint-disable-next-line
export function getHighlightedText(searchText, text) {  
  let highlightedText = text;
  const searchTerms = searchText.split(',');
  console.log('search text2', searchText);

  searchTerms.forEach((searchTerm) => {
    highlightedText = reactStringReplace(
      highlightedText,
      searchTerm,
      (match) => {
        console.log('here');
        return (
          <span key={uuidv4()} style={{ background: 'red' }}>
            {match}
          </span>
        );
      },
    );
  });

  return highlightedText;
}
