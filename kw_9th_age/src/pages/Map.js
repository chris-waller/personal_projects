// npm imports
import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';

// Custom components
import Layout from '../components/Layout';

// Style imports
import styles from './styles/map-page.scss';

// Image imports
import mainImage from '../images/world.png';

const TERRAIN_TYPES = {
  forest: "Forest",
  hill: "Hill",
  impassable: "Impassable",
}

const MAP = {
	name: "my-map",
	areas: [
		{
			name: "1",
      shape: "rect",
      coords: [3,4,802,601],
      terrain: [
        TERRAIN_TYPES.forest, TERRAIN_TYPES.hill, TERRAIN_TYPES.impassable
      ],
    },		
    {
			name: "2",
      shape: "rect",
      coords: [2042,5,811,594],
      terrain: [
        TERRAIN_TYPES.hill
      ],
    },		
    {
			name: "3",
      shape: "rect",
      coords: [10,610,1352,1430],
      terrain: [],
    },		
    {
			name: "4",
      shape: "rect",
      coords: [1361,603,2031,1434],
      terrain: [TERRAIN_TYPES.impassable],
		},
	]
};

/**
 * Temporarily using this page as a playing ground
 */
class MapPage extends Component {

  /**
   * Constructor.   
   */
  constructor(props) {
    super(props);

    this.state = {
      selectedRegion: {
        coordinates: [0,0,0],
        name: "N/A",
        terrain: ["N/A"],
      },
      currentRegion: {
        coordinates: [0,0,0],
        name: "N/A",
        terrain: ["N/A"],
      }          
    }

    this.areaClicked = this.areaClicked.bind(this);
    this.areaEntered = this.areaEntered.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  /**
   * User has clicked an area on the map
   */
  areaClicked(area) {
    console.log(area);
    this.setState({
      selectedRegion: {
        coordinates: area.coords,
        name: area.name,
        terrain: area.terrain
      }      
    });
  }

  /**
   * User moused over an area
   */
  areaEntered(area) {
    this.setState({
      currentRegion: {
        coordinates: area.coords,
        name: area.name,
        terrain: area.terrain
      }      
    });
  }

  buttonClicked() {
    alert("clicked");
  }

  /**
   * Render.
   */
  render() {
    return (
      <Layout>
        <div className={styles.mapPage}>
          <div className={styles.header}>
            <h2>The Known World</h2>
          </div>
          
  
          {/* Play with image here */}
          <div className={styles.wrapper} section="foo">
            
            <div>          
              <ImageMapper section="bar"
                src={mainImage}
                map={MAP}
                className={styles.mainImage} 
                width={800}
                height={400}
                imgWidth={1810}
                lineWidth={5}
                onClick={area => this.areaClicked(area)}
                onMouseEnter={area => this.areaEntered(area)}
              />          
            </div>
  
            <div className={styles.info} >
              <div>Map Info</div>
              <div>&nbsp;</div>
              <div>SELECTED</div>
              <div>
                Coordinates: {this.state.selectedRegion.coordinates.toString()}
              </div>
              <div>
                Region Name: {this.state.selectedRegion.name}
              </div>
              <div>
                Terrain: {this.state.selectedRegion.terrain.toString()}
              </div>

              <div>&nbsp;</div>
              <div>CURRENT</div>
              <div>
                Coordinates: {this.state.currentRegion.coordinates.toString()}
              </div>
              <div>
                Region Name: {this.state.currentRegion.name}
              </div>
              <div>
                Terrain: {this.state.currentRegion.terrain.toString()}
              </div>

              <div>&nbsp;</div>
              <div>
                <button onClick={this.buttonClicked}>Generate Map</button>
              </div>
            </div>
          </div>
        </div>      
      </Layout>
    );
  }  
};

export default MapPage;