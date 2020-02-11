import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import Header from './components/header/header';
import Home from './components/pages/home/home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      
    </Router>
  );
}

export default App;
