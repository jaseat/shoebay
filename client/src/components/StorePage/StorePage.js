import React, { Component } from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import FilterBar from '../FilterBar';
import StoreDrawerContent from '../StoreDrawerContent';

class StorePage extends Component {
  render() {
    return (
      <React.Fragment>
        <FilterBar />
        <SideDrawer>
          <StoreDrawerContent />
        </SideDrawer>
      </React.Fragment>
    );
  }
}
export default StorePage;
