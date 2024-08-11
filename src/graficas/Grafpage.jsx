import React, { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import "../graficas/grafpage.css";

import revenueData from "../data/revenueData.json";
import sourceData from "../data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const Grafpage = () => {
  const [selectedChart, setSelectedChart] = useState("line");

  const renderChart = () => {
    switch (selectedChart) {
      case "line":
        return (
          <Line
            data={{
              labels: revenueData.map((data) => data.mes),
              datasets: [
                {
                  label: "Interacciones",
                  data: revenueData.map((data) => data.veces),
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  borderColor: "#064FF0",
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  text: "Grafica Mensual",
                },
              },
              scales: {
                x: {
                  grid: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                },
                y: {
                  grid: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                }
              }
            }}
          />
        );
      case "bar":
        return (
          <Bar
            data={{
              labels: sourceData.map((data) => data.sentimiento),
              datasets: [
                {
                  label: "Veces",
                  data: sourceData.map((data) => data.veces),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Grafica Sentimental",
                },
              },
              scales: {
                x: {
                  grid: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                },
                y: {
                  grid: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                }
              }
            }}
          />
        );
      case "doughnut":
        return (
          <Doughnut
            data={{
              labels: sourceData.map((data) => data.sentimiento),
              datasets: [
                {
                  label: "Veces",
                  data: sourceData.map((data) => data.veces),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Grafica Sentimental",
                },
              },
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="dataCard">{renderChart()}</div>
      <div className="buttonContainer">
        <button onClick={() => setSelectedChart("line")}>Linea</button>
        <button onClick={() => setSelectedChart("bar")}>Barras</button>
        <button onClick={() => setSelectedChart("doughnut")}>Pastel</button>
      </div>
    </div>
  );
};

export default Grafpage;
