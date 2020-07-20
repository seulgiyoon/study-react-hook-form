import React from 'react';

export default function CategoryWrapper({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
