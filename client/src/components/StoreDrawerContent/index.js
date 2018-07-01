import React from 'react';
import DepartmentGroup from './DepartmentGroup';
import PriceGroup from './PriceGroup';
import SizeGroup from './SizeGroup';

export default (props: any) => {
  return (
    <div>
      <DepartmentGroup />
      <PriceGroup />
      <SizeGroup />
    </div>
  );
};
