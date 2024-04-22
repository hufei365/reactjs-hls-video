import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = hydrateRoot(container, <App />); // createRoot(container!) if you use TypeScript
// root.render(<App />);