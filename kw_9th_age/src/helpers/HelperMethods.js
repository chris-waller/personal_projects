import classNames from 'classnames';
import styles from './helper-methods.scss'

/**
 *  Set a global style and then use it to create a Leaflet Icon.
 */
export function getLegionIcon(colourName, color, imageURL, iconSize, isLegionActive) {

  const styleName = `${colourName}Legion`;

  // L.icon won't accept styles.
  // Instead of creating a stylesheet with pre-defined styles, we create them here.
  // First we check we haven't already added this class to the document.
  if (document.getElementById(styleName) === null) {
    let style = document.createElement("style");
    style.type = 'text/css';
    style.setAttribute("id", styleName);
    style.innerHTML = `.${styleName} { background-color: rgba(${color}, 1); opacity: 1; }`;
    document.getElementsByTagName('head')[0].appendChild(style);  
  }

  const style = (isLegionActive) ? styles.armyIconActive : styles.armyIconRegular;
  const legionIcon = new L.Icon({
    iconUrl: imageURL,  
    iconRetinaUrl: imageURL,
    iconSize,
    className: classNames("leaflet-div-icon", style, `${styleName}`),      
    //iconAnchor: [15,5],
    //popupAnchor: [15,5],        
  });  

  return legionIcon;
}

export function scaleGeoJSONData(geoJson, scaleWidth, scaleHeight) {
  
  let newGeoJSON = [];
  Object.keys(geoJson).map((key, index) => {    
    const region = geoJson[key];
    const geometry = region["geometry"];
    //console.log("old", geometry.coordinates[0][0]);
    const newCoordinates = [];
    
    geometry.coordinates.forEach(coord => {
      const innerArray = [];
      coord.forEach(c => {
        innerArray.push(scaleCoordinate(c, scaleWidth, scaleHeight));
      })
      newCoordinates.push(innerArray);
    })
    
    const newRegion = {
      ...region,
      geometry: {
        ...geometry,
        coordinates: newCoordinates,
      }
    };
    //console.log("here", newRegion); 
    newGeoJSON.push(newRegion);
  });

  //console.log("here2", newGeoJSON);
  //console.log("old", geoJson[30].geometry.coordinates[0][0]);
  //console.log("new", newGeoJSON[30].geometry.coordinates[0][0]);
  
  return newGeoJSON;
}

function scaleCoordinate(coord, scaleWidth, scaleHeight) {  
  //console.log("width", scaleWidth);
  //console.log("height", scaleHeight);
  const x = coord[0] * scaleWidth;
  const y = coord[1] * scaleHeight;
  
  return [x, y];
}

