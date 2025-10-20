export default function WeatherIcon({ icon }) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="Weather Icon"
    />
  );
}