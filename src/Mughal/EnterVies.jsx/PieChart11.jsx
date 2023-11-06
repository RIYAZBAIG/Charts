import React,{useState,useEffect} from 'react';
import { createVisualization } from 'rawgraphs-core';
import { getChart } from 'rawgraphs-core/chartUtils';




const data = {
  type: 'Pie',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  },
};

const options = {
  width: 500,
  height: 500,
  margin: { top: 50, right: 50, bottom: 50, left: 50 },
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
  showLegend: true,
};

const PieChart11 = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://dev.etldata.traversetec.co/test.php');
        const json = await response.json();
        const labels = json.data.map((d) => d.month);
        const data = json.data.map((d) => d.Income);
        const backgroundColor = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'gray', 'pink', 'brown', 'teal', 'navy', 'maroon'];

        const chart = await createVisualization(
          data,
          getChart('Pie'),
          { ...options, data: { ...data, labels, datasets: [{ ...data.datasets[0], data, backgroundColor }] } }
        );
        setChartData(chart);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      {chartData && <div ref={chartData.ref} />}
    </div>
  );
};
export default PieChart11;
