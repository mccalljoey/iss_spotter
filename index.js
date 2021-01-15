const { fetchMyIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { fetchCoordsByIP } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Error!" , error);
//     return;
//   }
//   console.log('IP:' , ip);
// });

// fetchCoordsByIP((error, ip) => {
//   if (error) {
//     console.log("Error!" , error);
//     return;
//   }
//   console.log('IP Coordinates:' , ip);
// });


// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("Error!" , error);
//     return;
//   }
//   console.log('Flyover Times:' , passTimes);
// });

// Example Callback:
//[
//   { risetime: 146820455, "duration": 545 },
//   ...
// ]