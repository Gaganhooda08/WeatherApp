import { Line } from "react-chartjs-2";

export default function WeatherChart({ temps }) {
  const data = {
    labels: ["Morning", "Afternoon", "Evening", "Night"],
    datasets: [
      {
        label: "Temperature",
        data: temps,
        borderColor: "#0077b6",
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
}