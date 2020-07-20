import React from 'react';
import { RadioButtonGroup } from '../molecules';
import { DateInputGroup } from '../molecules';

export default function RadioDate({ control, title, groupData }) {
  const { radioData, dateData } = groupData;
  return (
    <div>
      <p>{title}</p>
      <RadioButtonGroup inputData={radioData} />
      <DateInputGroup control={control} inputData={dateData} />
    </div>
  );
}
