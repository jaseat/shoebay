import React from 'react';
import DepartmentGroup from './DepartmentGroup';
import PriceGroup from './PriceGroup';
import SizeGroup from './SizeGroup';
import WidthGroup from './WidthGroup';
import ColorGroup from './ColorGroup';
import CategoryGroup from './CategoryGroup';

export default (props: any) => {
  return (
    <div>
      <DepartmentGroup />
      <CategoryGroup />
      <SizeGroup />
      <WidthGroup />
      <ColorGroup />
      <PriceGroup />
    </div>
  );
};
