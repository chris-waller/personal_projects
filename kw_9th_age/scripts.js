createImageMapFromHTML();

/**
 * Use this function to somewhat automatically convert html image map data into the format
 * I need for Leaflet
 * eg. title="10" coords=[858,918,789,1037,851,1137,997,1140,1063,1035,997,923]
 */
function createImageMapFromHTML() {
  console.log("Starting script createImageMapFromHTML()...");

  const mapSize = [1024, 766];
  //const baseCoord = [0,0];
  const polygonHeight = mapSize[1] / 7;
  const polygonWidth = mapSize[0] / 10;
    
  let output = "";
  let counter = 1;
  
  // columns
  for (let i = 0; i < 8; i++) {    
    let x = 0;
    let y = 0;

    // rows
    for (let k = 0; k < 10; k++) {

      let regionName = (k % 2 === 0) ? counter : `${counter}-alt`;


      output += `  {
        "type": "Feature",
        "properties": {
          "name": "Region ${regionName}",    
        },
        "geometry": {
          "type": "Polygon", `
          
      output += "\"coordinates\":[[";
      // point 1
      output += `[${x}, ${y + (i * polygonHeight)}],`;

      // point 2 (test point only)
      output += `[${x + (polygonWidth * 0.25)}, ${(y - (0.5 * polygonHeight)) + (i * polygonHeight)}],`;

      // point 3 (test point only)
      output += `[${x + polygonWidth * 0.75}, ${(y - (0.5 * polygonHeight)) + (i * polygonHeight)}],`;

      // point 4 (will eventually be point 4)
      output += `[${x + polygonWidth}, ${y + (i * polygonHeight)}],`;

      // point 5 (test point only)
      output += `[${x + polygonWidth * 0.75}, ${y + (i * polygonHeight) + (0.5 * polygonHeight)}],`;

      // point 6 (test point only)
      output += `[${x + polygonWidth * 0.25}, ${y + (i * polygonHeight) + (0.5 * polygonHeight)}]`;



      output += "]]},}";
      if (k != 10) {
        output += ",";
      }
      output += "\n";  
      x = polygonWidth * (k + 1);    
      counter++;
    }

    output += "\n";
    output += "\n";
    output += "\n";    
    output += "\n";   
    output += "\n";   
    output += "\n";   
    output += "\n";   

    y = polygonHeight * (i + 1);
    console.log("Y", y);
  }
  output +="}";
  console.log(output)

  
  /*
  for (let i = 1; i < 11; i++) {
    let output = "\"coordinates\":[[";
    baseRegion.forEach(coord => {
      let x = coord[0];
      let y = coord[1];
      output += `[${x}, ${y+(100*i)}],`;            
    })
    output += "]]";
    console.log(output);
  }
  */
  

console.log("Script ended.");

}

