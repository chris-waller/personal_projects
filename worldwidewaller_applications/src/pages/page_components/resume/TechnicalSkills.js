// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// style imports
import styles from './styles/technical_skills.scss';

/* eslint-disable max-len, react/prefer-stateless-function */
class TechnicalSkills extends Component {
  /**
   * Highlites specified text.
   */
  getHighlightedText = (text) => {
    const { searchText } = this.props;
    // Split on highlight term and include term into parts, ignore case
    const terms = text.split(', ');

    return (
      <span>
        { terms.map((term) => {
          const highlitedTerm = term.toUpperCase().includes(searchText.toUpperCase())
            ? (
              <span key={uuidv4()} style={{ background: 'red' }}>
                {`${term},`}
              </span>
            )
            : `${term},`;
          return highlitedTerm;
        })}
      </span>
    );
  }

  /**
   * Render.
   */
  render() {
    let languages = 'JavaScript, CSS/SCSS, HTML5, SQL, Java 8, Ruby on Rails, PHP, XML, YML, C#';
    languages = this.getHighlightedText(languages);
    return (
      <div className={styles.container}>
        <p className={styles.summary}>
          All listed skills have been used professionally to develop and deliver production-ready web applications
        </p>

        <div className={styles.row}>
          <p className={styles.heading}>
            Languages:
          </p>
          <p className={styles.skills}>
            {languages}
          </p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>
            Frameworks & Libraries:
          </p>
          <p className={styles.skills}>
            ReactJs, redux, AJAX, JSON, flex, bootsrap, npm, webpack, jQuery, leaflet, mapbox, highcharts, recaptcha, OATH2, Java DropWizard, .NET, Crystal Reports, SSRS
          </p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>
            Web Development:
          </p>
          <p className={styles.skills}>
            RESTful/SOAP web services, websockets, SSL certificates, domain registration
          </p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>
            Deployment:
          </p>
          <p className={styles.skills}>
            Amazon Web Services (AWS), docker, Jenkins, Maven
          </p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>
            Database:
          </p>
          <p className={styles.skills}>
            SQL Server, MySQL, Postgres, DynamoDB, migrations, replication, optimization, scripting
          </p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>
            Source Control:
          </p>
          <p className={styles.skills}>
            GIT, GitLab, Perforce, Microsoft Visual Source Safe, SVN
          </p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>
            Operating Systems:
          </p>
          <p className={styles.skills}>
            Windows, Windows Server, Linux
          </p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>
            Code Testing:
          </p>
          <p className={styles.skills}>
            J Unit, Mockito, Cucumber, Selenium
          </p>
        </div>
      </div>
    );
  }
}

export default TechnicalSkills;

TechnicalSkills.propTypes = {
  searchText: PropTypes.string,
};

TechnicalSkills.defaultProps = {
  searchText: 'HTML',
};
