// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// style imports
import styles from './styles/experience.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Experience extends Component {
  /**
   * Get highlighted text.
   * This is a recursive function that will iterate through all child
   * nodes and wrap all found text in a highlight style.
   */
  getHighlightedText = (node) => {
    const nodeType = typeof (node);
    const highlightedNode = node;
    if (nodeType === 'string') {
      return this.props.getHighlightedText(node);
    }

    Object.keys(node).forEach((key) => {
      const entry = node[key];
      const highligtedText = this.getHighlightedText(entry);
      highlightedNode[key] = highligtedText;
    });

    return highlightedNode;
  }

  render() {
    const nbsp = '\xa0';
    const job1 = {
      title: 'Voluntary Work Hiatus (March 2019 – Present)',
      li1: 'Voluntary time off of work to focus on personal projects',
      li2A: 'See my private',
      li2B: `${nbsp}Github profile${nbsp}`,
      li2C: 'for samples of personal web applications completed or currently being developed',
    };
    Object.keys(job1).forEach((key) => {
      const entry = job1[key];
      const highligtedText = this.props.getHighlightedText(entry);
      job1[key] = highligtedText;
    });

    const job2 = {
      title: 'Aeryon Labs Inc / FLIR, Kitchener, ON (Mar. 2016 – Mar. 2019)',
      subJobs: [
        {
          title: 'Web Application Developer / Team Lead',
          skills: `Skills/Tools/Libraries Used: ReactJs, redux, HTML5, CSS, JavaScript,
          jQuery, JSON, AJAX, REST, websockets, bootstrap, flex, Java 8, DropWizard,
          Postgres, AWS, XML, JIRA, GIT, SVN, maven, npm, docker`,
          summary: `Designed and developed a scalable, cross-platform ReactJs web application
          capable of displaying live video and telemetry from aerial drone cameras`,
          examples: [
            {
              description: `Researched and began initial development into an RTSP video player for
              displaying, pausing and seeking live video.`,
              subDescriptions: [
                {
                  text: `By utilizing just-released technology and helping to design and
                  create multiple propriety protocols and applications, was able to take the
                  existing web application that could handle one video with 30 seconds latency,
                  to 16 videos having less than a one second latency. This new web application
                  also had the ability to pause and rewind the live video/telemetry of each camera
                  individually – something that had never yet been attempted  anywhere in the world.`,
                },
              ],
            },
            {
              description: `Created a custom Java 8 DropWizard back-end system designed around cloud-based
              infrastructure, specifically AWS but designed to be 100% vendor-agnostic.`,
            },
            {
              description: `Helped create and lead a small team in charge of the front-end development
              of the web application. Used a combination of AJAX and websockets to retrieve the server data`,
            },
            {
              description: `Conducted dozens of interviews to hire for management, senior, junior and
              co-op positions`,
            },
          ],
        },
      ],
    };
    Object.keys(job2).forEach((key) => {
      const entry = job2[key];
      const highligtedText = this.getHighlightedText(entry);
      job2[key] = highligtedText;
    });

    const job3 = {
      title: 'Formulating Change, Kitchener, ON (Feb. 2015 – Mar. 2016)',
      subJobs: [
        {
          title: 'Web Application Developer and Administrator',
          skills: `Skills/Tools/Libraries Used: Ruby on Rails, C#, REST, HTML, CSS, JavaScript,
          jQuery, JSON, AJAX, bootstrap, flex, XML, YML, MySQL, JIRA, Subversion, GIT,
          Windows, Debian, Visual Studio`,
          summary: `Developed and deployed scalable, cross-platform Ruby on Rails web applications
          and C# web services to QA, staging and production environments.`,
          examples: [
            {
              description: `Increased the speed of the website’s data search by 500% by customizing and
              integrating an open source search indexer (Sphinx)`,
            },
            {
              description: 'Wrote SQL scripts to perform data mining research for all departments',
            },
            {
              description: 'Overhauled two significant portions of the website by refactoring duplicate code',
            },
          ],
        },
      ],
    };
    Object.keys(job3).forEach((key) => {
      const entry = job3[key];
      const highligtedText = this.getHighlightedText(entry);
      job3[key] = highligtedText;
    });

    const job4 = {
      title: 'Brock Solutions, Kitchener, ON (Jul. 2011 – Feb. 2015)',
      subJobs: [
        {
          title: 'Project Tech Lead (Apr. 2013 – Feb. 2015)',
          skills: `Skills/Tools/Libraries Used: C#, HTML, CSS, JavaScript, jQuery,
          Objective-C, ASP.NET, REST, MSSQL, Perforce, XML, SSRS, Windows,
          Windows Server, IIS, Visio`,
          summary: `Enhanced and maintained a scheduling and training application for a large
          security company in co-ordination with the Canadian TSA`,
          examples: [
            {
              description: `Decreased load time of a mobile application from 3.5 minutes to 3.5
              seconds by optimizing the database`,
            },
            {
              description: 'Self-taught Objective-C when the company had an immediate need for iOS development',
            },
          ],
        },
        {
          title: 'Software Tech Lead (Feb. 2012 – Feb. 2015)',
          skills: `Skills/Tools/Libraries Used: C#, HTML, CSS, JavaScript, jQuery, ASP.NET,
          REST, MSSQL, JIRA, Perforce XML, Crystal Reports, SSRS, Windows, Windows
          Server, IIS, Visio`,
          summary: `Worked on multiple teams developing baggage handling systems for
          airports across the United States`,
          examples: [
            {
              description: `Helped secure a multi-million dollar deal by reverse-engineering a
              live baggage handling system (BHS) for a large commercial airport in the American southwest`,
            },
            {
              description: 'Actively participated in all phases of the SDLC for over a half dozen projects',
            },
            {
              description: `Configured, installed and tested Windows servers, web applications and SQL
              Server databases`,
            },
          ],
        },
        {
          title: 'Web Application Developer (Jul. 2011 – Feb. 2015)',
          skills: `Skills/Tools/Libraries Used: C#, HTML, CSS, JavaScript, jQuery, ASP.NET, REST,
          MSSQL, JIRA, Perforce, XML, Crystal Reports, Windows`,
          summary: `Worked for multiple projects on the company’s core web application that
          provided customers with a real-time look at the baggage system through dashboards,
          reports and search screens.`,
          examples: [
            {
              description: 'Wrote custom C# ASP.NET web pages utilizing existing page templates',
            },
            {
              description: `Created embedded Crystal Reports and SSRS reports to view airport
              statistical and maintenance data`,
            },
            {
              description: 'Troubleshoot web applications bugs and installation issues.',
            },
          ],
        },
      ],
    };
    Object.keys(job4).forEach((key) => {
      const entry = job4[key];
      const highligtedText = this.getHighlightedText(entry);
      job4[key] = highligtedText;
    });

    const job5 = {
      title: 'ABC ETC, Hamilton, ON, (Jul. 2011 – Feb. 2012, contract)',
      subJobs: [
        {
          title: 'Web Application Developer',
          skills: 'Skills/Tools/Libraries Used: VB.NET, HTML, CSS, MSSQL , XML, Windows',
          summary: `Responsible for reverse-engineering, refactoring and documenting an
           existing VB.NET application`,
          examples: [
            {
              description: `Successfully completed the task ahead of schedule to the great satisfaction
               of the client and asked to fix another portion of the application due to the
               success displayed on the initial work`,
            },
            {
              description: 'Refactored the code into an object-oriented model to limit duplicate functionality',
            },
          ],
        },
      ],
    };
    Object.keys(job5).forEach((key) => {
      const entry = job5[key];
      const highligtedText = this.getHighlightedText(entry);
      job5[key] = highligtedText;
    });

    return (
      <div className={styles.container}>
        <div className={styles.header}>{job1.title}</div>
        <ul>
          <li>{job1.li1}</li>
          <li>
            {job1.li2A}
            <a target="__blank" href="https://github.com/chris-waller/personal_projects">
              {job1.li2B}
            </a>
            {job1.li2C}
          </li>
        </ul>

        <JobSection job={job2} />
        <JobSection job={job3} />
        <JobSection job={job4} />
        <JobSection job={job5} />

      </div>
    );
  }
}

Experience.propTypes = {
  getHighlightedText: PropTypes.func.isRequired,
};

// eslint-disable-next-line react/prefer-stateless-function
class JobSection extends Component {
  render() {
    const { job } = this.props;
    // eslint-disable-next-line
    const subJobs = job.subJobs;
    return (
      <>
        <div className={styles.header}>
          {job.title}
        </div>
        {
          // eslint-disable-next-line arrow-body-style
          job.subJobs.map((subJob) => {
            return (
              <div className={styles.subSection} key={uuidv4()}>
                <p className={styles.subHeader}>{subJob.title}</p>
                <p className={styles.skills}>{subJob.skills}</p>
                <div>{subJob.summary}</div>
                {(subJob.examples !== undefined) && (
                <ul>
                  {
                    // eslint-disable-next-line arrow-body-style
                    subJob.examples.map((example) => {
                      return (
                        <React.Fragment key={uuidv4()}>
                          <li key={uuidv4()}>{example.description}</li>
                          {(example.subDescriptions !== undefined) && (
                          <ul>
                            {
                              // eslint-disable-next-line arrow-body-style
                              example.subDescriptions.map((subDescription) => {
                                return (
                                  <li key={uuidv4()}>{subDescription.text}</li>
                                );
                              })
                            }
                          </ul>
                          )}
                        </React.Fragment>
                      );
                    })
                  }
                </ul>
                )}
              </div>
            );
          })
        }
      </>
    );
  }
}
JobSection.propTypes = {
  // eslint-disable-next-line
  job: PropTypes.object.isRequired,
};
