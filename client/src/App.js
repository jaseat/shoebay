import React, { Component } from 'react';
import SideDrawer from './components/SideDrawer';
import FilterBar from './components/FilterBar';

class App extends Component<{}> {
  render() {
    return (
      <div>
        <FilterBar />
        <SideDrawer />
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
