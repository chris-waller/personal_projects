
const data = `
title="1"  [433,191,355,306,425,422,571,427,646,306,576,186]|
title="2"  [860,198,792,310,857,432,1005,437,1071,318,1005,195]|
title="3"  [1298,205,1225,319,1294,438,1433,441,1513,326,1446,205]|
title="4"  [858,441,790,554,858,672,1005,673,1071,554,1006,438]|
title="5"  [855,680,790,788,857,911,1003,918,1070,796,1001,683]|
title="6"  [784,553,636,553,569,675,631,784,784,794,854,672]|
title="7"  [1221,799,1287,918,1221,1034,1071,1035,1003,923,1075,799]|
title="9"  [1078,561,1217,559,1287,683,1221,797,1071,791,1008,678]|
title="9"  [635,796,565,915,638,1027,784,1031,854,915,785,799]|
title="10"  [858,918,789,1037,851,1137,997,1140,1063,1035,997,923]
`;

createImageMapFromHTML(data);

/**
 * Use this function to somewhat automatically convert html image map data into the format
 * I need for Leaflet
 * eg. title="10" coords=[858,918,789,1037,851,1137,997,1140,1063,1035,997,923]
 */
function createImageMapFromHTML(data) {
  const dataArray = data.split('|');
  
  console.log("Starting script createImageMapFromHTML()...");
  //console.log("DATA: ", dataArray);

  dataArray.forEach(row => {    
    let startIndex = row.indexOf("title");
    startIndex = startIndex + 7;    
    let endIndex = row.indexOf(" coords") - 1;    
    let rowName = row.substring(startIndex, endIndex);
    

    let newRow = `
{
  type: "FEATURE",
  geometry: {
    type: "Polygon",
    coordinates: [`;

      startIndex = row.indexOf("[") + 1;
      endIndex = row.indexOf("]");
      let coords = row.substring(startIndex, endIndex);
      let coordsArray = coords.split(',');  
      
      let newCoord = "";
      for (let i = 0; i < coordsArray.length - 1; i++) {
        let coordStart = coordsArray[i];
        let coordEnd = coordsArray[i+1];
        newCoord = "[" + coordStart + "," + coordEnd + "],"
        newRow += newCoord;
      }

      newRow = newRow.substring(0, newRow.length - 1);      
      newRow += "]";
      

newRow += `
}
}`;
     
    console.log(newRow);
    console.log("")
  })

console.log("Script ended.");

}


/*
	{
			name: "1",
      shape: "rect",
      coords: [3,4,802,601],
      terrain: [
        TERRAIN_TYPES.FORESTS, TERRAIN_TYPES.HILLS, TERRAIN_TYPES.IMPASSABLE
      ],
    },		

    */


    /*

    {
   "type": "Feature",
   "geometry": {
       "type": "Polygon",
       "coordinates": [
           [-50.0,-10.0],[50.0,-10.0],[50.0,10.0],[-50.0,10.0]
       ]
   },
   "properties": {
       "prop0": "value0",
       "prop1": "value1"
   }

   */



