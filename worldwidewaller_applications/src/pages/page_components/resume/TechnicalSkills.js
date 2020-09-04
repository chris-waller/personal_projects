// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// custom components
import Collapsible from '~/components/Collapsible';

// style imports
import styles from './styles/technical_skills.scss';

class TechnicalSkills extends Component {
  static pageText = {
    languages: 'JavaScript, CSS/SCSS, HTML5, SQL, Java 8, Ruby on Rails, PHP, XML, YML, C#',
    frameWorks: 'ReactJs, redux, AJAX, JSON, flex, bootsrap, npm, webpack, jQuery, leaflet, mapbox, highcharts, recaptcha, OATH2, Java DropWizard, .NET, Crystal Reports, SSRS',
    web: 'RESTful/SOAP web services, websockets, SSL certificates, domain registration',
    deployment: 'Amazon Web Services (AWS), docker, Jenkins, Maven',
    database: 'SQL Server, MySQL, Postgres, DynamoDB, migrations, replication, optimization, scripting',
    source: 'GIT, GitLab, Perforce, Microsoft Visual Source Safe, SVN',
    os: 'Windows, Windows Server, Linux',
    testing: 'J Unit, Mockito, Cucumber, Selenium',
  };

  /**
   * Render.
   */
  render() {
    const highlightedText = this.props.pageText;
    const { isOpen, sectionName, handleTriggerClick } = this.props;
    return (
      <Collapsible
        key="Technical Skills Section"
        trigger="Technical Skills"
        isOpen={isOpen}
        sectionName={sectionName}
        handleTriggerClick={handleTriggerClick}
      >
        <div className={styles.container}>
          <p className={styles.summary}>
            {`
              All listed skills have been used professionally to develop and deliver
              production-ready web applications
            `}
          </p>
          <Section headerText="Languages:" skills={highlightedText.languages} />
          <Section headerText="Frameworks & Libraries:" skills={highlightedText.frameWorks} />
          <Section headerText="Web Development:" skills={highlightedText.web} />
          <Section headerText="Deployment:" skills={highlightedText.deployment} />
          <Section headerText="Database:" skills={highlightedText.database} />
          <Section headerText="Source Control:" skills={highlightedText.source} />
          <Section headerText="Operating Systems:" skills={highlightedText.os} />
          <Section headerText="Code Testing:" skills={highlightedText.testing} />
        </div>
      </Collapsible>
    );
  }
}

export default TechnicalSkills;

TechnicalSkills.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageText: PropTypes.object.isRequired,
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
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
  skills: PropTypes.node,
};

Section.defaultProps = {
  skills: null,
};
