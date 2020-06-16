// npm imports
import React from 'react';
import { Link } from 'react-router-dom';
import { FaScroll, FaGlobeAfrica, FaFortAwesome} from 'react-icons/fa';
import { GiCrossbow, GiScreaming } from 'react-icons/gi';

// custom components
import Layout from '../components/Layout';

// css imports
import styles from './styles/home.scss';
import SectionHeader from '../components/SectionHeader';

const Home = () => {
  const homesteadText = `Welcome to the Kitchener-Waterloo-London (KWL) T9A meeting grounds. This is
   an online community of like-minded individuals furthuring the glory that is The 9th Age.
   Do you wish to share a battle report or show off a new painted mini? Perhaps, instead, you fancy
   to furthur the cause of your favourite faction? If none of that strikes your fancy, how about attacking
   your most-hated foe online via Universal Battle 2 to temporarily weaken them for upcoming matches?
   Don your sword and shield, heft your battle axe and grab your blacksmith's hammer...the
   battle for KWL has begun!  
  `;

  const worldText1 = `The world of The 9th Age is a vast exapanse of wilderness, dotted with pockets of
   'civilization'. This term is relative though as a civilized Vampire Count encampment resembles a civilized
   Highborn Elf city in name only. The region of KWL battles for constant supremecy in The 9th Age
   sub-continent of Keawool (prounounce KAY-a-wool). The only common theme between regions is that
   there is no theme: mountains give way to swampland which, in turn, meanders into a grassy plain.
   Barren rockland is just as abundant as lush forests and farmland.      
  `;
  const worldText2 = `Do you think you have what it takes to carve out a new civilization for your army? 
   Lead your Dread Elves on a campaign of slaughter, mayhem and slavery. Unite countless tribes of Orcs &
   Goblins to decimate your foes. Rally the forces of the Kingdom of Equitane to defend your villages and
   castles. Keawole is an unconquered land of unknown opportunity. Sally forth your armies and immortalize your
   name on the scrolls of history!
  `;

  const warText1 = `Text 1 Here.
  `;
  const warText2 = `Text 2 here.
  `;

  const villiageText1 = `Text 3 Here.
  `;
  const villiageText2 = `Text 4 Here.
  `;

  const townCrierText1 = `Text 5 Here.
  `;
  const townCrierText2 = `Text 6 Here.
  `;

  return (
    <Layout>
      <div className={styles.home}>

        {/* Homestead Summary */}
        <div className={styles.header}>
          <SectionHeader 
            text="Homestead" 
            icon={<FaScroll />} 
            headerType="h1" 
          />
        </div>
        <div>
          <p>
            {homesteadText}
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
            <p>{worldText1}</p>
          </div>
          <div className={styles.worldItem2} title="Map of Kaewool" />          
          <div className={styles.worldItem3} >
            <p>{worldText2}</p>
          </div>
        </div>
        <div>
          <Link to="/map" >
            Click HERE to explore Keawool
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
            {warText1}
          </p>
          <p>
            {warText2}
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
            {villiageText1}
          </p>
          <p>
            {villiageText2}
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
            {townCrierText1}
          </p>
          <p>
          `{townCrierText2}
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
};

export default Home;