import React from 'react';
import { CheckboxGroup } from '../molecules';

export default function OnlyCheckbox({ title, groupData }) {
  return (
    <div>
      <p>{title}</p>
      <CheckboxGroup inputData={groupData} />
    </div>
  );
}
