
// import React, { useState, useEffect, useRef } from 'react';
// import { Chart, ChartData } from 'rawgraphs-core';
// import * as raw from 'rawgraphs-core';



// export const UrlFetch=()=> {
//     const chartRef = useRef();
//     const [chartData, setChartData] = useState(null);
  
//     const fetchChartData = async () => {
//       const url = 'http://dev.etldata.traversetec.co/test.php';
//       const response = await fetch(url);
//       const datapoints = await response.json();
//       return datapoints;
//     };
  
//     useEffect(() => {
//       fetchChartData().then((datapoints) => {
//         const month = datapoints.financialroport[0].financials.map(
//           function (index) {
//             return index.date;
//           }
//         );
//         const revenue = datapoints.financialroport[0].financials.map(
//           function (index) {
//             return index.revenue;
//           }
//         );
//         const companyname = datapoints.financialroport.map(function (index) {
//           return index.companyname;
//         });
//         const data = {
//           labels: month,
//           datasets: [
//             {
//               label: companyname,
//               data: revenue,
//               backgroundColor: [
//                 'rgba(255, 26, 104, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(0, 0, 0, 0.2)',
//               ],
//               borderColor: [
//                 'rgba(255, 26, 104, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(0, 0, 0, 1)',
//               ],
//               borderWidth: 1,
//             },
//           ],
//         };
//         setChartData(data);
//       });
//     }, []);
  
//     useEffect(() => {
//       if (chartData) {
//         const config = {
//           type: 'bar',
//           data: chartData,
//           options: {
//             scales: {
//               y: {
//                 beginAtZero: true,
//               },
//             },
//           },
//         };
//         const chart = new Chart(chartRef.current, config);
//         return () => {
//           chart.destroy();
//         };
//       }
//     }, [chartData]);
  
//     return <canvas ref={chartRef} />;
//   }
  