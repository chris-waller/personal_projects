// npm imports
import React, { Component } from 'react';

// custom components
import { UpcomingFeatures as Features } from '~/resources/ReleaseNotes';

// css imports
import featureStyles from './styles/features.scss';

export default class UpcomingFeatures extends Component {
  render() {
    let counter = 0;
    return (
      <div className={featureStyles.upcomingFeaturesContainer}>
        {
          Features.map((feature) => {
            counter += 1;
            return (
              <div key={`upcoming-features-div-${counter}`}>
                <ul>
                  <li key={`upcoming-features-li-${counter}`}>{feature}</li>
                </ul>
              </div>
            );
          })
        }
      </div>
    );
  }
}
