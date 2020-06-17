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

export const MAP2 = [{
  "type": "Feature",
  "properties": {
    "name": "Coors Field",
    "amenity": "Baseball Stadium",
    "popupContent": "Content"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[[15.5, 5.5],[19, 4.5],[15.5, 7.5], [15.5, 5.5]]],
  }
}];


