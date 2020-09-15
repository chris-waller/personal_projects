// npm imports
import React, { Component } from 'react';

// custom components
import { ReleaseNotes as Content } from '~/resources/ReleaseNotes';

// css imports
import featureStyles from './styles/features.scss';

export default class ReleaseNotes extends Component {
  render() {
    let counterDiv = 0;
    let counterLi = 0;
    return (
      <div className={featureStyles.upcomingFeaturesContainer}>
        {
          Content.map((releaseNote) => {
            counterDiv += 1;
            return (
              <div key={`release_note-div-${counterDiv}`}>
                <h5>
                  {releaseNote.releaseDate}
                </h5>
                <ul>
                  {
                    releaseNote.details.map((detail) => {
                      counterLi += 1;
                      return (
                        <li key={`release_note-li-${counterLi}`}>{detail}</li>
                      );
                    })
                  }
                </ul>
              </div>
            );
          })
        }
      </div>
    );
  }
}
