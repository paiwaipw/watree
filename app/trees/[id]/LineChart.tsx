import Loading from "@/app/loading";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  layout: {
    padding: {
      top: 5,
      bottom: 5,
    },
  },

  responsive: true,
  maintainAspectRatio: false,
};
export const LineChart = ({ treeData }: any) => {
  const [loading, setLoading] = useState(false);

  let labels: any = [];
  let datasets: any = [
    {
      backgroundColor: "#8bcc00",
      label: "Flow Rate (cm/hr)",
      data: [],
      pointStyle: false,
      borderWidth: 1,
      borderColor: "#8bcc00",
    },
  ];

  useEffect(() => {
    if (treeData) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [treeData]);
  if (treeData.progress) {
    treeData.progress.forEach((tree: any) => {
      labels.push(dayjs(tree.timestamp.toString()).format("DD/MM/YYYY"));
      datasets[0].data.push(tree.flowrate);
    });
  }
  const data = {
    labels,
    datasets,
  };
  if (loading) {
    return <Loading />;
  }
  return <Line className="relative sm:h-72" options={options} data={data} />;
};
