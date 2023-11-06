import React,{useEffect,useState} from 'react';
import * as Raw from 'rawgraphs-core';
import BarChart from 'rawgraphs-chart-bar';

function App2() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://dev.etldata.traversetec.co/test.php');
        const json = await response.json();
        const data = json.data.map(d => ({
          month: d.month,
          income: d.Income,
          expense: d.expense,
        }));
        setChartData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const config = {
    data: {
      values: chartData,
      x: { field: 'month', type: Raw.FieldType.String },
      y: [
        { field: 'income', type: Raw.FieldType.Integer },
        { field: 'expense', type: Raw.FieldType.Integer },
      ],
    },
    encoding: {
      x: { field: 'month', type: Raw.FieldType.String },
      y: [
        { field: 'income', type: Raw.FieldType.Integer },
        { field: 'expense', type: Raw.FieldType.Integer },
      ],
    },
  };

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <Raw.Renderer config={config} Chart={BarChart} />
    </div>
  );
}

export default App2;
