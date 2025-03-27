import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BuilderIOClone from './App.jsx'; // Import BuilderIOClone
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BuilderIOClone />
  </StrictMode>,
);
