import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs, Tooltip, Title, Legend } from 'chart.js';
ChartJs.register(Tooltip, Title, Legend);

function BarChart1() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: []
    }]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://dev.etldata.traversetec.co/test.php');
        const json = await response.json();
        const labels = json.data.map(d => d.month);
        const data = json.data.map(d => d.Income);
        const backgroundColor = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'gray', 'pink', 'brown', 'teal', 'navy', 'maroon'];
        setChartData({
          labels: labels,
          datasets: [{
            label: 'Income',
            data: data,
            backgroundColor: backgroundColor.slice(0, labels.length)
          }]
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart1;
