import client from './config/database';

/**
 * Use this function to somewhat automatically convert html image map data into the format
 * I need for Leaflet
 * eg. title="10" coords=[858,918,789,1037,851,1137,997,1140,1063,1035,997,923]
 */
function createImageMapFromHTML() {
  console.log("Starting script createImageMapFromHTML()...");

  // image parameters
  const mapWidth = 1024;
  const mapHeight = 370;
  
  // specify the number of rows and columns to divide the image into
  const rowCount = 10;
  const colCount = 7;

  // polygon parameters
  // TODO: this needs work
  const polygonWidth = mapWidth / rowCount;
  const polygonHeight = mapHeight / colCount;
      
  let counter = 1;
  
  // columns
  for (let i = 0; i < colCount + 1; i++) {    
    let x = 0;
    let y = 0;

    // rows
    for (let k = 0; k < rowCount + 3; k++) {

      let regionName = `Region ${counter}`;
      let shiftY = 0;

      if (k % 2 !== 0) {        
        shiftY = polygonHeight * 0.5;
      }

      const coordinates = [[
        [x, y + shiftY + (i * polygonHeight)],
        [x + (polygonWidth * 0.25), (y + shiftY - (0.5 * polygonHeight)) + (i * polygonHeight)],
        [x + polygonWidth * 0.75, (y + shiftY - (0.5 * polygonHeight)) + (i * polygonHeight)],
        [x + polygonWidth, y + shiftY + (i * polygonHeight)],
        [x + polygonWidth * 0.75, y + shiftY + (i * polygonHeight) + (0.5 * polygonHeight)],
        [x + polygonWidth * 0.25, y + shiftY + (i * polygonHeight) + (0.5 * polygonHeight)]
      ]];

      const regionInfo = {
        type: "Feature",
        properties: {
          name: `"Region ${regionName}`,
          fillColor: "transparent",
        },
        geometry: {
          type: "Polygon",
          coordinates,
        }
      }

      const coord1 = adustCoordinate(regionInfo.geometry.coordinates[0][0], mapWidth, mapHeight).toString();      
      const coord2 = adustCoordinate(regionInfo.geometry.coordinates[0][1], mapWidth, mapHeight).toString();      
      const coord3 = adustCoordinate(regionInfo.geometry.coordinates[0][2], mapWidth, mapHeight).toString();      
      const coord4 = adustCoordinate(regionInfo.geometry.coordinates[0][3], mapWidth, mapHeight).toString();      
      const coord5 = adustCoordinate(regionInfo.geometry.coordinates[0][4], mapWidth, mapHeight).toString();      
      const coord6 = adustCoordinate(regionInfo.geometry.coordinates[0][5], mapWidth, mapHeight).toString();      
      
      const sqlQuery = "INSERT INTO kwl_t9a_db.regions (name, coord1, coord2, coord3, coord4, coord5, coord6) " + 
      `VALUES('${regionName}', '${coord1}', '${coord2}', '${coord3}', '${coord4}', '${coord5}', '${coord6}')`;

      //console.log(sqlQuery);

      client.query(
        sqlQuery,
        (error) => {
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


function adustCoordinate(coord, maxWidth, maxHeight) {
  // round to 2 dicimal places so the geoJSON layers will lay as close to each other as possible
  let coordinate = [Math.round(coord[0] * 100 / 100), Math.round(coord[1] * 100 / 100)];

  // we don't want the layer extending outside of the bounds
  if (coordinate[0] > maxWidth) {
    coordinate[0] = maxWidth;
  } else if (coordinate[0] < 0) {
    coordinate[0] = 0;
  }
  if (coordinate[1] > maxHeight) {
    coordinate[1] = maxHeight;
  } else if (coordinate[1] < 0) {
    coordinate[1] = 0;
  }

  return coordinate;
}

// execute the script
createImageMapFromHTML();

