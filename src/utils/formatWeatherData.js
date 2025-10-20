export default function formatWeatherData(data) {
  return {
    city: data.name,
    temp: data.main.temp,
    feelslike: data.main.feels_like,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    humidity: data.main.humidity,
    weather: data.weather[0].main,
    icon: data.weather[0].icon,
  };
}