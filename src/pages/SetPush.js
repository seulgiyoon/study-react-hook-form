import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Category1 from '../template/Category1';

export default function SetPush(props) {
  const { register, handleSubmit, watch, reset, errors, control } = useForm();
  const onSubmit = (data) => {
    setResult(JSON.stringify(data, null, 2));
  };
  const [result, setResult] = useState('');
  // const watchInspectionDetail = watch('pet.inspection', props.set);

  return (
    <>
      <h1>{'PUSH 설정'}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Category1 register={register} control={control} />
        <div>
          <input type="submit" />
        </div>
      </form>
      {result && <textarea style={{ height: '400px', width: '300px', marginTop: '30px' }} value={result} readOnly></textarea>}
    </>
  );
}
