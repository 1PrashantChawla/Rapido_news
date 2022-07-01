
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

console.log(process.env.REACT_APP_API);

export default class App extends Component {
  country="in";
  apiKey=process.env.REACT_APP_API

  // storing API KEY IN ENVIRONMENT VARIABLE SO THAT NO OTHER PERSON CAN ACCESS IT
  render() 
  {
    return (
      <Router>

        <Navbar />
        
        <Routes>
          <Route  exact path="/Business" element={<News pageSize={15}  key="business" category="business" apiKey={this.apiKey} country={this.country} />} />

          <Route  exact path="/"  element={<News pageSize={15}  key="general" category="general" apiKey={this.apiKey} country={this.country} />} />

          <Route  exact path="/Entertainment"  element={<News pageSize={15}  key="entertainment" apiKey={this.apiKey} category="entertainment" country={this.country} />} />

          <Route  exact path="/Health"  element={<News pageSize={15} key="health" category="health" apiKey={this.apiKey} country={this.country} />} />

          <Route  exact path="/Science"  element={<News pageSize={15} key="science" category="science" apiKey={this.apiKey} country={this.country} />} />

          <Route  exact path="/Sports" element={<News pageSize={15}  key="sports" category="sports" apiKey={this.apiKey} country={this.country} />} />

          <Route  exact path="/General"   element={<News pageSize={15} key="general" category="general" apiKey={this.apiKey} country={this.country} />} />

          <Route  exact path="/Technology" element={<News pageSize={15}  key="technology" category="technology" apiKey={this.apiKey} country={this.country} />} />

        </Routes>
        {/* <Footer /> */}

      </Router>
    )
  }
}


