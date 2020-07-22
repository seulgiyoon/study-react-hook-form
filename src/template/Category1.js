import React from 'react';
import CategoryWrapper from './CategoryWrapper';
import { OnlyCheckbox, RadioDate } from '../organisms';
import { useFormContext } from 'react-hook-form';

export default function Category1(props) {
  const { register, watch, reset } = useFormContext();

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
    isDisable: watch('member.register', props.set),
    radioData: [
      {
        id: 'member_register_select1',
        name: 'member.register',
        value: '',
        register: register,
        title: '미설정',
        defaultChecked: true,
        onChange: () => reset({ member: { register_start: '', register_end: '' } })
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
        id: 'member_register_start',
        name: 'member.register_start',
      },
      {
        id: 'member_register_end',
        name: 'member.register_end',
      },
    ],
  };

  return (
    <CategoryWrapper title={'1. 사용자'}>
      <OnlyCheckbox title={'연령대'} groupData={ageData} />
      <RadioDate title={'가입일'} groupData={registerDateData} />
    </CategoryWrapper>
  );
}
