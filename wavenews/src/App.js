import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  pageSize= 12;
  apiKey= process.env.REACT_APP_NEWS_API
  state={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <Router>
        <div>
        <LoadingBar color='#f11946' progress={this.state.progress} height={3} />
          <NavBar />
          <Switch>
            <Route exact path="/" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" category='general' />} />
            <Route exact path="/business" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="business" category='business' />} />
            <Route exact path="/entertainment" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="entertainment" category='entertainment' />} />
            <Route exact path="/general" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general-1" category='general' />} />
            <Route exact path="/health" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="health" category='health' />} />
            <Route exact path="/science" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="science" category='science' />} />
            <Route exact path="/sports" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="sports" category='sports' />} />
            <Route exact path="/technology" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="technology" category='technology' />} />
          </Switch>
        </div>
      </Router>
    )
  }
}