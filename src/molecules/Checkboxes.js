import React from 'react';
import Input from '../atoms/Input';

export default function SelectItem({ toggleFunction, data }) {
  const type = 'checkbox';
  if (toggleFunction)
  return (
    <div>
      {data.map((item, index) => (
        <Input key={index} type={type} item={item} />
      ))}
    </div>
  );
}