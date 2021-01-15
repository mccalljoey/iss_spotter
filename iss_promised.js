const request = require('request-promise-native');

// const fetchMyIP = function(callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) return callback(error, null);
//     if (response.statusCode !== 200) {
//       callback(Error(`Error: ${response.statusCode} while fetching IP: ${body}`), null);
//       return;
//     } // took this if condition from the sample code. The time was unknown to qualify for the error.
//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };
// iss_promised.js

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

// Explanation for fetchmyip
/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body).data;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };