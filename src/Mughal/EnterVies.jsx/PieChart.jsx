import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
ChartJs.register(Tooltip, Title, ArcElement, Legend); // Registering the "arc" element

function PieChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
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
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
