import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { Controller } from 'react-hook-form';
// import { useFormContext } from 'react-hook-form';
import { Input } from '../atoms';

export default function DateInputGroup({ inputData, isDisable }) {
  return (
    <>
      {inputData.map((item, index) => (
        <Input key={index} type={'date'} item={item} isDisable={isDisable} />
      ))}
    </>
  );
}
