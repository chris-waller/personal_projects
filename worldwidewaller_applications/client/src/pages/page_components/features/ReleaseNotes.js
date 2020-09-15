// npm imports
import React, { Component } from 'react';

// custom components
import { ReleaseNotes as Content } from '~/resources/ReleaseNotes';

// css imports
import featureStyles from './styles/features.scss';

export default class ReleaseNotes extends Component {
  render() {
    return (
      <div className={featureStyles.upcomingFeaturesContainer}>
        {
          Content.map((releaseNote) => (
            <>
              <h5 key={`release_data_${releaseNote.releaseDate}`}>
                {releaseNote.releaseDate}
              </h5>
              <ul>
                {
                  releaseNote.details.map((detail) => (
                    <li>{detail}</li>
                  ))
                }
              </ul>
            </>
          ))
        }
      </div>
    );
  }
}
