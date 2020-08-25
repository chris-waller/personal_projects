// npm imports
import React from 'react';

// style imports
import styles from './styles/technical_skills.scss';

/* eslint-disable max-len */
const TechnicalSkills = () => (
  <div className={styles.container}>
    <p className={styles.summary}>
      All listed skills have been used professionally to develop and deliver production-ready web applications
    </p>

    <div className={styles.row}>
      <p className={styles.heading}>
        Languages:
      </p>
      <p className={styles.skills}>
        JavaScript, CSS/SCSS, HTML5, SQL, Java 8, Ruby on Rails, PHP, XML, YML, C#
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

export default TechnicalSkills;
