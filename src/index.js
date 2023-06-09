import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BudgetsProvider} from './context/BudgetContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BudgetsProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BudgetsProvider>
);
