import React from 'react';
import Option from '../molecules/Option';

export default function Part({ title, data }) {
  return (
    <div>
      <h2>{title}</h2>
      {data.map((item, index) => (
        <Option key={index} title={item.title} data={item.data} />
      ))}
    </div>
  );
}
