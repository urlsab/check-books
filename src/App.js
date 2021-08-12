import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';

import DisplayData from './components/DisplayData/DisplayData';
import DisplayErrors from './components/DisplayErrors/DisplayErrors';
import DisplayImg from './components/DisplayImg/DisplayImg';

const App = props => {
  return (
      <React.Fragment>
      <Navbar />
      <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Projects} />
          </Switch>
      </main>
      <DisplayData />
      <DisplayErrors />
      <DisplayImg /> 
    </React.Fragment> 
  );
}

export default App;