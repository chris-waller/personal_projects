// npm imports
import React, { Component } from 'react';
import classNames from 'class-names';

// custom components
import Layout from '../components/Layout';
import Principles from './page_components/Principles';
import About from './page_components/About';
import Bio from './page_components/Bio';
import Osteopathy from './page_components/Osteopathy';
import Banner1 from './page_components/Banner1';
import Banner2 from './page_components/Banner2';
import Services from './page_components/Services';
import Locations from './page_components/Locations';
import Contact from './page_components/Contact';

// style imports
import styles from './css/home.scss';


/**
 * The web application Home page.
 * This has turned into to main/only page so the project structure is a bit odd now.
 */
class Home extends Component { 

  /**
   * Render.
   */
  render() {    
    return (
      <Layout>
        <div className={styles.home}>

          {/* Principles Section */}
          <div className={classNames(styles.whiteArea, styles.pageSection)}>
            <Principles />
          </div>

          {/* About Us Section */}
          <a href="about" id="about" />
          <div className={styles.pageSection}>
            <About />
          </div>

          {/* Bio Section */}
          <a href="bio" id="bio" />
          <div className={classNames(styles.whiteArea, styles.pageSection)}>
            <Bio />
          </div>

          {/* What is Osteopathy? Section */}
          <a href="osteopathy" id="osteopathy" />     
          <div className={styles.pageSection}>
            <Osteopathy />
          </div>

          {/* Banner 1 (Book Now button) */}
          <div className={classNames(styles.whiteArea, styles.pageSection)}>
            <Banner1 />
          </div>

          {/* Services Section */}
          <a href="services" id="services" />  
          <div className={styles.pageSection}>
            <Services />
          </div>


          {/* Banner 2 (Quote & Image) */}
          <div className={classNames(styles.whiteArea, styles.pageSection)}>
            <Banner2 />
          </div>

          {/* Hours & Location Section */}
          <a href="locations" id="locations" />
          <div className={styles.pageSection}>
            <Locations />
          </div>

          {/* Contact Us Section */}
          <a href="contact" id="contact" />
          <div className={classNames(styles.whiteArea, styles.pageSection)}>
            <Contact />
          </div>
          
        </div>
      </Layout>
    );
  }

}

export default Home;