import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  pageSize= 12
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" element={<News pageSize={this.pageSize} key="general" category='general' />} />
            <Route exact path="/business" element={<News pageSize={this.pageSize} key="business" category='business' />} />
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} key="entertainment" category='entertainment' />} />
            <Route exact path="/general" element={<News pageSize={this.pageSize} key="general-1" category='general' />} />
            <Route exact path="/health" element={<News pageSize={this.pageSize} key="health" category='health' />} />
            <Route exact path="/science" element={<News pageSize={this.pageSize} key="science" category='science' />} />
            <Route exact path="/sports" element={<News pageSize={this.pageSize} key="sports" category='sports' />} />
            <Route exact path="/technology" element={<News pageSize={this.pageSize} key="technology" category='technology' />} />
          </Switch>
        </div>
      </Router>
    )
  }
}