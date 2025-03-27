// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import BuilderIOClone from './App';
// import './styles.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   // <Router>
//     <BuilderIOClone />
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import BuilderIOClone from './App'; // Correct import
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <BuilderIOClone />
  <div>hi</div>

  </>
);