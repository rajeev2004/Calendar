import React from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from './components/Calendar.jsx';
import {StrictMode} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Calendar />
  </StrictMode>
);
