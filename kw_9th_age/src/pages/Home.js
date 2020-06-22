// npm imports
import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { FaScroll, FaGlobeAfrica, FaFortAwesome} from 'react-icons/fa';
import { GiCrossbow, GiScreaming } from 'react-icons/gi';

// custom components
import Layout from '../components/Layout';

// css imports
import styles from './styles/home.scss';
import SectionHeader from '../components/SectionHeader';

// utility imports
import {HOMESTEAD, WORLD_1, WORLD_2, WAR_1, WAR_2,
  VILLAGE_1, VILLAGE_2, CRIER_1, CRIER_2} from './page_text'

/**
 * 
 */
class Home extends Component {

  /**
   * 
   */
  constructor() {
    super();

    this.state = {
      redirect: false,
      data: this.randomDogImage,
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.simulateLogin = this.simulateLogin.bind(this);
  }
  

  /**
   * ComponentDidMount.
   */
  componentDidMount() {
    //this.simulateLogin();    
  }


  /**
   * Fake login
   */
  simulateLogin() {
    const self = this;
    axios.get('http://localhost:3001/login/cwaller2@gmail.com/foobar')
    .then(function (response) {
      // handle success
      console.log(response.data);
      alert(`Logged in as ${response.data.firstName} ${response.data.lastName}\n${response.data.comments}`);
      console.log(response.data.user);
      self.setState({
        user: response.data.user,
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
  


  /**
   * User has clicked the map image
   * TODO: get rid of this. A simple Link should work but the display grid
   * is giving me problems with visualiation when using a div vs img. 
   * Not worth the time to investigate at the moment
   */
  handleOnClick() {       
    this.setState({redirect: true});
  }

  /**
   * Render
   */
  render() {

    // user clicked the map image    
    if (this.state.redirect) {
      return <Redirect push to="/map" />;
    }

    return (
      <Layout>
        <div className={styles.home}>

          {/* Homestead Summary */}
          <div className={styles.header}>
            <SectionHeader 
              text="Homestead" 
              icon={<FaScroll />} 
              headerType="h1" 
              test={this.randomDogImage}
            />
          </div>
          <div>
            <p>
              {HOMESTEAD}
            </p>          
          </div>

          {/* The Known World (Map Page) */}
          <div className={styles.subSection}>
          <SectionHeader 
              text="The Known World" 
              icon={<FaGlobeAfrica />} 
              headerType="h2" 
            />          
          </div>
          <div className={styles.worldSection}>
            <div className={styles.worldItem1} >
              <p>{WORLD_1}</p>
            </div>             
            <div
              className={styles.worldItem2} 
              title="Map of Kaewool" 
              onClick={this.handleOnClick}  
            />          
            <div className={styles.worldItem3} >
              <p>{WORLD_2}</p>
            </div>
          </div>
          <div>
            <Link to="/map" >
              Click HERE to explore Kea'wole
            </Link>
          </div>

          {/* War Status (Campaign Page) */}
          <div className={styles.subSection}>
          <SectionHeader 
              text="WarStatus" 
              icon={<GiCrossbow />} 
              headerType="h2" 
            />   
          </div>
          <div>
            <p>
              {WAR_1}
            </p>
            <p>
              {WAR_2}
            </p>          
          </div>
          <div>
            <Link to="/campaign" >
              Click HERE to review the current campaign
            </Link>
          </div>

          {/* The Village (Members Page) */}
          <div className={styles.subSection}>
          <SectionHeader 
              text="The Village" 
              icon={<FaFortAwesome />} 
              headerType="h2" 
            />                    
          </div>
          <div>
            <p>
              {VILLAGE_1}
            </p>
            <p>
              {VILLAGE_2}
            </p>          
          </div>
          <div>
            <Link to="/members" >
              Click HERE to see the current roster of chiefs, generals and kings
            </Link>
          </div>

          {/* Town Crier (About Page)*/}
          <div className={styles.subSection}>
          <SectionHeader 
              text="Town Crier" 
              icon={<GiScreaming />} 
              headerType="h2" 
            />                    
          </div>
          <div>
            <p>
              {CRIER_1}
            </p>
            <p>
            `{CRIER_2}
            </p>          
          </div>  
          <div>
            <Link to="/about/#" >
              Click HERE to inquire with the town crier
            </Link>
          </div>

        </div>
      </Layout>
    );
  }
};

export default Home;