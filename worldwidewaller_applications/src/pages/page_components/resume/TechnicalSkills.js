// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';

// custom components
import { getHighlightedText } from './ResumeHelpers';

// style imports
import styles from './styles/technical_skills.scss';

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

// eslint-disable-next-line react/prefer-stateless-function
class TechnicalSkills extends Component {
  constructor() {
    super();
    this.state = {
      highligtedText: null,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const { searchText } = nextProps;
    const text = cloneDeep(pageText);

    Object.keys(text).forEach((key) => {
      const result = getHighlightedText(searchText, text[key]);
      const highligtedText = result.highlightedText;
      text[key] = highligtedText;
    });
    return {
      highligtedText: text,
    };
  }

  /**
   * Render.
   */
  render() {
    const { highligtedText } = this.state;
    return (
      <div className={styles.container}>
        <p className={styles.summary}>
          {`
            All listed skills have been used professionally to develop and deliver
             production-ready web applications
          `}
        </p>
        <Section headerText="Languages:" skills={highligtedText.languages} />
        <Section headerText="Frameworks & Libraries:" skills={highligtedText.frameWorks} />
        <Section headerText="Web Development:" skills={highligtedText.web} />
        <Section headerText="Deployment:" skills={highligtedText.deployment} />
        <Section headerText="Database:" skills={highligtedText.database} />
        <Section headerText="Source Control:" skills={highligtedText.source} />
        <Section headerText="Operating Systems:" skills={highligtedText.os} />
        <Section headerText="Code Testing:" skills={highligtedText.testing} />
      </div>
    );
  }
}

export default TechnicalSkills;

TechnicalSkills.propTypes = {
  searchText: PropTypes.string,
};

TechnicalSkills.defaultProps = {
  searchText: '',
};

// eslint-disable-next-line react/prefer-stateless-function
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
  // eslint-disable-next-line react/forbid-prop-types
  skills: PropTypes.node,
};

Section.defaultProps = {
  skills: null,
};
