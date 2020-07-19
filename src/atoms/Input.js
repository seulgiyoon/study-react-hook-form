import React from 'react';

export default function Input({ item }) {
  const { type, id, name, value, register, title } = item;
  return (
    <label htmlFor={id}>
      <input type={type} id={id} name={name} value={value} ref={register} />
      {title}
    </label>
  );
}
