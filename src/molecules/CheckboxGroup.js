import React from 'react';
import { Input } from '../atoms';

export default function CheckboxGroup({ inputData }) {
  return (
    <div>
      {inputData.map((item, index) => (
        <Input key={index} type={'checkbox'} item={item} />
      ))}
    </div>
  );
}
