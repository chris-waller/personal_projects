import client from './config/database';;

/**
 * Use this function to somewhat automatically convert html image map data into the format
 * I need for Leaflet
 * eg. title="10" coords=[858,918,789,1037,851,1137,997,1140,1063,1035,997,923]
 */
function createImageMapFromHTML() {
  console.log("Starting script createImageMapFromHTML()...");

  const mapSize = [2048, 1522];
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

      let regionName = (k % 2 === 0) ? counter : `${counter}-alt`;
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

      console.log(regionInfo.geometry.coordinates)

      client.query(
        "INSERT INTO kwl_t9a_db.world_map (region_name, point1, point2, point3, point4, point5, point6)" + 
        `VALUES('${regionName}', '{${regionInfo.geometry.coordinates[0][0][0]}, ${regionInfo.geometry.coordinates[0][0][1]}}','{${regionInfo.geometry.coordinates[0][1][0]}, ${regionInfo.geometry.coordinates[0][1][1]}}','{${regionInfo.geometry.coordinates[0][2][0]}, ${regionInfo.geometry.coordinates[0][2][1]}}','{${regionInfo.geometry.coordinates[0][3][0]}, ${regionInfo.geometry.coordinates[0][3][1]}}','{${regionInfo.geometry.coordinates[0][4][0]}, ${regionInfo.geometry.coordinates[0][4][1]}}','{${regionInfo.geometry.coordinates[0][5][0]}, ${regionInfo.geometry.coordinates[0][5][1]}}')`,
        (error, results) => {
        if (error) {
          throw error
        }
        });
    

      x = (polygonWidth * (k + 1)) * 0.75; 
      //console.log(regionInfo);      
      counter++;
    }


    y = polygonHeight * (i + 1);
    //console.log("Y", y);
  }
  //output +="}";
  //console.log(output)  
  

console.log("Script ended.");

}
createImageMapFromHTML();

