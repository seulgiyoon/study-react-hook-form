import React from 'react';
import { Input } from '../atoms';

export default function CheckboxGroup({ inputData }) {
  const { checkboxData } = inputData;
  return (
    <div>
      {checkboxData.map((item, index) => (
        <Input
          key={index}
          type={'checkbox'}
          item={item}
        />
      ))}
    </div>
  );
}
