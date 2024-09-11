// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/reset.css'; // Import Ant Design styles
import './index.css'; // Your custom global styles (optional)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
