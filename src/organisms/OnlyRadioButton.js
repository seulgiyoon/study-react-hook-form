import React from 'react';
import { RadioButtonGroup } from '../molecules';

export default function OnlyCheckbox({ title, groupData }) {
  return (
    <div>
      <p>{title}</p>
      <RadioButtonGroup inputData={groupData} />
    </div>
  );
}
