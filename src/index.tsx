import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/tailwind.css';
import './style/global.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const element = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(element!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
