import React from 'react';
import CategoryWrapper from './CategoryWrapper';
import { OnlyCheckbox, RadioDate } from '../organisms';
import { useFormContext } from 'react-hook-form';

export default function Category1(props) {
  const { getValues, register, watch, reset } = useFormContext();
  const ageData = {
    // isDisable: watch('member.age[0]', props.all),
    checkboxData: [
      {
        id: 'member_age_select1',
        name: 'member.age[0]',
        value: 'all',
        register: register,
        title: '전연령',
        onChange: () =>
          watch('member.age[0]', props.all)
            ? reset({ member: { ...getValues().member, age: ['all', false, false] } })
            : reset({ member: { ...getValues().member, age: [false, false, false] } }),
      },
      {
        id: 'member_age_select2',
        name: 'member.age[1]',
        value: '10',
        register: register,
        title: '10대',
        isDisable: watch('member.age[0]', props.all),
      },
      {
        id: 'member_age_select3',
        name: 'member.age[2]',
        value: '20',
        register: register,
        title: '20대',
        isDisable: watch('member.age[0]', props.all),
      },
    ],
  };

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
        onChange: () => {
          reset(
            { member: { ...getValues().member, register_start: '', register_end: '' } }
          )
        }
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
        register: register(
          watch('member.register', props.set) ? { required : 'error' } : null
        ),
      },
      {
        id: 'member_register_end',
        name: 'member.register_end',
        register: register({
          validate: (value) => getValues().member.register_start <= value || 'error message'  // <p>error message</p>
        })
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
