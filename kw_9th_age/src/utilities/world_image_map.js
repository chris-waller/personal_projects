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

/**
 * The image map for the fantasy world map.
 */
export const MAP = {
	name: "world-map",
	areas: [
		{
			name: "1",
      shape: "rect",
      coords: [3,4,802,601],
      terrain: [
        TERRAIN_TYPES.FORESTS, TERRAIN_TYPES.HILLS, TERRAIN_TYPES.IMPASSABLE
      ],
    },		
    {
			name: "2",
      shape: "rect",
      coords: [2042,5,811,594],
      terrain: [
        TERRAIN_TYPES.HILLS
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
      terrain: [TERRAIN_TYPES.IMPASSABLE],
		},
	]
};

