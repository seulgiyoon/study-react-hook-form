import React from 'react';
import Input from '../atoms/Input';

export default function Option({ title, data }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ fontWeight: 'bold', marginRight: '10px' }}>{title}</p>
      {data.map((item, index) => (
        <Input key={index} item={item} />
      ))}
    </div>
  );
}
