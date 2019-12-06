// const weatherData =
//   'https://api.weatherbit.io/v2.0/current?lat=-6.5195652033091145&lon=106.82509679062528&key=fd70d0e070304e3d80725b55c1c35c8f&lang=id';
const weatherData = (lat, lon) =>
  `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=fd70d0e070304e3d80725b55c1c35c8f`;
const weatherIcon = icon =>
  `https://www.weatherbit.io/static/img/icons/${icon}.png`;

export { weatherData, weatherIcon };
