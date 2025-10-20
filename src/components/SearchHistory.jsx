import "./SearchHistory.css";
export default function SearchHistory({ history, onSelect, onDelete }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>Recent Searches</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {history.map((city, i) => (
          <li key={i} style={{ marginBottom: "8px" }}>
            <button
              onClick={() => onSelect(city)}
              style={{
                padding: "6px 12px",
                marginRight: "10px",
                backgroundColor: "#0077b6",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {city}
            </button>
            <button
              onClick={() => onDelete(city)}
              style={{
                backgroundColor: "transparent",
                color: "red",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}