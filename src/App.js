// src/App.js

import React from 'react';
import './App.css';
import PDFExport from './components/PDFExport';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the React App!</h1>
      <PDFExport /> {/* Add your new component here */}
    </div>
  );
}

export default App;
