// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// style imports
import styles from './styles/technical_skills.scss';

/* eslint-disable max-len, react/prefer-stateless-function */
export default class TechnicalSkills extends Component {
  /**
   * Highlites specified text.
   */
  getHighlightedText = (text) => this.props.getHighlightedText(text)

  /**
   * Render.
   */
  render() {
    const pageText = {
      languages: 'JavaScript, CSS/SCSS, HTML5, SQL, Java 8, Ruby on Rails, PHP, XML, YML, C#',
      frameWorks: 'ReactJs, redux, AJAX, JSON, flex, bootsrap, npm, webpack, jQuery, leaflet, mapbox, highcharts, recaptcha, OATH2, Java DropWizard, .NET, Crystal Reports, SSRS',
      web: 'RESTful/SOAP web services, websockets, SSL certificates, domain registration',
      deployment: 'Amazon Web Services (AWS), docker, Jenkins, Maven',
      database: 'SQL Server, MySQL, Postgres, DynamoDB, migrations, replication, optimization, scripting',
      source: 'GIT, GitLab, Perforce, Microsoft Visual Source Safe, SVN',
      os: 'Windows, Windows Server, Linux',
      testing: 'J Unit, Mockito, Cucumber, Selenium',
    };
    Object.keys(pageText).forEach((key) => {
      const highligtedText = this.getHighlightedText(pageText[key]);
      pageText[key] = highligtedText;
    });

    return (
      <div className={styles.container}>
        <p className={styles.summary}>
          All listed skills have been used professionally to develop and deliver production-ready web applications
        </p>
        <Section headerText="Languages:" skills={pageText.languages} />
        <Section headerText="Frameworks & Libraries:" skills={pageText.frameWorks} />
        <Section headerText="Web Development:" skills={pageText.web} />
        <Section headerText="Deployment" skills={pageText.deployment} />
        <Section headerText="Database:" skills={pageText.database} />
        <Section headerText="Source Control:" skills={pageText.source} />
        <Section headerText="Operating Systems:" skills={pageText.os} />
        <Section headerText="Code Testing:" skills={pageText.testing} />
      </div>
    );
  }
}

TechnicalSkills.propTypes = {
  getHighlightedText: PropTypes.func.isRequired,
};

class Section extends Component {
  render() {
    return (
      <div className={styles.row}>
        <p className={styles.heading}>
          {this.props.headerText}
        </p>
        <p className={styles.skills}>
          {this.props.skills}
        </p>
      </div>
    );
  }
}
Section.propTypes = {
  headerText: PropTypes.string.isRequired,
  // eslint-disable-next-line
  skills: PropTypes.array.isRequired,
};
