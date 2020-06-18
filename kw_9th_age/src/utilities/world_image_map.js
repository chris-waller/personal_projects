/////////////////////////////////////////////////
// Utility file for common JS objects & functions
/////////////////////////////////////////////////

/**
 * All possible terrain types
 */
export const TERRAIN_TYPES = {
  FIELDS: "Fields",
  FORESTS: "Forests",
  HILLS: "Hills",
  IMPASSABLE: "Impassable",
  WALLS: "Walls",
  WATER: "Water Terrain",
}

export const GEOJSON_REGIONS = [ 
  
  {
    "type": "Feature",
    "properties": {
      "name": "Region 1",    
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [[[0,0], [25, -50], [75, -50], [100, 0], [75, 50], [25,50]]],
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Region 2",    
    },
    "geometry": {
      "type": "Polygon",
      "coordinates":[[[0, 100],[25, 50],[75, 50],[100, 100],[75, 150],[25, 150]]]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Region 3",    
    },
    "geometry": {
      "type": "Polygon",
      "coordinates":[[[0, 200],[25, 150],[75, 150],[100, 200],[75, 250],[25, 250]]]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Region 4",    
    },
    "geometry": {
      "type": "Polygon",
      "coordinates":[[[0, 300],[25, 250],[75, 250],[100, 300],[75, 350],[25, 350]]]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Region 5",    
    },
    "geometry": {
      "type": "Polygon",
      "coordinates":[[[0, 400],[25, 350],[75, 350],[100, 400],[75, 450],[25, 450]]]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Region 6",    
    },
    "geometry": {
      "type": "Polygon",
      "coordinates":[[[0, 500],[25, 450],[75, 450],[100, 500],[75, 550],[25, 550]]]   
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Region 7",    
    },
    "geometry": {
      "type": "Polygon",
      "coordinates":[[[0, 600],[25, 550],[75, 550],[100, 600],[75, 650],[25, 650]]]   
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Region 8",    
    },
    "geometry": {
      "type": "Polygon",
      "coordinates":[[[0, 700],[25, 650],[75, 650],[100, 700],[75, 750],[25, 750]]]    
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Region 9",    
    },
    "geometry": {
      "type": "Polygon",
      "coordinates":[[[0, 800],[25, 750],[75, 750],[100, 800],[75, 850],[25, 850]]]    
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Region 10",    
    },
    "geometry": {
      "type": "Polygon",
      "coordinates":[[[0, 900],[25, 850],[75, 850],[100, 900],[75, 950],[25, 950]]]   
    }
  },
];