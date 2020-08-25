// npm imports
import React from 'react';

// style imports
import styles from './styles/experience.scss';

const Experience = () => (
  <div className={styles.container}>
    <div className={styles.header}>Voluntary Work Hiatus (March 2019 – Present)</div>
    <ul>
      <li>Voluntary time off of work to focus on personal projects</li>
      <li>
        See my private
        <a target="__blank" href="https://github.com/chris-waller/personal_projects">
          &nbsp;Github profile&nbsp;
        </a>
        for samples of personal web applications
        completed or currently being developed
      </li>
    </ul>

    <div className={styles.header}>
      Aeryon Labs Inc / FLIR, Kitchener, ON (Mar. 2016 – Mar. 2019)
    </div>
    <div className={styles.subSection}>
      <p className={styles.subHeader}>Web Application Developer / Team Lead</p>
      <p className={styles.skills}>
        Skills/Tools/Libraries Used: ReactJs, redux, HTML5, CSS, JavaScript,&nbsp;
        jQuery, JSON, AJAX, REST, websockets, bootstrap, flex,&nbsp;
        Java 8, DropWizard, Postgres, AWS, XML, JIRA, GIT, SVN, maven, npm, docker
      </p>
      <div>
        Designed and developed a scalable, cross-platform ReactJs web application&nbsp;
        capable of displaying live video and telemetry from aerial drone cameras
      </div>
      <ul>
        <li>
          Researched and began initial development into an RTSP video player for&nbsp;
          displaying, pausing and seeking live video.
          <ul>
            <li>
              By utilizing just-released technology and helping to design and &nbsp;
              create multiple propriety protocols and applications, was able to take&nbsp;
              the existing web application that could handle one video with 30 seconds&nbsp;
              latency, to 16 videos having less than a one second latency. This new web&nbsp;
              application also had the ability to pause and rewind the live video/telemetry&nbsp;
              of each camera individually – something that had never yet been attempted&nbsp;
              anywhere in the world.
            </li>
          </ul>
        </li>
        <li>
          Created a custom Java 8 DropWizard back-end system designed around cloud-based&nbsp;
          infrastructure, specifically AWS but designed to be 100% vendor-agnostic.
        </li>
        <li>
          Helped create and lead a small team in charge of the front-end development of the&nbsp;
          web application. Used a combination of AJAX and websockets to retrieve the server data
        </li>
        <li>
          Conducted dozens of interviews to hire for management, senior, junior and&nbsp;
          co-op positions
        </li>
      </ul>
    </div>

    <div className={styles.header}>
      Formulating Change, Kitchener, ON (Feb. 2015 – Mar. 2016)
    </div>
    <div className={styles.subSection}>
      <p className={styles.subHeader}>Web Application Developer and Administrator</p>
      <p className={styles.skills}>
        Skills/Tools/Libraries Used: Ruby on Rails, C#, REST, HTML, CSS, JavaScript,&nbsp;
        jQuery, JSON, AJAX, bootstrap, flex, XML, YML, MySQL, JIRA, Subversion, GIT,&nbsp;
        Windows, Debian, Visual Studio
      </p>
      <div>
        Developed and deployed scalable, cross-platform Ruby on Rails web applications&nbsp;
        and C# web services to QA, staging and production environments.
      </div>
      <ul>
        <li>
          Increased the speed of the website’s data search by 500% by customizing and&nbsp;
          integrating an open source search indexer (Sphinx)
        </li>
        <li>
          Wrote SQL scripts to perform data mining research for all departments
        </li>
        <li>
          Overhauled two significant portions of the website by refactoring duplicate code
        </li>
      </ul>
    </div>

    <div className={styles.header}>
      Brock Solutions, Kitchener, ON (Jul. 2011 – Feb. 2015)
    </div>
    <div className={styles.subSection}>
      <p className={styles.subHeader}>Project Tech Lead (Apr. 2013 – Feb. 2015)</p>
      <p className={styles.skills}>
        Skills/Tools/Libraries Used: C#, HTML, CSS, JavaScript, jQuery,&nbsp;
        Objective-C, ASP.NET, REST, MSSQL, Perforce, XML, SSRS, Windows, &nbsp;
        Windows Server, IIS, Visio
      </p>
      <div>
        Enhanced and maintained a scheduling and training application for a large&nbsp;
        security company in co-ordination with the Canadian TSA
      </div>
      <ul>
        <li>
          Decreased load time of a mobile application from 3.5 minutes to 3.5&nbsp;
          seconds by optimizing the database
        </li>
        <li>
          Self-taught Objective-C when the company had an immediate need for iOS development
        </li>
      </ul>
    </div>
    <div className={styles.subSection}>
      <p className={styles.subHeader}>Software Tech Lead (Feb. 2012 – Feb. 2015)</p>
      <p className={styles.skills}>
        Skills/Tools/Libraries Used: C#, HTML, CSS, JavaScript, jQuery, ASP.NET,&nbsp;
        REST, MSSQL, JIRA, Perforce XML, Crystal Reports, SSRS, Windows, Windows Server, IIS, Visio
      </p>
      <div>
        Worked on multiple teams developing baggage handling systems for airports across&nbsp;
        the United States
      </div>
      <ul>
        <li>
          Helped secure a multi-million dollar deal by reverse-engineering a live baggage&nbsp;
          handling system (BHS) for a large commercial airport in the American southwest
        </li>
        <li>
          Actively participated in all phases of the SDLC for over a half dozen projects
        </li>
        <li>
          Configured, installed and tested Windows servers, web applications and SQL&nbsp;
          Server databases
        </li>
      </ul>
    </div>
    <div className={styles.subSection}>
      <p className={styles.subHeader}>Web Application Developer (Jul. 2011 – Feb. 2015)</p>
      <p className={styles.skills}>
        Skills/Tools/Libraries Used: C#, HTML, CSS, JavaScript, jQuery, ASP.NET, REST,&nbsp;
        MSSQL, JIRA, Perforce, XML, Crystal Reports, Windows
      </p>
      <div>
        Worked for multiple projects on the company’s core web application that&nbsp;
        provided customers with a real-time look at the baggage system through&nbsp;
        dashboards, reports and search screens.
      </div>
      <ul>
        <li>
          Wrote custom C# ASP.NET web pages utilizing existing page templates
        </li>
        <li>
          Created embedded Crystal Reports and SSRS reports to view airport&nbsp;
          statistical and maintenance data
        </li>
        <li>
          Troubleshoot web applications bugs and installation issues.
        </li>
      </ul>
    </div>

    <div className={styles.header}>
      ABC ETC, Hamilton, ON, (Jul. 2011 – Feb. 2012, contract)
    </div>
    <div className={styles.subSection}>
      <p className={styles.subHeader}>Web Application Developer</p>
      <p className={styles.skills}>
        Skills/Tools/Libraries Used: VB.NET, HTML, CSS, MSSQL , XML, Windows
      </p>
      <div>
        Responsible for reverse-engineering, refactoring and documenting an&nbsp;
        existing VB.NET application
      </div>
      <ul>
        <li>
          Successfully completed the task ahead of schedule to the great satisfaction&nbsp;
          of the client and asked to fix another portion of the application due to the&nbsp;
          success displayed on the initial work
        </li>
        <li>
          Refactored the code into an object-oriented model to limit duplicate functionality
        </li>
      </ul>
    </div>
  </div>
);

export default Experience;
