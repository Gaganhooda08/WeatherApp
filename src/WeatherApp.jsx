import { useContext, useEffect, useState } from "react";
import useWeather from "./hooks/useWeather";
import { ThemeContext } from "./context/ThemeContext";
import { UnitContext } from "./context/UnitContext";

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import UnitToggle from "./components/UnitToggle";
import DarkModeToggle from "./components/DarkModeToggle";
import SearchHistory from "./components/SearchHistory";
import WeatherIcon from "./components/WeatherIcon";

export default function WeatherApp() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { unit, setUnit } = useContext(UnitContext);
  const { weatherInfo, loading, error, fetchWeather } = useWeather(unit);

  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );

  const updateHistory = (city) => {
    const updated = [city, ...searchHistory.filter((c) => c !== city)].slice(0, 5);
    setSearchHistory(updated);
    localStorage.setItem("searchHistory", JSON.stringify(updated));
  };

  const handleSearch = (city) => {
    fetchWeather(city);
    updateHistory(city);
  };

  const handleDelete = (cityToDelete) => {
    const updated = searchHistory.filter((c) => c !== cityToDelete);
    setSearchHistory(updated);
    localStorage.setItem("searchHistory", JSON.stringify(updated));
  };

  useEffect(() => {
    fetchWeather("Delhi");
  }, [unit]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h2>Weather App by Hoodashab</h2>

      <div style={{ marginBottom: "1rem" }}>
        <UnitToggle unit={unit} setUnit={setUnit} />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <SearchBox onSearch={handleSearch} />
      <SearchHistory
        history={searchHistory}
        onSelect={handleSearch}
        onDelete={handleDelete}
      />

      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {weatherInfo && (
        <>
          <WeatherIcon icon={weatherInfo.icon} />
          <InfoBox info={weatherInfo} />
        </>
      )}
    </div>
  );
}