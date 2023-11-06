import express from 'express';
import cors from 'cors';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const app = express();
app.use(cors()); // cors middleware use kiya hai

app.get('/', (req, res) => {
  const jsx = <App />;
  const reactDom = ReactDOMServer.renderToString(jsx);
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': '*', // ya specific domain name
  });
  res.end(htmlTemplate(reactDom)); // htmlTemplate function ko renderToString ke output se HTML page create karne ke liye use kiya gaya hai
});

app.listen(3000, () => console.log('Server started on port 3000'));

function htmlTemplate(reactDom) {
  return `
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${reactDom}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}
