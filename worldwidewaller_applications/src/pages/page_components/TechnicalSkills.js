// npm imports
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// custom components
import Collapsible from 'react-collapsible';

/* eslint-disable max-len, react/no-unused-state */
const TechnicalSkills = ({
  sectionClassName, triggerClassName, openClassName, contentClassName,
}) => (
  <Collapsible
    trigger="Technical Skills"
    className={sectionClassName}
    openedClassName={sectionClassName}
    triggerClassName={triggerClassName}
    triggerOpenedClassName={classNames(triggerClassName, openClassName)}
    contentInnerClassName={contentClassName}
    open
  >
    <p>Languages: JavaScript, CSC/SCSS, HTML5, SQL, Java 8, Ruby on Rails, PHP, XML, YML, C#</p>
    <p>
      Framerworks & Libraries: ReactJs, redux, AJAX, JSON, flex, bootsrap, npm, webpack, jQuery, leaflet, mapbox, highcharts,
      recaptcha, OATH2, Java DropWizard, .NET, Crystal Reports, SSRS
    </p>
    <p>
      Web Development: RESTful/SOAP web services, websockets, SSL certificates, domain registration
    </p>
    <p>
      Deployment: Amazon Web Services (AWS), docker, Jenkins, Maven
    </p>
    <p>
      Database: SQL Server, MySQL, Postgres, DynamoDB, migrations, replication, optimization, scripting
    </p>
    <p>
      Source Control: GIT, GitLab, Perforce, Microsoft Visual Source Safe, SVN
    </p>
    <p>
      Operating Systems: Windows, Windows Server, Linux

    </p>
    <p>
      Code Testing: J Unit, Mockito, Cucumber, Selenium
    </p>
  </Collapsible>

);

export default TechnicalSkills;

TechnicalSkills.propTypes = {
  sectionClassName: PropTypes.string.isRequired,
  triggerClassName: PropTypes.string.isRequired,
  openClassName: PropTypes.string.isRequired,
  contentClassName: PropTypes.string.isRequired,
};
