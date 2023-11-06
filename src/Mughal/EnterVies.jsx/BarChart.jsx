import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

function BarChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://dev.etldata.traversetec.co/test.php');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const labels = data.labels;
      const values = data.values;

      const config = {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Weekly Sales',
              data: values,
              backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 0, 0, 0.2)'
              ],
              borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, config);
    }
  }, [data]);

  return (
    <div>
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default BarChart;
