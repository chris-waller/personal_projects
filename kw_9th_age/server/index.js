import server from './config/server';
import client from './config/database';


const PORT = process.env.PORT || 3001;

// server configuration
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader('Content-Type', 'application/json');
  next();
});

server.get("/legion_colours", function(req, res) {
  console.log("");
  console.log("*******************************");
  console.log("API call made to /legion_colours");
  console.log("*******************************");

  const sqlQuery = "SELECT * FROM kwl_t9a_db.legion_colours ORDER BY name;";
  
  client.query(sqlQuery,
    (error, results) => {
    if (error) {
      res.status(500).json(error)
      console.log(error);
      return;
    }

    const legionColours = createLegionColoursFromData(results.rows);
    res.status(200).json(legionColours);
  })
});

server.get("/regions", function(req, res) {
  console.log("");
  console.log("*******************************");
  console.log("API call made to /regions");
  console.log("*******************************");

  const sqlQuery = "SELECT r.id AS region_id, r.name AS region_name, r.coord1, r.coord2, " + 
    "r.coord3, r.coord4, r.coord5, r.coord6, c.id AS colour_id, c.name AS colour_name, c.rgb " + 
  "FROM kwl_t9a_db.regions r " + 
  "LEFT JOIN kwl_t9a_db.legion_colours c " + 
    "ON r.colour_id = c.id " + 
  "ORDER BY region_id";
  
  client.query(sqlQuery,
    (error, results) => {
      if (error) {
        res.status(500).json(error);
        console.log(error);
        return;
      }

    const geoJsonMap = createGeoJsonFromData(results.rows);
    res.status(200).json(geoJsonMap);
  })
});


server.get("/legions", function(req, res) {
  console.log("");
  console.log("*******************************");
  console.log("API call made to /legions");
  console.log("*******************************");

  const sqlQuery = "SELECT l.id, l.name AS region_name, l.region_id, " +
    "c.name AS colour_name, c.rgb " + 
  "FROM kwl_t9a_db.legions l " +
    "INNER JOIN kwl_t9a_db.legion_colours c " +
  "ON l.colour_id = c.id";

  client.query(sqlQuery,
    (error, results) => {
      if (error) {
        res.status(500).json(error);
        console.log(error);
        return;
      }

    const legions  = createLegionFromData(results.rows);
    res.status(200).json(legions);
  })

});


server.post("/legions/:legionName/:regionId/:colourId", function(req, res) {
  console.log("");
  console.log("*******************************");
  console.log("API call made to /legions/:legionName/:regionId/:colourId");
  console.log("*******************************");
  console.log("posting");

  const sqlInsertQuery = "INSERT INTO kwl_t9a_db.legions (name, region_id, colour_id) " +
    `VALUES ('${req.params.legionName.replace("'", "''")}', ${req.params.regionId}, ${req.params.colourId});`;

  const sqlUpdateQuery = "UPDATE kwl_t9a_db.regions " +
    `SET colour_id = '${req.params.colourId}' `
    + `WHERE id = ${req.params.regionId};`;

  client.query(sqlInsertQuery + sqlUpdateQuery,
    (error, results) => {
      if (error) {
        res.status(500).json(error);
        console.log(error);
        return;
      }

    res.status(200).json("success");
  })

});

server.put("/legions/:sourceRegionId/:legionId/:regionId/:colourId", function(req, res) {
  console.log("");
  console.log("*******************************");
  console.log("API call made to /legions/legionId/:regionId/:colourId");
  console.log("*******************************");
  console.log("posting");

  const sqlUpdateQuery = "UPDATE kwl_t9a_db.legions " +  
  `SET region_id=${req.params.regionId} ` +
  `WHERE id=${req.params.legionId};` +
  "UPDATE kwl_t9a_db.regions " +
  `SET colour_id=${req.params.colourId} ` +
  `WHERE id=${req.params.regionId};` +
  "UPDATE kwl_t9a_db.regions " +
  `SET colour_id=null ` +
  `WHERE id=${req.params.sourceRegionId};`

  console.log(sqlUpdateQuery);

  client.query(sqlUpdateQuery,
    (error, results) => {
      if (error) {
        res.status(500).json(error);
        console.log(error);
        return;
      }

    res.status(200).json("success");
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
  
  data.forEach(row => {    
    const id = row["region_id"];
    const regionName = row["region_name"];
    const regionColour = row["rgb"];

    // cooridnates are stored as csv strings
    const coord1 = row["coord1"].split(",").map(x => {
      return parseInt(x);
    });
    const coord2 = row["coord2"].split(",").map(x => {
      return parseInt(x);
    });
    const coord3 = row["coord3"].split(",").map(x => {
      return parseInt(x);
    });
    const coord4 = row["coord4"].split(",").map(x => {
      return parseInt(x);
    });
    const coord5 = row["coord5"].split(",").map(x => {
      return parseInt(x);
    });
    const coord6 = row["coord6"].split(",").map(x => {
      return parseInt(x);
    });
   
   
    const mapRegion = {
      type: "Feature",
      properties: {
        id,
        name: regionName,
        fillColor: regionColour,
      },
      geometry: {
        type: "Polygon",
        coordinates: [[coord1, coord2, coord3, coord4, coord5, coord6]],
      }
    }
    regions.push(mapRegion);    
  });

  return regions;
}

/**
 * Will need to move this method.
 * Create Legion from data
 */
function createLegionFromData(data) { 
  const legions = [];
  data.forEach(row => {
    const id = row["id"];
    const name = row["region_name"];
    const regionId = row["region_id"];
    const colour = row["colour_name"];
    const rgb = row["rgb"];

    const legion = {
      id, name, regionId, colour, rgb
    };    
    legions.push(legion);
  })  
  return legions;
}


function createLegionColoursFromData(data) {
  const legion_colours = [];
  data.forEach(row => {
    const id = row["id"];
    const name = row["name"];
    const rgb = row["rgb"];

    const legion_colour = { id, name, rgb, };    
    legion_colours.push(legion_colour);
  })  
  return legion_colours;
}
