const { fetchMyIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("Error!", error);
  }
  //Instead of console logging we are using the print passtime function to get the times 
  printPassTimes(passTimes);
});

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