import React from 'react';
import { RadioButtonGroup } from '../molecules';
import { DateInputGroup } from '../molecules';

export default function RadioDate({ title, groupData }) {
  const { radioData, dateData, isDisable } = groupData;
  return (
    <div style={{display: 'flex'}}>
      <p>{title}</p>
      <RadioButtonGroup inputData={radioData} />
      <DateInputGroup inputData={dateData} isDisable={isDisable} />
    </div>
  );
}
