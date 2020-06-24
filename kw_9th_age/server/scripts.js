import client from './config/database';

/**
 * Use this function to somewhat automatically convert html image map data into the format
 * I need for Leaflet
 * eg. title="10" coords=[858,918,789,1037,851,1137,997,1140,1063,1035,997,923]
 */
function createImageMapFromHTML() {
  console.log("Starting script createImageMapFromHTML()...");

  const mapWidth = 2048;
  const mapHeight = 1522;

  const mapSize = [mapWidth, mapHeight];
  const polygonHeight = mapSize[1] / 7;
  const polygonWidth = mapSize[0] / 10;
    
  let output = "";
  let counter = 1;

  let fillColor = "transparent";
  
  // columns
  for (let i = 0; i < 8; i++) {    
    let x = 0;
    let y = 0;

    //generate random fill colours for now
    const backgroundsPerRow = Math.floor((Math.random() * 10) + 1);

    // rows
    for (let k = 0; k < 13; k++) {

      let regionName = `Region ${counter}`;
      let shiftY = 0;

      if (k % 2 !== 0) {        
        shiftY = polygonHeight * 0.5;
      }

      //generate random fill colours for now
      if (k % backgroundsPerRow === 0) {
        fillColor = "red";
      }

      const regionInfo = {
        type: "Feature",
        properties: {
          name: `"Region ${regionName}`,
          fillColor: "transparent",
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [x, y + shiftY + (i * polygonHeight)],
            [x + (polygonWidth * 0.25), (y + shiftY - (0.5 * polygonHeight)) + (i * polygonHeight)],
            [x + polygonWidth * 0.75, (y + shiftY - (0.5 * polygonHeight)) + (i * polygonHeight)],
            [x + polygonWidth, y + shiftY + (i * polygonHeight)],
            [x + polygonWidth * 0.75, y + shiftY + (i * polygonHeight) + (0.5 * polygonHeight)],
            [x + polygonWidth * 0.25, y + shiftY + (i * polygonHeight) + (0.5 * polygonHeight)]
          ]],
        }
      }

      let coord1 = regionInfo.geometry.coordinates[0][0].toString();      
      let coord2 = regionInfo.geometry.coordinates[0][1].toString();      
      let coord3 = regionInfo.geometry.coordinates[0][2].toString();      
      let coord4 = regionInfo.geometry.coordinates[0][3].toString();      
      let coord5 = regionInfo.geometry.coordinates[0][4].toString();      
      let coord6 = regionInfo.geometry.coordinates[0][5].toString();      
      
      const sqlQuery = "INSERT INTO kwl_t9a_db.regions (name, coord1, coord2, coord3, coord4, coord5, coord6) " + 
      `VALUES('${regionName}', '${coord1}', '${coord2}', '${coord3}', '${coord4}', '${coord5}', '${coord6}')`;

      //console.log(sqlQuery);

      client.query(
        sqlQuery,
        (error, results) => {
        if (error) {
          throw error
        }
      });

      x = (polygonWidth * (k + 1)) * 0.75; 
      counter++;
    }


    y = polygonHeight * (i + 1);

  }

  

console.log("Script ended.");

}
createImageMapFromHTML();

