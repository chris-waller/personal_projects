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

