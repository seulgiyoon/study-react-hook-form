import React from 'react';
import CategoryWrapper from './CategoryWrapper';
import { OnlyCheckbox, RadioDate } from '../organisms';

export default function Category1({ register, control }) {
  const ageData = [
    {
      id: 'member_age_select1',
      name: 'member.age',
      value: 'all',
      register: register,
      title: '전연령',
    },
    {
      id: 'member_age_select2',
      name: 'member.age',
      value: '10',
      register: register,
      title: '10대',
    },
    {
      id: 'member_age_select3',
      name: 'member.age',
      value: '20',
      register: register,
      title: '20대',
    },
  ];

  const registerDateData = {
    radioData: [
      {
        id: 'member_register_select1',
        name: 'member.register',
        value: '',
        register: register,
        title: '미설정',
      },
      {
        id: 'member_register_select2',
        name: 'member.register',
        value: 'set',
        register: register,
        title: '설정',
      },
    ],
    dateData: [
      {
        id: 'member_register_select1',
        name: 'member.register',
        register: register,
      },
      {
        id: 'member_register_select2',
        name: 'member.register',
        register: register,
      },
    ],
  };

  return (
    <CategoryWrapper title={'1. 사용자'}>
      <OnlyCheckbox title={'연령대'} groupData={ageData} />
      <RadioDate title={'가입일'} control={control} groupData={registerDateData} />
    </CategoryWrapper>
  );
}
