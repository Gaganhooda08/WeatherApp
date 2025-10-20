import { useState } from "react";

export default function useWeather(unit = "metric") {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (city = "Delhi") => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
      );
      const data = await res.json();
      if (data.cod !== 200) throw new Error(data.message);

      setWeatherInfo({
        city: data.name,
        temp: data.main.temp,
        feelslike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        weather: data.weather[0].main,
        icon: data.weather[0].icon,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weatherInfo, loading, error, fetchWeather };
}