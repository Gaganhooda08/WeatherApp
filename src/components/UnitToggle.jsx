export default function UnitToggle({ unit, setUnit }) {
  return (
    <button onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}>
      Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
    </button>
  );
}