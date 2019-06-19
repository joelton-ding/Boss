import React, { Component } from 'react';
import './App.css';

import Header from './shared/components/Header'
// import JobSearch from './shared/components/JobSearch'
import JobList from './shared/components/JobList'
import Pagination from './shared/components/Pagination'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          {/* <JobSearch /> */}
          <JobList />
          <Pagination />
        </div>
      </div>
    );
  }
}

export default App;
