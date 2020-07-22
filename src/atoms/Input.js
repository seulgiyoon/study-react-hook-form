import React from 'react';

export default function Input({ type, item }) {
  const {
    id,
    name,
    value,
    register,
    title,
    isDisable,
    onChange,
    defaultChecked,
  } = item;

  return (
    <label htmlFor={id}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        ref={register}
        disabled={isDisable}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      {title}
    </label>
  );
}
