const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper(
  {
    APPID: 'b03ccc34733587e4577032f8b5796315',
    units: "Metric",
    lang: "pl"
  }
);
async function getWeather(citiName){
  return await new Promise(resolve => {
    helper.getCurrentWeatherByCityName(citiName, (err, currentWeather) => {
      resolve(currentWeather);
    })
  })
}

module.exports = {
  getWeather
};
