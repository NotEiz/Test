import { useEffect, useState } from "react";
import RatingChart from "./components/RatingChart";
import { Psychologist } from "./components/psychologist/types";
import { FindPsychologists } from "./components/psychologist/api";

const App = () => {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  const [chartData, setChartData] = useState<{
    labels: string[];
    values: number[];
  }>({ labels: [], values: [] });

  useEffect(() => {
    FindPsychologists()
      .then((res) => {
        setPsychologists(res);

        const labels = res.map((p) => p.name);
        const values = res.map((p) => p.rating);
        setChartData({ labels, values });
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(chartData);
  return (
    <div>
      <h1>Psychologist Ratings</h1>
      {chartData.labels.length > 0 && <RatingChart data={chartData} />}
    </div>
  );
};

export default App;
