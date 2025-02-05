import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function StatsChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Earnings",
        data: [3000, 4000, 3500, 5000, 6000],
        borderColor: "green",
        fill: false,
        height: "5rem"
      },
    ],
  };

  return (
    <div className="bg-white p-3 rounded shadow">
      <h2 className="text-lg font-bold mb-3">Earnings Overview</h2>
      <Line data={data} />
    </div>
  );
}

export default StatsChart;
