import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

export default function DateInputGroup({ inputData, isDisable }) {
  const { register, watch, reset, control } = useFormContext();

  return (
    <>
      <Controller
        as={TextField}
        id={inputData[0].id}
        type="date"
        name={inputData[0].name}
        control={control}
        // defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
        disabled={!isDisable}
      />
      ~
      <Controller
        as={TextField}
        id={inputData[1].id}
        type="date"
        name={inputData[1].name}
        control={control}
        // defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
        disabled={!isDisable}
      />
    </>
  );
}
