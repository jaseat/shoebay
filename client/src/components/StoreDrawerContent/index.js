import React from 'react';
import DepartmentGroup from './DepartmentGroup';
import PriceGroup from './PriceGroup';
import SizeGroup from './SizeGroup';

export default props => {
  return (
    <React.Fragment>
      <DepartmentGroup />
      <PriceGroup />
      <SizeGroup />
    </React.Fragment>
  );
};
