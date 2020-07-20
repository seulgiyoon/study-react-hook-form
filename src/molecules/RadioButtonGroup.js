import React from 'react';
import { Input } from '../atoms';

export default function RadioButtonGroup({ inputData }) {
  return (
    <div>
      {inputData.map((item, index) => (
        <Input key={index} type={'radio'} item={item} />
      ))}
    </div>
  );
}
