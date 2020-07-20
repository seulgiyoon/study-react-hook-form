import React from 'react';
import { Input } from '../atoms';

export default function NumberInputGroup({ unit, inputData }) {
  return (
    <div>
      <Input type={'number'} item={inputData[0]} />
      ~
      <Input type={'number'} item={inputData[1]} />
      {unit}
    </div>
  );
}
