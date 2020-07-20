import React from 'react';
import Input from '../atoms/Input';

export default function SelectItem({ title, data }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ fontWeight: 'bold', marginRight: '10px' }}>{title}</p>
      {data && Array.isArray(data) && data.map((item, index) => (
        <Input key={index} item={item} />
      ))}
      {/* {data && data.data && data.data.map((item, index) => (
        <Input key={index} item={item} />
      ))}
      {data && data.toggle && data.toggleFunction && data.toggle.map((item, index) => (
        <Input key={index} item={item} />
      ))} */}
    </div>
  );
}
