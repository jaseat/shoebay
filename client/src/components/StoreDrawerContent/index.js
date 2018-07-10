import React from 'react';
import DepartmentGroup from './DepartmentGroup';
import PriceGroup from './PriceGroup';
import SizeGroup from './SizeGroup';
import ColorGroup from './ColorGroup';
import CategoryGroup from './CategoryGroup';

export default (props: any) => {
  return (
    <div>
      <DepartmentGroup />
      <CategoryGroup />
      <SizeGroup />
      <ColorGroup />
      <PriceGroup />
    </div>
  );
};
