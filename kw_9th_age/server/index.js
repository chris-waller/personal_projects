import server from './config/server';
import client from './config/database';


const PORT = process.env.PORT || 3001;

// server configuration
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

server.get("/world_map", function(req, res) {
  console.log("API call made to /world_map");
  
  client.query(
    `SELECT regions.id AS regionId, regions.*, legions.id AS legion_id, legions.*, legions.name as legion_name  
    FROM kwl_t9a_db.world_map regions 
    LEFT OUTER JOIN kwl_t9a_db.legions legions 
      ON legions.region_id = regions.id 
    ORDER BY regionID`,
    (error, results) => {
    if (error) {
      throw error
    }

    //console.log(results.row);
    const geoJsonMap = createGeoJsonFromData(results.rows);
    

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(geoJsonMap);
  })
});

// tell the app which port to listen on
server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});




/**
 * Will need to move this method.
 * Create the GeoJSON object
 */
function createGeoJsonFromData(data) {

  const regions = [];
  const legions = [];

  data.forEach(row => {
    //console.log("row", row);
    
    const id = row["region_id"];
    const regionName = row["region_name"];
    const regionColour = row["color"];
    const point1 = row["point1"];
    const point2 = row["point2"];
    const point3 = row["point3"];
    const point4 = row["point4"];
    const point5 = row["point5"];
    const point6 = row["point6"];
   
   const mapRegion = {
     type: "Feature",
     properties: {
       id,
       name: regionName,
       fillColor: regionColour,
     },
     geometry: {
       type: "Polygon",
       coordinates: [[
        point1,         
        point2,
        point3,
        point4,
        point5,
        point6,
       ]]
     }
   }
   regions.push(mapRegion);

   if (row["legion_id"] !== null) {
    const legion = {
      id: row["legion_id"],
      name: row["legion_name"],
      color: row["color"],
      colorName: row["color_name"],
      regionId: row["region_id"],
    }    
    legions.push(legion);     
   } 
    
  });

  console.log("returning mapdata", legions);
  return {
    regions,
    legions,
  };
}
