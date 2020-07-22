import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Category1 from '../template/Category1';

export default function SetPush(props) {
  const { register } = useForm();
  const onSubmit = (data) => {
    setResult(JSON.stringify(data, null, 2));
  };
  const [result, setResult] = useState('');
  // const watchInspectionDetail = watch('pet.inspection', props.set);

  const methods = useForm();

  return (
    <>
    <FormProvider {...methods}>
      <h1>{'PUSH 설정'}</h1>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Category1 register={register} />
        <div>
          <input type="submit" />
        </div>
      </form>
      </FormProvider>
      {result && <textarea style={{ height: '400px', width: '300px', marginTop: '30px' }} value={result} readOnly></textarea>}
    </>
  );
}
