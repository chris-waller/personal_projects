createImageMapFromHTML();

/**
 * Use this function to somewhat automatically convert html image map data into the format
 * I need for Leaflet
 * eg. title="10" coords=[858,918,789,1037,851,1137,997,1140,1063,1035,997,923]
 */
function createImageMapFromHTML() {
  console.log("Starting script createImageMapFromHTML()...");

  const baseRegion = [[0,0], [25, -50], [75, -50], [100, 0], [75, 50], [25,50]];
  
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
  

console.log("Script ended.");

}

