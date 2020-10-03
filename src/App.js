import React from 'react';
import './App.css';
import GetInput from './components/GetInput';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';


function App() {


  return (
    <div className="App">
        <Header />
        <Dashboard />
        <GetInput />
        <Navigation />
    </div>
  )
}

export default App;
