import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Search from './components/Search';

function App() {
  return (
    <div className="container">
      <div className='navbar navbar-expand bg-primary mb-2'>
      <h2 className='text-white'>Search Bar</h2>
      </div>
      <Search/>
    </div>
  );
}

export default App;
