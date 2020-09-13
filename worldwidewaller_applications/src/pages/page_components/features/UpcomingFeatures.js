// npm imports
import React, { Component } from 'react';

// custom components
import { UpcomingFeatures } from '~/resources/ReleaseNotes';

// css imports
import featureStyles from './styles/features.scss';

export default class UpcomngFeatures extends Component {
  render() {
    return (
      <div className={featureStyles.upcomingFeaturesContainer}>
        {
          UpcomingFeatures.map((feature) => (
            <>
              <ul>
                <li>{feature}</li>
              </ul>
            </>
          ))
        }
      </div>
    );
  }
}
