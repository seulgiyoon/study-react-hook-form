import React from 'react';
import Part from '../organisms/Part';

export default function WritePush({ title, onSubmit, data }) {
  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        {data.map((item, index) => (
          <Part key={index} title={item.title} data={item.data} />
        ))}
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
}
