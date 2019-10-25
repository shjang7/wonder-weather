import {
  renderForecast, submit, getInput, resetHTML,
} from './helpers';

const dbConfig = require('./../db-config.json');

const openWeatherKey = dbConfig.OPEN_WEATHER_KEY;
const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?q=${getInput()}&APPID=${openWeatherKey}`;
  const response = await fetch(urlToFetch);
  try {
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    return error;
  }
};

const executeSearch = () => {
  resetHTML();
  getForecast().then(forecast => renderForecast(forecast));
};

submit().addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    executeSearch();
  }
});