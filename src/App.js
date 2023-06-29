
import './App.css'
import {Home} from './components/home'
import { Department } from './components/Department';
import{Employee} from './components/Employee'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import { Navigation } from './components/Navigation';

function App() {
  return (
<BrowserRouter>
    <div className="container">
      
        <h3 className='md-3 d-flex justify-content-center'>Employees portal</h3>
        <h5 className='md-3 d-flex justify-content-center'>Employees management</h5>
        <Navigation/>
      
      <Routes>
        <Route path='/' Component={Home} exact/>
        <Route path='Employee' Component={Employee}/>
        <Route path='Department' Component={Department}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
