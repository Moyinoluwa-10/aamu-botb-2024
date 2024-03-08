import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  RadialLinearScale,
  Title,
} from "chart.js";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  RadialLinearScale
);

import PropTypes from "prop-types";

const SpiderwebChart = ({ players }) => {
  const data = {
    labels: ["Passing Yards", "Rushing Yards", "Touchdowns", "Interceptions"],
    datasets: players.map((player) => ({
      label: player.name,
      data: [
        player.passingYards,
        player.rushingYards,
        player.touchdowns,
        player.interceptions,
      ],
      backgroundColor: "rgba(255, 99, 132, 1)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    })),
  };

  return (
    <div className="border border-gray-400 rounded-2xl py-2 bg-[#ffffff] w-full">
      <h1 className="text-center font-semibold text-back">{players[0].name}</h1>
      <div className="w-14 h-14 mx-auto rounded-full overflow-hidden">
        <img src={players[0].img} alt="" className="w-full aspect-square" />
      </div>
      <Radar
        data={data}
        options={{
          scale: {
            ticks: { beginAtZero: true },
          },
        }}
      />
    </div>
  );
};

SpiderwebChart.propTypes = {
  players: PropTypes.array,
};

export default SpiderwebChart;
