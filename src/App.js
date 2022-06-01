// Hoe to render only { [  {}, {}, {t:h, i:s}] } without render the outsider [] and {} ?
// 1. split json files
// 2.  flat() / flatMap() with some filter() or conditional 
// 3. hide class of css

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  return (
      <React.Fragment>
      <Navbar />
      <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Projects} />
          </Switch>
      </main>
    </React.Fragment> 
  );
}

export default App;