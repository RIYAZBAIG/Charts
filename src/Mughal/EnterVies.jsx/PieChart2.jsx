import { useEffect } from 'react';
import { useTable, usePieChart } from '@rawgraphs/core';
import { RawChart } from '@rawgraphs/react';

function PieChart2() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://dev.etldata.traversetec.co/test.php');
        const json = await response.json();
        const table = useTable({
          data: json.data,
          encoding: {
            label: { field: 'month', type: 'nominal' },
            angle: { field: 'Income', type: 'quantitative' },
          },
        });
        const { data, options } = usePieChart({
          table,
          label: 'label',
          angle: 'angle',
        });
        // Render chart with RawChart component
        <RawChart data={data} options={options} />;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <RawChart data={data} options={options} />
    </div>
  );
}

export default PieChart2;
