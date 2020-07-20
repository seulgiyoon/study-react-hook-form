import React from 'react';
import { Input } from '../atoms';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';

export default function DateInputGroup({ control, inputData }) {
  // 달력 연동
  return (
    <div>
      <Controller
        as={
          <TextField
            id={inputData[0].id}
            label={inputData[0].id}
            type="date"
            defaultValue="2017-05-24"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
        control={control}
        name={inputData[0].name}
      />
      ~
      <Controller
        as={
          <TextField
            id={inputData[1].id}
            label={inputData[1].id}
            type="date"
            defaultValue="2017-05-24"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
        control={control}
        name={inputData[1].name}
      />
      {/* <Input type={'text'} item={inputData[0]} /> */}~{/* <Input type={'text'} item={inputData[1]} /> */}
    </div>
  );
}
