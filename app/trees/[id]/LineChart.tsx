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
  Scale,
  Tick,
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
    tooltip: {
      callbacks: {
        title: function (tooltipItems: any) {
          const tooltipItem = tooltipItems[0];
          const date = dayjs(tooltipItem.label).format("DD/MM/YYYY");
          const time = dayjs(tooltipItem.label).format("HH:mm UTCZ");
          return `Date: ${date}, Time: ${time}`;
        },
        label: function (context: any) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += `${context.parsed.y}`;
          }
          return label;
        },
      },
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
  scales: {
    x: {
      ticks: {
        font: {
          size: 9,
        },
        maxRotation: 90,
        minRotation: 0,
        autoSkip: true,
        maxTicksLimit: 7, // max label,
        callback: function (this: Scale, tickValue: string | number) {
          // // Skip the first label
          // if (index === 0) {
          //   return "";
          // }
          // tickValue represents index
          const label: any = this.chart.data.labels![Number(tickValue)];
          return [dayjs(label).format("DD/MM/"), dayjs(label).format("YYYY")];
        },
      },
    },
  },
};
export const FlowrateChart = ({ treeData }: any) => {
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
      labels.push(dayjs(tree.timestamp).format("YYYY-MM-DDTHH:mm:ssZ"));
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
  return <Line className="relative " options={options} data={data} />;
};

export const SoilChart = ({ treeData }: any) => {
  const [loading, setLoading] = useState(false);

  let labels: any = [];
  let datasets: any = [
    {
      backgroundColor: "#0000FF",
      label: "Soil Moisture (MP406-VSW%)",
      data: [],
      pointStyle: false,
      borderWidth: 1,
      borderColor: "#0000FF",
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
      labels.push(dayjs(tree.timestamp).format("YYYY-MM-DDTHH:mm:ssZ"));
      datasets[0].data.push(tree.chan);
    });
  }
  const data = {
    labels,
    datasets,
  };
  if (loading) {
    return <Loading />;
  }
  return <Line className="relative " options={options} data={data} />;
};
