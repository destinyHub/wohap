import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import Header from './components/header/header';
import Home from './pages/home/home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}

export default App;
